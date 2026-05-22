import React from 'react'
import { useState, useContext } from 'react'
import { useMutation } from "@apollo/client/react";
import { usePostAdsContext } from './index';
import contextValue from '../../context/categories/categoriesContext';
import { CREATE_AD } from './mutations';

export default function HomeForSale() {
  const { user } = usePostAdsContext();
  const { subcategories, getSubCategories } = useContext(contextValue);
  const [createAd, { loading }] = useMutation(CREATE_AD);

  React.useEffect(() => {
    getSubCategories('Real Estate');
  }, []);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    adTitle:       '',
    subCategory:   '',
    furnished:     'Unfurnitured',
    price:         '',
    superBuiltup:  '',
    carpetArea:    '',
    bedrooms:      '',
    bathrooms:     '',
    maintenance:   '',
    parking:       'Yes',
    itemCondition: 'OLD Item',
    description:   '',
    images:        [],
    country:       'United State',
    state:         '',
    city:          '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleSubCatChange = (e) => {
    setFormData({ ...formData, subCategory: e.target.value });
  };

  const postAd = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      let adImage = '';
      if (formData.images.length > 0) {
        const imageForm = new FormData();
        formData.images.forEach(file => imageForm.append('images', file));
        const uploadRes = await fetch(`${process.env.REACT_APP_API_URL}/upload`, {
          method: 'POST',
          headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
          body: imageForm,
        });
        const uploadData = await uploadRes.json();
        adImage = uploadData.filenames;
      }

      const { data } = await createAd({
        variables: {
          input: {
            userId:        user?.opid,
            adType:        'Real Estate',
            adTitle:       formData.adTitle,
            parking:       formData.parking,
            catId:         16,
            subCatId:      parseInt(formData.subCategory) || null,
            price:         parseFloat(formData.price) || 0,
            itemCondition: formData.itemCondition,
            adDescription: formData.description,
            adImage,
            furnished:     formData.furnished,
            squareFeet:    parseFloat(formData.superBuiltup) || null,
            bedroom:       parseInt(formData.bedrooms) || null,
            bathroom:      parseInt(formData.bathrooms) || null,
            name:          user?.custname ?? '',
            email:         user?.username ?? '',
            mobile:        '',
            country:       formData.country,
            state:         formData.state,
            city:          formData.city,
            status:        'Active',
            uBrowser:      navigator.userAgent,
          }
        }
      });

      if (data.createAd.success) {
        setSuccess('Property ad posted successfully!');
        setFormData({ adTitle: '', subCategory: '', furnished: 'Unfurnitured', price: '', superBuiltup: '', carpetArea: '', bedrooms: '', bathrooms: '', maintenance: '', parking: 'Yes', itemCondition: 'OLD Item', description: '', images: [], country: 'India', state: '', city: '' });
      } else {
        setError(data.createAd.message);
      }
    } catch (err) {
      setError('Failed to post ad. Please try again.');
    }
  };

  return (
    <>
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="card mb-lg-0">
                <div className="card-header">
                  <h3 className="card-title">List Your Property</h3>
                </div>

                <form className="form-horizontal" onSubmit={postAd}>
                  <div className="card-body">

                    <div className="form-group">
                      <label className="form-label text-dark">Ad Title</label>
                      <input type="text" className="form-control" name="adTitle" value={formData.adTitle} onChange={handleChange} placeholder="Ex. 2 BHK flat for rent" />
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Type Of Property</label>
                        <select className="form-control" name="subCategory" value={formData.subCategory} onChange={handleSubCatChange}>
                          <option value="">Select a Property</option>
                          {subcategories.map((s) => (
                            <option key={s.sub_cat_id} value={s.sub_cat_id}>{s.sub_cat_name}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Furniture</label>
                        <select className="form-control" name="furnished" value={formData.furnished} onChange={handleChange}>
                          <option value="Unfurnitured">Unfurnitured</option>
                          <option value="furnitured">Furnitured</option>
                          <option value="semi-furnitured">Semi-furnitured</option>
                        </select>
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Price</label>
                        <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} placeholder="Rent price per month" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Super Builtup area (ft)</label>
                        <input type="text" className="form-control" name="superBuiltup" value={formData.superBuiltup} onChange={handleChange} placeholder="Super builtup area (sq ft)" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Carpet area (ft)</label>
                        <input type="text" className="form-control" name="carpetArea" value={formData.carpetArea} onChange={handleChange} placeholder="Carpet area (sq ft)" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Bedrooms</label>
                        <input type="text" className="form-control" name="bedrooms" value={formData.bedrooms} onChange={handleChange} placeholder="Number of Bedrooms" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Bathrooms</label>
                        <input type="text" className="form-control" name="bathrooms" value={formData.bathrooms} onChange={handleChange} placeholder="Number of Bathrooms" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Maintenance (Monthly)</label>
                        <input type="text" className="form-control" name="maintenance" value={formData.maintenance} onChange={handleChange} placeholder="Maintenance amount" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Parking Available</label>
                        <select className="form-control" name="parking" value={formData.parking} onChange={handleChange}>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Item Condition</label>
                        <select className="form-control" name="itemCondition" value={formData.itemCondition} onChange={handleChange}>
                          <option value="OLD Item">OLD Item</option>
                          <option value="New Item">New Item</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label text-dark">Description</label>
                      <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="6" placeholder="text here.."></textarea>
                    </div>

                    <div className="form-group">
                      <center><p className="help-block">Allowed file type: JPEG, JPG, GIF, PNG</p></center>
                      <label className="col-md-3 control-label">Picture *</label>
                      <div className="col-md-8">
                        {[1,2,3,4,5,6].map(n => (
                          <div className="mb10" key={n}>
                            <input type="file" className="file" accept="image/jpeg,image/jpg,image/gif,image/png" onChange={handleImageChange} />
                          </div>
                        ))}
                        <p className="help-block">Add up to 6 photos. Use a real image of your product, not catalogs.</p>
                      </div>
                    </div>

                    <div className="card-header">
                      <h3 className="card-title">Location</h3>
                    </div>

                    <div className="row">
                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">Country</label>
                        <input className="form-control" value={formData.country} readOnly />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">State</label>
                        <input className="form-control" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                      </div>

                      <div className="form-group col-sm-4 col-md-4">
                        <label className="form-label text-dark">City</label>
                        <input className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                      </div>
                    </div>

                  </div>

                  <div className="card-footer">
                    {error && <div className="alert alert-danger mb-2">{error}</div>}
                    {success && <div className="alert alert-success mb-2">{success}</div>}
                    <div className="col-md-8">
                      <button type="submit" className="btn btn-success" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Ad'}
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Terms And Conditions</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>Money Not Refundable</li>
                    <li>You can renew your Premium ad after experted.</li>
                    <li>Premium ads are active for depend on package.</li>
                    <li className="ml-5 mb-0"><a href="tips.html">View more..</a></li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Safety Tips For Buyers</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>Meet Seller at public Place</li>
                    <li>Check item before you buy</li>
                    <li>Pay only after collecting item</li>
                    <li className="ml-5 mb-0"><a href="tips.html">View more..</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
