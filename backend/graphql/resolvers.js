import { getCategoriesByType, getCategoryByName, getSubCategoriesByNameorID, createOneAd, updateOneAd, getLatestAds, getAdById, getLocations, getAdsByUser } from '../models/adsModel.js';
import { loginValidate, addUser, getUserById, updateUserProfile, changeUserPassword } from '../models/userModel.js';
import { searchallAds, search } from '../models/searchModel.js';
import { signToken } from '../utils/jwt.js';

export const resolvers = {
    Query: {
        categories: async (_, { type }) => {
            return await getCategoriesByType(type ?? null);
        },
        getLocations: async (_, { country, state }) => {
            return await getLocations(country, state);
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
        getAdById: async (_, { id }) => {
            return await getAdById(id);
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
        getUserAds: async (_, { userId }, { user }) => {
            if (!user) throw new Error('Not authenticated');
            return await getAdsByUser(userId);
        },
    },

    Mutation: {
        login: async (_, { username, password }) => {
            const results = await loginValidate(username, password);
            if (results.length > 0) {
                const dbUser = results[0];
                const token = signToken(dbUser);
                return { success: true, user: dbUser, token, message: 'Login successful' };
            }
            return { success: false, user: null, token: null, message: 'Invalid username or password' };
        },

        register: async (_, { username, name, password }) => {
            const added = await addUser(username, name, password);
            if (added) {
                return { success: true, message: 'User registered successfully' };
            }
            return { success: false, message: 'Username already exists' };
        },

        createAd: async (_, { input }, { user }) => {
            if (!user) throw new Error('Not authenticated');
            const result = await createOneAd(input);
            return { success: true, insertId: result.insertId, message: 'Ad created successfully' };
        },

        updateAd: async (_, { input }, { user }) => {
            if (!user) throw new Error('Not authenticated');
            await updateOneAd(input);
            return { success: true, message: 'Ad updated successfully' };
        },

        updateUserProfile: async (_, { input }, { user }) => {
            if (!user) throw new Error('Not authenticated');
            await updateUserProfile(user.user_id, input);
            const updated = await getUserById(user.user_id);
            return { success: true, user: updated[0], message: 'Profile updated successfully' };
        },

        changePassword: async (_, { currentPassword, newPassword }, { user }) => {
            if (!user) throw new Error('Not authenticated');
            const result = await changeUserPassword(user.user_id, currentPassword, newPassword);
            return result;
        },
    },
};
