import { connection } from '../database.js'
import { getCategoryByName, getSubCategoryByName } from './adsModel.js'





const searchallAds = async (category = null, itemCondition = null, start = 0, end = 30) => {
    let sqlQuery
    if (itemCondition == null) {
        if (category == null) {

            sqlQuery = `select * from ads where status = 'Active' order by ad_id DESC Limit ${start},${end}`
        }
        else {
            let categoryDetails = await getCategoryByName(category)
            
            let categoryId = categoryDetails[0].cat_id

            sqlQuery = `select * from ads where status = 'Active' AND cat_id = '${categoryId}' order by ad_id DESC Limit ${start},${end}`
        }

    }
    if (itemCondition != null) {
        if(category==null){
            sqlQuery = `select * from ads where status = 'Active' AND item_condition = '${itemCondition}' order by ad_id DESC Limit ${start},${end}`
        }
        else {
            let categoryDetails = await getCategoryById(category)
           
            let categoryId = categoryDetails[0].cat_id
            sqlQuery = `select * from ads where status = 'Active' AND item_condition = '${itemCondition}'  AND cat_id = '${categoryId}' order by ad_id DESC Limit ${start},${end}`

        }

    }


 
    let allAds = await new Promise((resolve, reject) => {
        connection.query(sqlQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    
    let allAdsResponse;

    let allAdsCountsQuery = `SELECT count(ad_id) as all_ads_count from ads where status = 'Active'`;
    let allAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(allAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let allAdsCount = allAdsCountResponse[0].all_ads_count;

    let newAdsCountsQuery = `SELECT count(ad_id) as new_ads_count from ads where status = 'Active' AND item_condition = 'New Item'`;
    let newAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(newAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let newAdsCount = newAdsCountResponse[0].new_ads_count;


    let usedAdsCountsQuery = `SELECT count(ad_id) as old_ads_count from ads where status = 'Active' AND item_condition = 'OLD Item'`;
    let usedAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(usedAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let oldAdsCount = usedAdsCountResponse[0].old_ads_count;

    allAdsResponse = {
        "ads": allAds,
        "ads_count" : {
            "all" : allAdsCount,
            "new" : newAdsCount,
            "old" : oldAdsCount
        }
    }

    return allAdsResponse;

};


const search = async (category=null,location=null,query=null,itemCondition=null,start=0,end=30) => {
    let categoryId;
    let subCategoryId;
    //get the category id  or sub-category id from the category name 
    if (category!=null){
        let categoryDetails = await getCategoryByName(category)
        
        if (categoryDetails.length>0){  //Check if the category exists if not then user might be searching for subcategory
        categoryId = categoryDetails[0].cat_id
        }
        else{
            let subCategoryDetails = await getSubCategoryByName(category)
            subCategoryId = subCategoryDetails[0].sub_cat_id

        }

    }

    let searchSqlQuery = `select * from ads where status = 'Active'  `
    
    if (category!=null){
        if (categoryId!=null){
        searchSqlQuery += ` AND cat_id = '${categoryId}' `
        }
        else{
            searchSqlQuery += ` AND sub_cat_id = '${subCategoryId}' `
        }
    }
    if (location!=null){
        searchSqlQuery += ` AND ( city= '${location}' OR state='${location}'   ) `
    }

    if (query!=null){
        searchSqlQuery += ` AND  ad_title like '%${query}%'   `
    }
    
    let adsCountBaseQuery = searchSqlQuery
    if (itemCondition!=null){
        searchSqlQuery += ` AND item_condition = '${itemCondition}' `
    }

    searchSqlQuery += ` order by ad_id DESC Limit ${start},${end} `

   

    let searchResults = await new Promise((resolve, reject) => {
        connection.query(searchSqlQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    //Ads Count Logic
    adsCountBaseQuery = adsCountBaseQuery.replace(`select *`,`SELECT count(ad_id) as ads_count`);
    let allAdsCountsQuery = adsCountBaseQuery
  
    let allAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(allAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let allAdsCount = allAdsCountResponse[0].ads_count;
   

    let newAdsCountsQuery = adsCountBaseQuery + ` AND item_condition='New Item'`
    let newAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(newAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let newAdsCount = newAdsCountResponse[0].ads_count;


    let usedAdsCountsQuery = adsCountBaseQuery + ` AND item_condition='OLD Item'`;
    let usedAdsCountResponse = await new Promise((resolve, reject) => {
        connection.query(usedAdsCountsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    let oldAdsCount = usedAdsCountResponse[0].ads_count;

    let searchAdsResponse;
    searchAdsResponse = {
        "ads" : searchResults,
        "ads_count" : {
            "all" : allAdsCount,
            "new" : newAdsCount,
            "old" : oldAdsCount

            }
    }
    return searchAdsResponse;



}

export { searchallAds ,search}