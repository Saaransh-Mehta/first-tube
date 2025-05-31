import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = createRouteMatcher([
  "/signin",
  "/sign-up",
  "/",
  "/home",
]);

// List your public API routes here; these don't need auth
const publicApiRoutes = createRouteMatcher([
  "/api/videos",
]);

export default  clerkMiddleware(async (auth, req) => {
  const { userId }:any = await auth();
  console.log(userId)
  const url = new URL(req.url);
  const pathname = url.pathname;

  const isApi = pathname.startsWith("/api");
  const isPublicPage = publicRoutes(req);
  const isPublicApi = publicApiRoutes(req);

  // If logged in user tries to access a public page (like signin), redirect to home
  if (userId && isPublicPage && pathname !== "/home") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // If not logged in user tries to access protected page
  if (!userId) {
    if (!isPublicPage && !isApi) {
      // Redirect to signin for browser pages
      return NextResponse.redirect(new URL("/signin", req.url));
    }

    if (isApi && !isPublicApi) {
      // For protected API routes, respond with 401 (no redirect)
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized" }),
        {
          status: 401,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  }

  // Otherwise allow access
  return NextResponse.next();
});

export const config = {
 matcher: [
    "/social-share",
    "/video-upload",
    "/api/video-upload",
    "/api/social-share",
    "/((?!.*\\..*|_next).*)",  // Keep broad matcher if needed
  ],
};
