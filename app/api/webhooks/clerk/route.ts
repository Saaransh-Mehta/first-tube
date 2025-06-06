import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
export const runtime = "nodejs";

export async function POST(req: Request) {
  console.log("Webhook received!");
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not set!");
    return new Response('Error: WEBHOOK_SECRET not set', { status: 500 });
  }

  // Get the headers
  const headerPayload =await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  console.log("Svix Headers:", { svix_id, svix_timestamp, svix_signature });


  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing Svix headers");
    return new Response("Error occured -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.text();
  console.log("Raw Payload:", payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Webhook verified successfully!");
  } catch (err) {
    console.error(err,"Error verifying webhook:");
    return new Response("Error occured", {
      status: 400,
    });
  }

  // Process the webhook event
  const eventType = evt.type;
  console.log("Event Type:", eventType);

  // ... your database logic here ...

  return new Response('Webhook received and processed', { status: 200 });
}