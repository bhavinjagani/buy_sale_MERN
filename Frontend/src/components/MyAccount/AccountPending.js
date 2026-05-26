import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAdImageUrl } from '../../utils/imageUrl'

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
    }
  }
`;

export default function AccountPending() {
  const user = useSelector((state) => state.auth.user);

  const { data, loading, error } = useQuery(GET_USER_ADS, {
    variables: { userId: user?.opid },
    skip: !user?.opid,
  });

  const pendingAds = (data?.getUserAds ?? []).filter(ad => ad.status === 'Pending');

  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">Pending Approval</h3>
      </div>
      <div className="card-body">
        {loading && <p className="text-center text-muted">Loading...</p>}
        {error && <p className="text-danger">Error loading ads.</p>}
        {!loading && pendingAds.length === 0 && (
          <p className="text-muted text-center py-4">No pending ads. All your ads have been reviewed.</p>
        )}
        {pendingAds.length > 0 && (
          <div className="table-responsive">
            <table className="table table-bordered table-hover mb-0">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {pendingAds.map(ad => {
                  const img = getAdImageUrl(ad.ad_image)
                  return (
                    <tr key={ad.ad_id}>
                      <td>
                        <div className="media mt-0 mb-0">
                          <img src={img} loading="lazy" alt={ad.ad_title} style={{ width: 60, height: 50, objectFit: 'cover' }} className="mr-3" />
                          <div className="media-body">
                            <Link to={`/ads/view/${ad.ad_id}`} className="text-dark font-weight-semibold">{ad.ad_title}</Link>
                          </div>
                        </div>
                      </td>
                      <td>{ad.cat_name}</td>
                      <td>${ad.price}</td>
                      <td>{ad.adcreated_date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
