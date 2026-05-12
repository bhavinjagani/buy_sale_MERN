import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../../context/categories/categoriesContext'
import { useParams } from 'react-router-dom';

const Detail = ({ label, value }) => {
    if (!value && value !== 0) return null;
    return (
        <li className="mb-2 d-flex justify-content-between">
            <span className="text-muted">{label}</span>
            <span className="font-weight-semibold text-right" style={{ maxWidth: '60%' }}>{value}</span>
        </li>
    );
};

export default function AdsDescription() {
    let { ad_id } = useParams();
    const context = useContext(contextValue);
    const { Ads, SearchById } = context;
    const [ad, setAd] = useState(null);
    const [activeImg, setActiveImg] = useState(0);

    useEffect(() => {
        SearchById(ad_id);
    }, [ad_id]);

    useEffect(() => {
        if (Ads.length > 0) {
            setAd(Ads[0]);
            setActiveImg(0);
        }
    }, [Ads]);

    if (!ad) {
        return (
            <section className="sptb">
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '300px' }}>
                        <div className="text-center text-muted">
                            <i className="fa fa-spinner fa-spin fa-2x mb-3 d-block"></i>
                            <p>Loading ad details...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    const images = ad.ad_image ? ad.ad_image.split(',').filter(Boolean) : ['no_image.jpg'];
    const conditionColor = ad.item_condition === 'New Item' ? '#28a745' : '#fd7e14';
    const postedDate = ad.adcreated_date ? new Date(ad.adcreated_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : null;

    const hasVehicleDetails = ad.make || ad.model || ad.year || ad.fuel || ad.km_driven || ad.version || ad.color || ad.owner || ad.insurance;
    const hasPropertyDetails = ad.furnished || ad.rooms || ad.squer_feet || ad.superbuiltup || ad.carpet || ad.bedroom || ad.bathroom || ad.maintanance || ad.parking;

    const whatsappNumber = ad.mobile ? `91${ad.mobile.replace(/\D/g, '')}` : '91';
    const whatsappMsg = `Hi, I'm interested in your ad: ${ad.ad_title} (ID: ${ad.ad_id})`;

    return (
        <section className="sptb">
            <div className="container">
                <div className="row">

                    {/* Left: Image Gallery + Description + Specs */}
                    <div className="col-xl-8 col-lg-8 col-md-12">

                        {/* Image Gallery */}
                        <div className="card overflow-hidden mb-4">
                            <div className="card-body">
                                <div className="position-relative mb-3">
                                    {ad.item_condition && (
                                        <span style={{
                                            position: 'absolute', top: 12, left: 12, zIndex: 1,
                                            backgroundColor: conditionColor, color: '#fff',
                                            padding: '5px 12px', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 600
                                        }}>
                                            {ad.item_condition}
                                        </span>
                                    )}
                                    <img
                                        src={`http://localhost:8000/Images/uploads/${images[activeImg]}`}
                                        alt={ad.ad_title}
                                        className="img-fluid rounded"
                                        style={{ width: '100%', height: '380px', objectFit: 'cover' }}
                                        onError={e => { e.target.src = '/Images/uploads/no_image.jpg'; }}
                                    />
                                </div>
                                {images.length > 1 && (
                                    <div className="d-flex" style={{ gap: '8px', overflowX: 'auto' }}>
                                        {images.map((img, i) => (
                                            <img
                                                key={i}
                                                src={`http://localhost:8000/Images/uploads/${img}`}
                                                alt={`thumb-${i}`}
                                                onClick={() => setActiveImg(i)}
                                                className="rounded"
                                                style={{
                                                    width: '72px', height: '60px', objectFit: 'cover',
                                                    cursor: 'pointer', flexShrink: 0,
                                                    border: activeImg === i ? '2px solid #007bff' : '2px solid #dee2e6'
                                                }}
                                                onError={e => { e.target.src = '/Images/uploads/no_image.jpg'; }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        {hasVehicleDetails && (
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="fa fa-car mr-2 text-primary"></i>Vehicle Details
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <Detail label="Make" value={ad.make} />
                                        <Detail label="Model" value={ad.model} />
                                        <Detail label="Year" value={ad.year} />
                                        <Detail label="Fuel Type" value={ad.fuel} />
                                        <Detail label="KM Driven" value={ad.km_driven ? `${Number(ad.km_driven).toLocaleString('en-IN')} km` : null} />
                                        <Detail label="Version" value={ad.version} />
                                        <Detail label="Color" value={ad.color} />
                                        <Detail label="Owner" value={ad.owner} />
                                        <Detail label="Insurance" value={ad.insurance} />
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Property Details */}
                        {hasPropertyDetails && (
                            <div className="card mb-4">
                                <div className="card-header">
                                    <h5 className="card-title mb-0">
                                        <i className="fa fa-home mr-2 text-primary"></i>Property Details
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <Detail label="Furnished" value={ad.furnished} />
                                        <Detail label="Rooms" value={ad.rooms} />
                                        <Detail label="Area (sq ft)" value={ad.squer_feet} />
                                        <Detail label="Super Built-up" value={ad.superbuiltup} />
                                        <Detail label="Carpet Area" value={ad.carpet} />
                                        <Detail label="Bedrooms" value={ad.bedroom} />
                                        <Detail label="Bathrooms" value={ad.bathroom} />
                                        <Detail label="Maintenance" value={ad.maintanance} />
                                        <Detail label="Parking" value={ad.parking} />
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Description */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h5 className="card-title mb-0">
                                    <i className="fa fa-align-left mr-2 text-primary"></i>Description
                                </h5>
                            </div>
                            <div className="card-body">
                                <p className="text-muted mb-0" style={{ lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                                    {ad.ad_description || 'No description provided.'}
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right: Price, Info, Seller, Safety */}
                    <div className="col-xl-4 col-lg-4 col-md-12">

                        {/* Price & Title */}
                        <div className="card mb-4">
                            <div className="card-body">
                                <h3 className="font-weight-semibold mb-2">{ad.ad_title}</h3>
                                <h2 className="text-primary font-weight-bold mb-1">
                                    &#8377; {Number(ad.price).toLocaleString('en-IN')}
                                </h2>
                                <hr />
                                <ul className="list-unstyled mb-0">
                                    {(ad.city || ad.state) && (
                                        <li className="mb-2">
                                            <i className="fa fa-map-marker text-muted mr-2"></i>
                                            {[ad.city, ad.state, ad.country].filter(Boolean).join(', ')}
                                        </li>
                                    )}
                                    {ad.item_condition && (
                                        <li className="mb-2">
                                            <i className="fa fa-tag text-muted mr-2"></i>
                                            {ad.item_condition}
                                        </li>
                                    )}
                                    {ad.views !== undefined && (
                                        <li className="mb-2">
                                            <i className="fa fa-eye text-muted mr-2"></i>
                                            {ad.views} views
                                        </li>
                                    )}
                                    {postedDate && (
                                        <li className="mb-2">
                                            <i className="fa fa-calendar text-muted mr-2"></i>
                                            Posted: {postedDate}
                                        </li>
                                    )}
                                    {ad.status && (
                                        <li className="mb-2">
                                            <i className="fa fa-circle text-success mr-2"></i>
                                            {ad.status}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>

                        {/* Seller Info */}
                        <div className="card mb-4">
                            <div className="card-header">
                                <h6 className="card-title mb-0">
                                    <i className="fa fa-user mr-2 text-primary"></i>Seller Details
                                </h6>
                            </div>
                            <div className="card-body">
                                {ad.name && (
                                    <p className="mb-2 font-weight-semibold">
                                        <i className="fa fa-user-circle-o text-muted mr-2"></i>{ad.name}
                                    </p>
                                )}
                                {ad.mobile && (
                                    <p className="mb-2">
                                        <i className="fa fa-phone text-muted mr-2"></i>
                                        <a href={`tel:${ad.mobile}`} className="text-dark">{ad.mobile}</a>
                                    </p>
                                )}
                                {ad.email && (
                                    <p className="mb-3">
                                        <i className="fa fa-envelope text-muted mr-2"></i>
                                        <a href={`mailto:${ad.email}`} className="text-dark">{ad.email}</a>
                                    </p>
                                )}
                                {ad.mobile && (
                                    <a
                                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                                        className="btn btn-success btn-block"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-whatsapp mr-2"></i> Inquire via WhatsApp
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Safety Tips */}
                        <div className="card">
                            <div className="card-body">
                                <h6 className="font-weight-bold mb-2">
                                    <i className="fa fa-shield text-warning mr-2"></i>Safety Tips
                                </h6>
                                <ul className="list-unstyled text-muted small mb-0">
                                    <li className="mb-1">• Meet in a safe public place</li>
                                    <li className="mb-1">• Don't pay before inspecting the item</li>
                                    <li className="mb-1">• Beware of unrealistic offers</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
