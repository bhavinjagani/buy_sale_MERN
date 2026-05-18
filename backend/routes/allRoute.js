import express from "express";
import multer from "multer";
import path from "path";
import * as userController from '../controllers/userController.js';
import * as adsController from '../controllers/adsController.js';
import * as searchController from '../controllers/searchController.js'

let router = express.Router();

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => cb(null, 'public/Images/uploads/'),
    filename: (_req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, unique + path.extname(file.originalname));
    }
});
const upload = multer({ storage, limits: { fileSize: 15 * 1024 * 1024 } });

router.post('/upload', upload.array('images', 6), (req, res) => {
    const filenames = req.files.map(f => f.filename).join(',');
    res.json({ success: true, filenames });
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