import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { files } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import path from 'path';

const GOOGLE_ADS_SIZES = [
  { width: 300, height: 250, name: 'Google Ads - Medium Rectangle' },
  { width: 336, height: 280, name: 'Google Ads - Large Rectangle' },
  { width: 728, height: 90, name: 'Google Ads - Leaderboard' },
  { width: 300, height: 600, name: 'Google Ads - Large Skyscraper' },
  { width: 320, height: 100, name: 'Google Ads - Large Mobile Banner' },
  { width: 160, height: 600, name: 'Google Ads - Wide Skyscraper' },
  { width: 970, height: 90, name: 'Google Ads - Large Leaderboard' },
  { width: 970, height: 250, name: 'Google Ads - Billboard' },
  { width: 250, height: 250, name: 'Google Ads - Square' },
  { width: 200, height: 200, name: 'Google Ads - Small Square' },
  { width: 468, height: 60, name: 'Google Ads - Banner' }
];

const SOCIAL_MEDIA_SIZES = [
  { width: 1080, height: 1080, name: 'Instagram - Square Post' },
  { width: 1200, height: 628, name: 'Facebook - News Feed' },
  { width: 1200, height: 675, name: 'Twitter - Shared Links' },
  { width: 1280, height: 720, name: 'YouTube - HD Thumbnail' },
  { width: 1080, height: 1920, name: 'Instagram Story' },
  { width: 1000, height: 1500, name: 'Pinterest - Long Pin' }
];

async function generatePngVariants() {
  const createdFiles = [];
  const updatedFiles = [];
  
  try {
    const svgPath = path.join(process.cwd(), 'public', 'logo.svg');
    const svgBuffer = readFileSync(svgPath);
    
    const allSizes = [...GOOGLE_ADS_SIZES, ...SOCIAL_MEDIA_SIZES];
    
    for (const size of allSizes) {
      const fileName = `logo-${size.width}x${size.height}.png`;
      const category = GOOGLE_ADS_SIZES.includes(size) ? 'google-ads' : 'social';
      const metadata = {
        width: size.width,
        height: size.height,
        source: 'logo.svg',
        category: category,
        description: size.name
      };
      
      const pngBuffer = await sharp(svgBuffer)
        .resize(size.width, size.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toBuffer();
      
      const existingFile = await db.select()
        .from(files)
        .where(eq(files.name, fileName))
        .limit(1);
      
      if (existingFile.length > 0) {
        const updatedFile = await db.update(files)
          .set({
            mimeType: 'image/png',
            sizeBytes: pngBuffer.length,
            data: pngBuffer,
            metadata: metadata,
          })
          .where(eq(files.id, existingFile[0].id))
          .returning();
        
        updatedFiles.push(updatedFile[0]);
      } else {
        const newFile = await db.insert(files)
          .values({
            name: fileName,
            mimeType: 'image/png',
            sizeBytes: pngBuffer.length,
            data: pngBuffer,
            metadata: metadata,
            createdAt: new Date().toISOString()
          })
          .returning();
        
        createdFiles.push(newFile[0]);
      }
    }
    
    return { createdFiles, updatedFiles };
  } catch (error) {
    console.error('Error generating PNG variants:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { createdFiles, updatedFiles } = await generatePngVariants();
    
    return NextResponse.json({
      success: true,
      createdCount: createdFiles.length,
      updatedCount: updatedFiles.length,
      totalCount: createdFiles.length + updatedFiles.length,
      createdFiles: createdFiles.map(file => ({
        id: file.id,
        name: file.name,
        sizeBytes: file.sizeBytes
      })),
      updatedFiles: updatedFiles.map(file => ({
        id: file.id,
        name: file.name,
        sizeBytes: file.sizeBytes
      }))
    }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({
      error: 'Failed to generate PNG variants: ' + error
    }, { status: 500 });
  }
}