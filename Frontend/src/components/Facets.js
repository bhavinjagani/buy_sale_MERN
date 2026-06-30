import React, { useState } from 'react'
import '../styles/Facets.css';
import { useNavigate } from 'react-router-dom'

export default function Facets({ categories = [], location = [] }) {
  const [searchText, setSearchText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCatChange = (e) => {
    setSelectedCategory(e.target.value);
    if (e.target.value) navigate(`/ads/category/${e.target.value}`);
  };

  const searchdata = () => {
    const params = new URLSearchParams();
    if (searchText) params.set('q', searchText);
    if (selectedLocation) params.set('l', selectedLocation);
    navigate(`/searchdata?${params.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') searchdata();
  };

  return (
    <>
      {/* Location Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content facet-modal">
            <div className="modal-header">
              <h5 className="modal-title"><i className="fa fa-map-marker mr-2 text-primary"></i>Select your region</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="text-muted mb-3">Popular ads in <strong>India</strong></p>
              <select className="form-control facet-select" onChange={(e) => setSelectedLocation(e.target.value)} id="region-state">
                <option value="">All States / Provinces</option>
                {location.map((e, i) => (
                  <option key={i} value={e.name}>{e.name}</option>
                ))}
              </select>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" data-bs-dismiss="modal">Apply</button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="facet-hero">
        <div className="facet-overlay"></div>
        <div className="facet-content">
          <div className="container">

            <div className="facet-heading text-center">
              <h1>Find the Best Classifieds</h1>
              <p>Buy and sell anything — vehicles, properties, electronics and more</p>
            </div>

            <div className="facet-search-box">

              {/* Location
              <a href="#selectRegion" data-bs-toggle="modal" data-bs-target="#exampleModal" className="facet-location-btn" title="Select location">
                <i className="fa fa-map-marker"></i>
                <span>{selectedLocation || 'Location'}</span>
                <i className="fa fa-chevron-down facet-chevron"></i>
              </a> */}

              <div className="facet-divider"></div>

              {/* Category */}
              <div className="facet-category-wrap">
                <i className="fa fa-th-large facet-cat-icon"></i>
                <select className="facet-select-inline" onChange={handleCatChange} value={selectedCategory}>
                  <option value="">All Categories</option>
                  {categories.map((e) => (
                    <option key={e.cat_id} value={e.cat_name}>{e.cat_name}</option>
                  ))}
                </select>
              </div>

              {/* <div className="facet-divider"></div> */}

              {/* Search input */}
              {/* <div className="facet-input-wrap">
                <i className="fa fa-search facet-search-icon"></i>
                <input
                  type="text"
                  className="facet-input"
                  placeholder="What are you looking for?"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <button className="facet-btn" onClick={searchdata}>
                <i className="fa fa-search mr-1"></i> Search
              </button> */}

            </div>

            {/* Quick category pills */}
            <div className="facet-pills">
              {categories.slice(0, 6).map((c) => (
                <button key={c.cat_id} className="facet-pill" onClick={() => navigate(`/ads/category/${c.cat_name}`)}>
                  {c.cat_name}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
