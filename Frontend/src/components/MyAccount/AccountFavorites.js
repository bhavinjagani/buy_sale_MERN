export default function AccountFavorites() {
  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">My Favorites</h3>
      </div>
      <div className="card-body text-center py-5">
        <i className="fa fa-heart-o fa-3x text-muted mb-3"></i>
        <p className="text-muted">You have no saved favorites yet.</p>
        <p className="text-muted">Browse ads and click the heart icon to save them here.</p>
      </div>
    </div>
  );
}
