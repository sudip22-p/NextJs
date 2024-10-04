import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about-us')) {
    return NextResponse.redirect(new URL('/about', request.url))//redirect to /about
  }
 
  if (request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.rewrite(new URL('/', request.url))//rewrite to / meaning it will not change the url but will show the content of /
  }
}