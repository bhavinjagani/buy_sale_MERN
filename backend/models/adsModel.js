import { connection } from '../database.js'


const getCategoriesByType = async (type = null) => {
    let categoryQuery;
    if (type) {
        categoryQuery = `select * from category where cat_type = '${type}'`;
    }
    else {
        categoryQuery = `SELECT c.*, COUNT(p.cat_id) AS adscount 
FROM category AS c 
LEFT JOIN ads AS p ON (c.cat_id = p.cat_id AND p.status = 'Active') 
WHERE c.status = 'Active' 
GROUP BY c.cat_id 
ORDER BY c.cat_id;
`;
    }
    console.log(categoryQuery);
    let categoryResponse = await new Promise((resolve, reject) => {
        connection.query(categoryQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return categoryResponse;
};

const getCategoryByName = async (name) => {
    let categoryQuery;
    categoryQuery = `select * from category where cat_name = '${name}'`;
    
    
    let categoryResponse = await new Promise((resolve, reject) => {
        connection.query(categoryQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return categoryResponse;
};

const getSubCategoryByName = async (name) => {
    let subCategoryQuery;
    subCategoryQuery = `select * from sub_category where sub_cat_name = '${name}'`;
    
   
    let subCategoryResponse = await new Promise((resolve, reject) => {
        connection.query(subCategoryQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return subCategoryResponse;
};

const getSubCategoriesByNameorID = async (type, value) => {
    let subcategoryQuery;
    if (type == "name") {
        subcategoryQuery = `select * from sub_category,category where sub_category.cat_id = category.cat_id AND category.cat_name = '${value}'`;
    }
    else if (type == "id") {
        subcategoryQuery = `select * from sub_category,category where sub_category.cat_id = category.cat_id AND category.cat_id = '${value}'`;
    }
   
    let subcategoryResponse = await new Promise((resolve, reject) => {
        connection.query(subcategoryQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return subcategoryResponse;
};

const createOneAd = async (adData) => {

    let adDataQuery = `insert into ads set 
    user_id = '${adData.userId}', 
    ad_type = '${adData.adType}', 
    ad_title = '${adData.adTitle}', 
    cat_id = '${adData.catId}',
    sub_cat_id = '${adData.subCatId}',
    brand_id = '${adData.brandId ?? null}',
    make = '${adData.make ?? null}',
    price = '${adData.price ?? null}',
    model = '${adData.model ?? null}',
    year = '${adData.year ?? null}',
    fuel = '${adData.fuel ?? null}',
    km_driven = '${adData.kmDriven ?? null}',
    version = '${adData.version ?? null}',
    color = '${adData.color ?? null}',
    owner = ${adData.owner ?? null},
    insurance = '${adData.insurance ?? null}',
    furnished = '${adData.furnished ?? null}',
    rooms = '${adData.rooms ?? null}',
    squer_feet = '${adData.squareFeet ?? null}',
    superbuiltup = '${adData.superBuiltup ?? null}',
    carpet = '${adData.carpet ?? null}',
    bedroom = ${adData.bedroom ?? null},
    bathroom = ${adData.bathroom?? null},
    maintanance = ${adData.maintenance?? null},
    parking = '${adData.parking ?? null}',
    ad_description = '${adData.adDescription}',
    ad_image = '${adData.adImage}',
    name = '${adData.name}',
    email = '${adData.email}',
    mobile = '${adData.mobile}',
    views = ${adData.views ?? null},
    country = '${adData.country}',
    state = '${adData.state}',
    city = '${adData.city}',
    item_condition = '${adData.itemCondition}',
    status = '${adData.status ?? null}',
    ubrowser = '${adData.uBrowser}',
    ipaddress = '${adData.ipAddress}',
    loc = '${adData.loc ?? null}',
    org = '${adData.org ?? null}'
    `
   
    let createAdResponse = await new Promise((resolve, reject) => {
        connection.query(adDataQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return createAdResponse;
}

const updateOneAd = async (adData) => {

    let updateDataQuery = `update ads set 
    user_id = ${adData.userId}, 
    ad_type = ${adData.adType}, 
    ad_title = ${adData.adTitle}, 
    cat_id = ${adData.catId},
    sub_cat_id = ${adData.subCatId},
    brand_id = ${adData.brandId},
    make = ${adData.make},
    price = ${adData.price},
    model = ${adData.model},
    year = ${adData.year},
    fuel = ${adData.fuel},
    km_driven = ${adData.kmDriven},
    version = ${adData.version},
    color = ${adData.color},
    owner = ${adData.owner},
    insurance = ${adData.insurance},
    furnished = ${adData.furnished},
    romms = ${adData.rooms},
    squer_feet = ${adData.squareFeet},
    superbuiltup = ${adData.superBuiltup},
    carpet = ${adData.carpet},
    bedroom = ${adData.bedroom},
    bathroom = ${adData.bathroom},
    maintanance = 1,
    parking = ${adData.parking},
    ad_description = ${adData.adDescription},
    ad_image = ${adData.adImage},
    name = ${adData.name},
    email = ${adData.email},
    mobile = ${adData.mobile},
    views = ${adData.views},
    country = ${adData.country},
    state = ${adData.state},
    city = ${adData.city},
    item_condition = ${adData.itemCondition},
    status = ${adData.status},
    ubrowswer = ${adData.uBrowser},
    ipaddress = ${adData.ipAddress},
    loc = ${adData.loc},
    org = ${adData.org},
    `
    
    let updateAdResponse = await new Promise((resolve, reject) => {
        connection.query(updateDataQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return updateAdResponse;
}

const getLatestAds = async () => {
    let latestAdsQuery;
    latestAdsQuery = `select * from ads where status = 'Active' ORDER BY RAND() DESC Limit 0,5`;
    
    let latestAdsResponse = await new Promise((resolve, reject) => {
        connection.query(latestAdsQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return latestAdsResponse;
};


export { getCategoriesByType, getCategoryByName, getSubCategoryByName, getSubCategoriesByNameorID, createOneAd, updateOneAd, getLatestAds };