import { clerkMiddleware , createRouteMatcher} from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
let isPublic = createRouteMatcher([
    "/signin",
    "/signup",
    '/home',
    "/sign-up"
])

let isPublicApiRoute = createRouteMatcher([
    "/api/video"
])

export default clerkMiddleware((auth,req)=>{
    const {userId}:any = auth;
    const currentUrl = new URL(req.url) 
    const isAccessingHome = currentUrl.pathname === '/home'
    const isAccessingApi = currentUrl.pathname.startsWith('/api')

    if(userId && isPublic(req) && !isAccessingHome){
        return NextResponse.redirect(new URL('/home',req.url))
    }

    if(!userId){
        if(!isPublic(req) && !isPublicApiRoute(req)){
                return NextResponse.redirect(new URL('/sign-up',req.url))
        }
        
    }
  if(isAccessingApi && !isPublicApiRoute(req)){
        return NextResponse.redirect(new URL('/sign-up',req.url))
    }
    return NextResponse.next()

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}