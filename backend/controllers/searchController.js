import { searchallAds, search } from "../models/searchModel.js";
const getAllAds = async (req, res) => {
    let category = req.body.category;
    let itemCondition = req.body.item_condition;
    let start = req.body.start;
    let end = req.body.end;
    res.send(await searchallAds(category,itemCondition,start,end));
}

const searchAds = async(req,res) => {
    let category = req.body.category;
    let itemCondition = req.body.item_condition;
    let query = req.body.query;
    let location = req.body.location;
    let start = req.body.start;
    let end = req.body.end;
    res.send(await search(category,location,query,itemCondition,start,end));

}

export {getAllAds, searchAds}