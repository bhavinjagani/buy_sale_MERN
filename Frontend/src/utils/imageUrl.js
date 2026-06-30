const S3_URL = process.env.REACT_APP_S3_URL;
const API_URL = process.env.REACT_APP_API_URL;


export const getAdImageUrl = (filename) => {
    if (!filename) return '/images/no_image.jpg';
    const first = filename.split(',')[0];
    return first.includes('/')
        ? `${S3_URL}/${first}`
        : `${API_URL}/Images/uploads/${first}`;
};

export const getUserImageUrl = (custimg) => {
    if (!custimg) return '/images/user.jpg';
    return custimg.includes('/')
        ? `${S3_URL}/${custimg}`
        : `${API_URL}/Images/uploads/users/${custimg}`;
};

