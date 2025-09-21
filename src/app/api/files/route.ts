import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { files } from '@/db/schema';
import { eq, desc, asc } from 'drizzle-orm';

// GET /api/files - List all files (public access)
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');

    const results = await db
      .select({
        id: files.id,
        name: files.name,
        mimeType: files.mimeType,
        sizeBytes: files.sizeBytes,
        createdAt: files.createdAt
      })
      .from(files)
      .orderBy(desc(files.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET files error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

// POST /api/files - Upload/create new file (protected)
export async function POST(request: NextRequest) {
  try {
    // Check if token is configured
    const token = process.env.NEXT_PUBLIC_UPLOAD_BEARER_TOKEN || process.env.FILE_UPLOAD_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'Upload disabled', code: 'UPLOAD_DISABLED' },
        { status: 403 }
      );
    }

    // Validate Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization header required', code: 'AUTH_REQUIRED' },
        { status: 401 }
      );
    }

    const providedToken = authHeader.substring(7);
    if (providedToken !== token) {
      return NextResponse.json(
        { error: 'Invalid token', code: 'INVALID_TOKEN' },
        { status: 401 }
      );
    }

    const contentType = request.headers.get('content-type') || '';

    let name: string;
    let mimeType: string;
    let sizeBytes: number;
    let data: Buffer;

    if (contentType.includes('multipart/form-data')) {
      // Handle multipart/form-data
      const formData = await request.formData();
      const file = formData.get('file') as File | null;

      if (!file) {
        return NextResponse.json(
          { error: 'No file provided', code: 'MISSING_FILE' },
          { status: 400 }
        );
      }

      name = file.name;
      mimeType = file.type || 'application/octet-stream';
      sizeBytes = file.size;
      const arrayBuffer = await file.arrayBuffer();
      data = Buffer.from(arrayBuffer);
    } else if (contentType.includes('application/json')) {
      // Handle JSON with base64 data
      const body = await request.json();
      
      if (!body.name || typeof body.name !== 'string' || body.name.trim() === '') {
        return NextResponse.json(
          { error: 'Name is required', code: 'MISSING_NAME' },
          { status: 400 }
        );
      }

      if (!body.mimeType || typeof body.mimeType !== 'string' || body.mimeType.trim() === '') {
        return NextResponse.json(
          { error: 'MIME type is required', code: 'MISSING_MIME_TYPE' },
          { status: 400 }
        );
      }

      if (!body.data || typeof body.data !== 'string') {
        return NextResponse.json(
          { error: 'Data is required', code: 'MISSING_DATA' },
          { status: 400 }
        );
      }

      name = body.name.trim();
      mimeType = body.mimeType.trim();
      
      try {
        data = Buffer.from(body.data, 'base64');
        sizeBytes = data.length;
      } catch (error) {
        return NextResponse.json(
          { error: 'Invalid base64 data', code: 'INVALID_BASE64' },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { error: 'Content-Type must be multipart/form-data or application/json', code: 'INVALID_CONTENT_TYPE' },
        { status: 400 }
      );
    }

    // Validate name after processing
    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'File name is required', code: 'MISSING_NAME' },
        { status: 400 }
      );
    }

    // Validate size limit (50MB max)
    if (sizeBytes > 50 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File too large (max 50MB)', code: 'FILE_TOO_LARGE' },
        { status: 400 }
      );
    }

    const createdAt = new Date().toISOString();

    const newFile = await db
      .insert(files)
      .values({
        name: name.trim(),
        mimeType,
        sizeBytes,
        data,
        createdAt
      })
      .returning({
        id: files.id,
        name: files.name,
        mimeType: files.mimeType,
        sizeBytes: files.sizeBytes,
        createdAt: files.createdAt
      });

    return NextResponse.json(newFile[0], { status: 201 });
  } catch (error) {
    console.error('POST files error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}