import { NextResponse } from 'next/server';
import { db } from '@/db';
import { files } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/files/[id]/download - Download file binary (public)
export async function GET(request: Request, { params }: any) {
  try {
    const { id } = params;
    
    // Validate ID parameter
    const fileId = parseInt(id);
    if (isNaN(fileId) || fileId < 1) {
      return NextResponse.json(
        { error: 'Invalid ID format', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Get complete file record including binary data
    const fileRecord = await db
      .select()
      .from(files)
      .where(eq(files.id, fileId))
      .limit(1);

    if (fileRecord.length === 0) {
      return NextResponse.json(
        { error: 'File not found', code: 'FILE_NOT_FOUND' },
        { status: 404 }
      );
    }

    const file = fileRecord[0];
    
    // Validate that data exists and is a buffer
    if (!file.data || !(file.data instanceof Buffer)) {
      return NextResponse.json(
        { error: 'File data corrupted', code: 'DATA_CORRUPTED' },
        { status: 500 }
      );
    }

    // Sanitize filename for Content-Disposition header
    const sanitizedName = file.name.replace(/[^\w\s.-]/g, '_');

    // Create response with proper headers for file download
    return new NextResponse(file.data, {
      status: 200,
      headers: {
        'Content-Type': file.mimeType,
        'Content-Length': file.sizeBytes.toString(),
        'Content-Disposition': `attachment; filename="${sanitizedName}"`,
        'Cache-Control': 'public, max-age=3600',
        // Add CORS headers for public access
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('File download error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}