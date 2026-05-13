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
    console.log("this are the category",categoryQuery);
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

// Maps GraphQL/JS field names → DB column names
const AD_FIELD_MAP = {
    userId:        'user_id',
    adType:        'ad_type',
    adTitle:       'ad_title',
    catId:         'cat_id',
    subCatId:      'sub_cat_id',
    brandId:       'brand_id',
    make:          'make',
    price:         'price',
    model:         'model',
    year:          'year',
    fuel:          'fuel',
    kmDriven:      'km_driven',
    version:       'version',
    color:         'color',
    owner:         'owner',
    insurance:     'insurance',
    furnished:     'furnished',
    rooms:         'rooms',
    squareFeet:    'squer_feet',
    superBuiltup:  'superbuiltup',
    carpet:        'carpet',
    bedroom:       'bedroom',
    bathroom:      'bathroom',
    maintenance:   'maintanance',
    parking:       'parking',
    adDescription: 'ad_description',
    adImage:       'ad_image',
    name:          'name',
    email:         'email',
    mobile:        'mobile',
    views:         'views',
    country:       'country',
    state:         'state',
    city:          'city',
    itemCondition: 'item_condition',
    status:        'status',
    uBrowser:      'ubrowser',
    ipAddress:     'ipaddress',
    loc:           'loc',
    org:           'org',
};

const createOneAd = async (adData) => {
    const setClauses = [];
    const values = [];

    for (const [jsKey, dbCol] of Object.entries(AD_FIELD_MAP)) {
        const val = adData[jsKey];
        if (val !== undefined && val !== null && val !== '') {
            setClauses.push(`${dbCol} = ?`);
            values.push(val);
        }
    }

    const query = `INSERT INTO ads SET ${setClauses.join(', ')}`;

    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
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

const getAdById = async (id) =>{
    let query = `SELECT * FROM ads WHERE ad_id = ${connection.escape(id)} LIMIT 1`;
    let response = await new Promise((resolve,reject)=>{
        connection.query(query,(err,results)=>{
            if(err) return reject(err);
            return resolve(results)
        })
    })
    console.log("this is response",response)
    return response ?? null
}
const getLocations = async (country = null, state = null) => {
    let query = `SELECT name FROM location_states`;
    const params = [];

    if (country && state) {
        query += ` WHERE country_id = ? AND state_id = ?`;
        params.push(parseInt(country), parseInt(state));
    } else if (country) {
        query += ` WHERE country_id = ?`;
        params.push(parseInt(country));
    }
    console.log("this is query for location",query)

    let response = await new Promise((resolve, reject) => {
        connection.query(query, params, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
    return response ?? null;
}

const getAdsByUser = (userId) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT ads.*, category.cat_name
             FROM ads
             LEFT JOIN category ON ads.cat_id = category.cat_id
             WHERE ads.user_id = ?
             ORDER BY ads.adcreated_date DESC`,
            [userId],
            (err, results) => {
                if (err) return reject(err);
                return resolve(results);
            }
        );
    });
};

export { getCategoriesByType, getCategoryByName, getSubCategoryByName, getSubCategoriesByNameorID, createOneAd, updateOneAd, getLatestAds, getAdById, getLocations, getAdsByUser };