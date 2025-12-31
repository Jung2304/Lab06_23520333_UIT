import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the request is to the /api/secret endpoint
  if (request.nextUrl.pathname === '/api/secret') {
    const apiKey = request.headers.get('x-api-key');
    const secretKey = process.env.API_SECRET_KEY;

    // Validate the API key
    if (!apiKey || apiKey !== secretKey) {
      // Return 401 Unauthorized response
      return NextResponse.json(
        { 
          error: 'Unauthorized',
          message: 'Invalid or missing API key. Please provide x-api-key header with the correct value.'
        },
        { status: 401 }
      );
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: '/api/secret',
};
