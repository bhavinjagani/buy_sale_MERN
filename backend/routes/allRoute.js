import express from "express";
import * as userController from '../controllers/userController.js';
import * as adsController from '../controllers/adsController.js';
import * as searchController from '../controllers/searchController.js'

let router = express.Router();

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