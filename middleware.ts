import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  console.log(request.nextUrl)
  if (request.nextUrl.pathname.includes('/dashboard')) {
    // console.log('validating dashboard')
    return NextResponse.rewrite(new URL('/login', request.url))
  }
  return NextResponse.next()
}
