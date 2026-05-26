import express from "express";
import multer from "multer";
import path from "path";
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { randomUUID } from 'crypto';
import * as userController from '../controllers/userController.js';
import * as adsController from '../controllers/adsController.js';
import * as searchController from '../controllers/searchController.js'

let router = express.Router();

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 15 * 1024 * 1024 } });

router.post('/upload', upload.array('images', 6), async (req, res) => {
    try {
        const uploaded = await Promise.all(req.files.map(async (file) => {
            const ext = path.extname(file.originalname);
            const key = `uploads/${randomUUID()}${ext}`;
            await s3.send(new PutObjectCommand({
                Bucket:      process.env.S3_BUCKET,
                Key:         key,
                Body:        file.buffer,
                ContentType: file.mimetype,
            }));
            return key;
        }));
        res.json({ success: true, filenames: uploaded.join(',') });
    } catch (err) {
        console.error('S3 upload error:', err);
        res.status(500).json({ success: false, message: 'Upload failed' });
    }
});

// userController - Login and Signup
router.post('/login', userController.login);
router.post('/register', userController.register);

// adsController - getCategories, getSubCategories
router.post('/getCategories', adsController.getAllCategories);
router.post('/getCategory', adsController.getCategory);
router.post('/getSubCategories', adsController.getAllSubcategories);
router.post('/createAd', adsController.createAd);
router.post('/updateAd', adsController.updateAd);
router.get('/latestAds', adsController.latestAds);
router.post('/searchAllAds', searchController.getAllAds);
router.post('/search',searchController.searchAds);

export { router }