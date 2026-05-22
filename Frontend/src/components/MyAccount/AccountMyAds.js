import { useState } from 'react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const GET_USER_ADS = gql`
  query GetUserAds($userId: Int!) {
    getUserAds(userId: $userId) {
      ad_id
      ad_title
      ad_image
      cat_name
      price
      status
      adcreated_date
      ad_type
    }
  }
`;

function AdRow({ ad, onDelete }) {
  const img = ad.ad_image ? `process.env.REACT_APP_API_URL/Images/uploads/${ad.ad_image.split(',')[0]}` : '/images/no_image.jpg';
  return (
    <tr>
      <td>
        <div className="media mt-0 mb-0">
          <div className="card-aside-img">
            <img src={img} loading="lazy"  alt={ad.ad_title} className="cover-image" style={{ width: 60, height: 50, objectFit: 'cover' }} />
          </div>
          <div className="media-body ml-3">
            <Link to={`/ads/view/${ad.ad_id}`} className="text-dark">
              <h6 className="font-weight-semibold mt-1 mb-0">{ad.ad_title}</h6>
            </Link>
            <small className="text-muted">{ad.adcreated_date}</small>
          </div>
        </div>
      </td>
      <td>{ad.cat_name}</td>
      <td className="font-weight-semibold">${ad.price}</td>
      <td><span className="font-weight-semibold">{ad.status}</span></td>
      <td>
        <Link to={`/ads/view/${ad.ad_id}`} className="btn btn-primary btn-sm text-white mr-1" title="View">
          <i className="fa fa-eye"></i>
        </Link>
        <button className="btn btn-danger btn-sm text-white" title="Delete" onClick={() => onDelete(ad.ad_id)}>
          <i className="fa fa-trash-o"></i>
        </button>
      </td>
    </tr>
  );
}

export default function AccountMyAds() {
  const user = useSelector((state) => state.auth.user);
  const [activeTab, setActiveTab] = useState('Active');

  const { data, loading, error } = useQuery(GET_USER_ADS, {
    variables: { userId: user?.opid },
    skip: !user?.opid,
  });

  const allAds = data?.getUserAds ?? [];
  const filteredAds = allAds.filter(ad => ad.status === activeTab);

  const handleDelete = (_adId) => {
    if (window.confirm('Are you sure you want to delete this ad?')) {
      alert('Delete not yet implemented');
    }
  };

  const tabs = [
    { key: 'Active', label: 'Published' },
    { key: 'Sold', label: 'Sold' },
    { key: 'Trash', label: 'Trash' },
  ];

  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">My Ads</h3>
      </div>
      <div className="card-body">
        <div className="ads-tabs">
          <div className="tabs-menus">
            <ul className="nav panel-tabs">
              {tabs.map(t => (
                <li key={t.key}>
                  <button
                    className={`btn btn-link ${activeTab === t.key ? 'active font-weight-bold' : ''}`}
                    onClick={() => setActiveTab(t.key)}
                  >
                    {t.label} ({allAds.filter(a => a.status === t.key).length})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="tab-content mt-3">
            {loading && <p className="text-center text-muted">Loading ads...</p>}
            {error && <p className="text-danger">Error loading ads.</p>}
            {!loading && filteredAds.length === 0 && (
              <p className="text-muted text-center py-4">No {activeTab.toLowerCase()} ads found.</p>
            )}
            {filteredAds.length > 0 && (
              <div className="table-responsive">
                <table className="table table-bordered table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Category</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredAds.map(ad => (
                      <AdRow key={ad.ad_id} ad={ad} onDelete={handleDelete} />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
