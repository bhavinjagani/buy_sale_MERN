import { Outlet, Route, useOutletContext } from 'react-router-dom';
import AccountLeft from './AccountLeft';
import AccountHome from './AccountHome';
import AccountMyAds from './AccountMyAds';
import AccountEditProfile from './AccountEditProfile';
import AccountPending from './AccountPending';
import AccountFavorites from './AccountFavorites';
import AccountPrivacy from './AccountPrivacy';

function AccountLayout() {
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-12 col-md-12">
            <div className="card">
              <AccountLeft />
            </div>
          </div>
          <div className="col-lg-9">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export const useAccountContext = () => useOutletContext();

export function MyAccountRoutes() {
  return (
    <Route path="myaccount" element={<AccountLayout />}>
      <Route index element={<AccountHome />} />
      <Route path="myads" element={<AccountMyAds />} />
      <Route path="edit" element={<AccountEditProfile />} />
      <Route path="pending" element={<AccountPending />} />
      <Route path="favorites" element={<AccountFavorites />} />
      <Route path="privacy" element={<AccountPrivacy />} />
    </Route>
  );
}
