import { Link } from 'react-router-dom';

export default function AdsItem({ cat_name, imgurl, cat_url, adscount }) {
    const imageUrl = `http://localhost:8000/Images/category/${imgurl}`;
    return (
        <Link to={cat_url} className="category-card" style={{ textDecoration: 'none' }}>
            <div className="category-card-img-wrap">
                <img
                    src={imageUrl}
                    alt={cat_name}
                    onError={(e) => { e.target.src = '/images/no_image.jpg'; }}
                />
            </div>
            <div className="category-card-body">
                <div className="category-card-name">{cat_name}</div>
                {adscount !== undefined && (
                    <span className="category-ads-badge">{adscount} Ads</span>
                )}
            </div>
        </Link>
    );
}
