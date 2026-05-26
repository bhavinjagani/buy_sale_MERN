import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import path from 'path';

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

export const uploadToS3 = async (file) => {
    const ext      = path.extname(file.originalname);
    const filename = `uploads/${randomUUID()}${ext}`;

    await s3.send(new PutObjectCommand({
        Bucket:      process.env.S3_BUCKET,
        Key:         filename,
        Body:        file.buffer,
        ContentType: file.mimetype,
    }));

    return filename;
};
