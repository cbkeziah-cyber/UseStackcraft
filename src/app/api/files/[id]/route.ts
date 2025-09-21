import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { files } from '@/db/schema';
import { eq } from 'drizzle-orm';

// GET /api/files/[id] - Get file metadata by ID (public)
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
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

    const fileRecord = await db
      .select({
        id: files.id,
        name: files.name,
        mimeType: files.mimeType,
        sizeBytes: files.sizeBytes,
        metadata: files.metadata,
        createdAt: files.createdAt
      })
      .from(files)
      .where(eq(files.id, fileId))
      .limit(1);

    if (fileRecord.length === 0) {
      return NextResponse.json(
        { error: 'File not found', code: 'FILE_NOT_FOUND' },
        { status: 404 }
      );
    }

    return NextResponse.json(fileRecord[0]);
  } catch (error) {
    console.error('GET file metadata error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}

// DELETE /api/files/[id] - Delete file by ID (protected)
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // Check if token is configured
    const token = process.env.NEXT_PUBLIC_UPLOAD_BEARER_TOKEN || process.env.FILE_UPLOAD_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'Delete disabled', code: 'DELETE_DISABLED' },
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

    const { id } = params;
    
    // Validate ID parameter
    const fileId = parseInt(id);
    if (isNaN(fileId) || fileId < 1) {
      return NextResponse.json(
        { error: 'Invalid ID format', code: 'INVALID_ID' },
        { status: 400 }
      );
    }

    // Check if file exists first
    const existingFile = await db
      .select({
        id: files.id,
        name: files.name,
        mimeType: files.mimeType,
        sizeBytes: files.sizeBytes,
        createdAt: files.createdAt
      })
      .from(files)
      .where(eq(files.id, fileId))
      .limit(1);

    if (existingFile.length === 0) {
      return NextResponse.json(
        { error: 'File not found', code: 'FILE_NOT_FOUND' },
        { status: 404 }
      );
    }

    // Delete the file
    await db.delete(files).where(eq(files.id, fileId));

    return NextResponse.json({
      message: 'File deleted successfully',
      deletedFile: existingFile[0]
    });
  } catch (error) {
    console.error('DELETE file error:', error);
    return NextResponse.json(
      { error: 'Internal server error', code: 'INTERNAL_ERROR' },
      { status: 500 }
    );
  }
}