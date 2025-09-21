import { db } from '@/db';
import { files } from '@/db/schema';
import { readFileSync } from 'fs';
import { join } from 'path';
import { eq } from 'drizzle-orm';
import sharp from 'sharp';

// Define size configurations
const googleAdsSizes = [
    { width: 300, height: 250, name: 'Medium Rectangle' },
    { width: 336, height: 280, name: 'Large Rectangle' },
    { width: 728, height: 90, name: 'Leaderboard' },
    { width: 300, height: 600, name: 'Half Page' },
    { width: 320, height: 100, name: 'Large Mobile Banner' },
    { width: 160, height: 600, name: 'Wide Skyscraper' },
    { width: 970, height: 90, name: 'Large Leaderboard' },
    { width: 970, height: 250, name: 'Billboard' },
    { width: 250, height: 250, name: 'Square' },
    { width: 200, height: 200, name: 'Small Square' },
    { width: 468, height: 60, name: 'Banner' }
];

const socialSizes = [
    { width: 1080, height: 1080, name: 'Square post IG/FB' },
    { width: 1200, height: 628, name: 'FB/LinkedIn share' },
    { width: 1200, height: 675, name: 'X/Twitter share' },
    { width: 1280, height: 720, name: 'YouTube thumb' },
    { width: 1080, height: 1920, name: 'Stories/Reels/TikTok vertical' },
    { width: 1000, height: 1500, name: 'Pinterest standard' }
];

async function upsertFile(fileData: any) {
    // Check if file exists by name
    const existing = await db.select().from(files).where(eq(files.name, fileData.name)).limit(1);
    
    if (existing.length > 0) {
        // Update existing file
        await db.update(files)
            .set({
                mimeType: fileData.mimeType,
                sizeBytes: fileData.sizeBytes,
                data: fileData.data,
                metadata: fileData.metadata,
                createdAt: fileData.createdAt
            })
            .where(eq(files.name, fileData.name));
        console.log(`Updated existing file: ${fileData.name}`);
    } else {
        // Insert new file
        await db.insert(files).values(fileData);
        console.log(`Inserted new file: ${fileData.name}`);
    }
}

async function generatePngFromSvg(svgBuffer: Buffer, width: number, height: number): Promise<Buffer> {
    return await sharp(svgBuffer)
        .resize(width, height, { 
            fit: 'contain',
            background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .png()
        .toBuffer();
}

async function main() {
    const logoPath = join(process.cwd(), 'public', 'logo.svg');
    const logoBuffer = readFileSync(logoPath);
    
    // Keep existing placeholder
    const placeholderBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=';
    const placeholderBuffer = Buffer.from(placeholderBase64, 'base64');

    // Seed original files (idempotent)
    await upsertFile({
        name: 'logo.svg',
        mimeType: 'image/svg+xml',
        sizeBytes: logoBuffer.length,
        data: logoBuffer,
        metadata: { source: 'original', category: 'logo' },
        createdAt: new Date().toISOString(),
    });

    await upsertFile({
        name: 'placeholder.png',
        mimeType: 'image/png',
        sizeBytes: placeholderBuffer.length,
        data: placeholderBuffer,
        metadata: { width: 1, height: 1, source: 'generated', category: 'placeholder' },
        createdAt: new Date().toISOString(),
    });

    // Generate Google Ads variants
    console.log('Generating Google Ads variants...');
    for (const size of googleAdsSizes) {
        const fileName = `logo-${size.width}x${size.height}.png`;
        const pngBuffer = await generatePngFromSvg(logoBuffer, size.width, size.height);
        
        await upsertFile({
            name: fileName,
            mimeType: 'image/png',
            sizeBytes: pngBuffer.length,
            data: pngBuffer,
            metadata: {
                width: size.width,
                height: size.height,
                source: 'logo.svg',
                category: 'google-ads',
                description: size.name
            },
            createdAt: new Date().toISOString(),
        });
    }

    // Generate Social Media variants
    console.log('Generating Social Media variants...');
    for (const size of socialSizes) {
        const fileName = `logo-${size.width}x${size.height}.png`;
        const pngBuffer = await generatePngFromSvg(logoBuffer, size.width, size.height);
        
        await upsertFile({
            name: fileName,
            mimeType: 'image/png',
            sizeBytes: pngBuffer.length,
            data: pngBuffer,
            metadata: {
                width: size.width,
                height: size.height,
                source: 'logo.svg',
                category: 'social',
                description: size.name
            },
            createdAt: new Date().toISOString(),
        });
    }
    
    console.log('✅ Files seeder completed successfully: All logo variants generated and seeded');
}

main().catch((error) => {
    console.error('❌ Seeder failed:', error);
});