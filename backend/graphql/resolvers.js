import { getCategoriesByType, getCategoryByName, getSubCategoriesByNameorID, createOneAd, updateOneAd, getLatestAds } from '../models/adsModel.js';
import { loginValidate, addUser } from '../models/userModel.js';
import { searchallAds, search } from '../models/searchModel.js';

export const resolvers = {
    Query: {
        categories: async (_, { type }) => {
            return await getCategoriesByType(type ?? null);
        },

        category: async (_, { name }) => {
            const results = await getCategoryByName(name);
            return results[0] ?? null;
        },

        subCategories: async (_, { type, value }) => {
            return await getSubCategoriesByNameorID(type, value);
        },

        latestAds: async () => {
            return await getLatestAds();
        },

        searchAllAds: async (_, { category, itemCondition, start, end }) => {
            return await searchallAds(category ?? null, itemCondition ?? null, start ?? 0, end ?? 30);
        },

        search: async (_, { category, location, query, itemCondition, start, end }) => {
            return await search(
                category ?? null,
                location ?? null,
                query ?? null,
                itemCondition ?? null,
                start ?? 0,
                end ?? 30
            );
        },
    },

    Mutation: {
        login: async (_, { username, password }) => {
            const results = await loginValidate(username, password);
            if (results.length > 0) {
                return { success: true, user: results[0], message: 'Login successful' };
            }
            return { success: false, user: null, message: 'Invalid username or password' };
        },

        register: async (_, { username, name, password }) => {
            const added = await addUser(username, name, password);
            if (added) {
                return { success: true, message: 'User registered successfully' };
            }
            return { success: false, message: 'Username already exists' };
        },

        createAd: async (_, { input }) => {
            const result = await createOneAd(input);
            return { success: true, insertId: result.insertId, message: 'Ad created successfully' };
        },

        updateAd: async (_, { input }) => {
            await updateOneAd(input);
            return { success: true, message: 'Ad updated successfully' };
        },
    },
};
