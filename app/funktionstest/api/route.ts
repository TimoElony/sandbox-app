import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/funktionstest
 * Handle POST requests for the funktionstest page
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the incoming JSON body
    const body = await request.json();

    console.log('POST /api/funktionstest received by WebHook out of epilot:', body);

    // Your business logic here
    // Example: validate, process, save to database, call external service, etc.

    // Return a response
    return NextResponse.json(
      {
        success: true,
        message: 'Request processed successfully',
        data: {
          receivedAt: new Date().toISOString(),
          ...body,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process request',
      },
      { status: 400 }
    );
  }
}

/**
 * Optional: GET handler if you also need to fetch data
 */
export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: 'GET method is available',
    timestamp: new Date().toISOString(),
  });
}
