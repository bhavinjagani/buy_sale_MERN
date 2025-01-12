import { getCategoriesByType, getCategoryByName, getSubCategoriesByNameorID, createOneAd, updateOneAd, getLatestAds } from "../models/adsModel.js";

const getAllCategories = async (req, res) => {
    let type = req.body.type;
 
    res.send(await getCategoriesByType(type));
}

const getCategory = async (req, res) => {
    let name = req.body.name;
    res.send(await getCategoryByName(name));
}

const getAllSubcategories = async (req, res) => {
    let type = req.body.type;
    let value = req.body.value;
    
    res.send(await getSubCategoriesByNameorID(type, value));
}

const createAd = async(req, res) => {
    let createAdObj = req.body
    res.send(await createOneAd(createAdObj));
}

const updateAd = async(req, res) => {
    let createAdObj = req.body
    res.send(await updateOneAd(createAdObj));
}


const latestAds = async(req, res) => {
    res.send(await getLatestAds());
}

export { getAllCategories, getCategory, getAllSubcategories, createAd, updateAd, latestAds };