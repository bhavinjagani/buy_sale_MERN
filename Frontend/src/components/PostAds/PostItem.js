import { useState, useContext } from 'react'
import { useMutation } from "@apollo/client/react";
import { usePostAdsContext } from './index';
import contextValue from '../../context/categories/categoriesContext';
import { CREATE_AD } from './mutations';

export default function Item() {
    const { user, categories } = usePostAdsContext();
    const { subcategories, getSubCategories } = useContext(contextValue);
    const [createAd, { loading }] = useMutation(CREATE_AD);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const [formData, setFormData] = useState({
        adTitle:       '',
        category:      '',
        subCategory:   '',
        price:         '',
        itemCondition: 'OLD Item',
        description:   '',
        country:       'India',
        state:         '',
        city:          '',
        images:        [],   // array of File objects
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
    };

    const handleCatChange = (e) => {
        const selected = e.target.value;
        setFormData({ ...formData, category: selected, subCategory: '' });
        if (selected) getSubCategories(selected);
    };

    const postAd = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            // 1 — upload images first
            let adImage = '';
            if (formData.images.length > 0) {
                const imageForm = new FormData();
                formData.images.forEach(file => imageForm.append('images', file));
                const uploadRes = await fetch('http://localhost:8000/upload', {
                    method: 'POST',
                    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
                    body: imageForm,
                });
                const uploadData = await uploadRes.json();
                adImage = uploadData.filenames;
            }

            // 2 — resolve cat_id from selected category name
            const catObj = categories.find(c => c.cat_name === formData.category);

            // 3 — call createAd mutation
            const { data } = await createAd({
                variables: {
                    input: {
                        userId:        user?.opid,
                        adType:        'item',
                        adTitle:       formData.adTitle,
                        catId:         catObj?.cat_id ?? 0,
                        subCatId:      parseInt(formData.subCategory) || null,
                        price:         parseFloat(formData.price) || 0,
                        itemCondition: formData.itemCondition,
                        adDescription: formData.description,
                        adImage,
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
                setSuccess('Ad posted successfully!');
                setFormData({ adTitle: '', category: '', subCategory: '', price: '', itemCondition: 'OLD Item', description: '', country: 'India', state: '', city: '', images: [] });
            } else {
                setError(data.createAd.message);
            }
        } catch (err) {
            setError('Failed to post ad. Please try again.');
        }
    };

  return (
    <>
      <section class="sptb">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12 col-md-12">
              <div class="card mb-lg-0">
                <div class="card-header">
                  <h3 class="card-title">List Item For Sale</h3>
                </div>
                <form className="form-horizontal" onSubmit={postAd}>
                  <div class="card-body">
                    <div class="form-group">
                      <label class="form-label text-dark">Ad Title*</label>
                      <input type="text" className="form-control" name="adTitle" value={formData.adTitle} onChange={handleChange} placeholder="Ad title" />
                    </div>
                    <div class="row">
                      <div class="form-group col-sm-4 col-md-4">
                        <label class="form-label text-dark">Category*</label> 
                        <select className="form-control" name="category" value={formData.category} onChange={handleCatChange}>
                          <option value="">Select Category</option>
                          {categories.map((e) => (
                            <option key={e.cat_id} value={e.cat_name}>{e.cat_name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="form-group col-sm-4 col-md-4">
                        <label class="form-label text-dark">Sub Category*</label>
                        <select className="form-control" name="subCategory" value={formData.subCategory} onChange={handleChange}>
                          <option value="">Select Subcategory...</option>
                          {subcategories.map((s) => (
                            <option key={s.sub_cat_id} value={s.sub_cat_id}>{s.sub_cat_name}</option>
                          ))}
                        </select>
                      </div>
                      <div class="form-group col-sm-4 col-md-4">
                        <label class="form-label text-dark">Item Price*</label>
                        <input type="text" className="form-control" name="price" value={formData.price} onChange={handleChange} placeholder="Item Price" />
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-dark">Type of Condition</label>
                      <div class="d-md-flex ad-post-details">
                        <select className="form-control" name="itemCondition" value={formData.itemCondition} onChange={handleChange}>
                          <option value="OLD Item">Used Item</option>
                          <option value="New Item">New Item</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group">
                      <label class="form-label text-dark">Description</label>
                      <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="6" placeholder="text here.."></textarea>
                    </div>
                    <div class="form-group">
                      <div class="custom-file">
                        <center>
                          <p class="help-block">Allowd file type : JPEG,JPG,GIF,PNG</p>
                        </center>
                        <div class="form-group">
                          <label class="col-md-3 control-label" for="textarea">Picture *</label>
                          <div class="col-md-8">
                            {[1,2,3,4,5,6].map(n => (
                              <div className="mb10" key={n}>
                                <input type="file" className="file" accept="image/jpeg,image/jpg,image/gif,image/png" onChange={handleImageChange} />
                              </div>
                            ))}
                            <p class="help-block">Add up to 6 photos. Use a real image of your product, not catalogs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-header">
                      <h3 class="card-title">Location</h3>
                    </div>
                    <div class="row">
                        <div class="form-group col-sm-4 col-md-4">
                          <label class="form-label text-dark">Country</label>
                          <input className="form-control" value={formData.country} readOnly />
                        </div>
                        <div class="form-group col-sm-4 col-md-4">
                          <label class="form-label text-dark">State*</label>
                          <input className="form-control" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
                        </div>
                        <div class="form-group col-sm-4 col-md-4">
                          <label class="form-label text-dark">City*</label>
                          <input className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
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
                      </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Terms And Conditions</h3>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled widget-spec mb-0">
                    <li>Money Not Refundable</li>
                    <li>You can renew your Premium ad after experted.</li>
                    <li>Premium ads are active for depend on package.</li>
                    <li class="ml-5 mb-0">
                      <a href="tips.html">View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Benefits Of Premium Ad</h3>
                </div>
                <div class="card-body pb-2">
                  <ul class="list-unstyled widget-spec vertical-scroll mb-0" style={{overflow: "hidden" ,height: "124px"}}>
                    <li style={{overflow: "hidden" , height: "20.5598px", paddingTop: "0px", marginTop: "0px", paddingBottom: "0px", marginBottom: "7.83229px"}} class="undefined">Premium ads are displayed on top</li>
                    <li  class="undefined">Premium ads will be Show in Google results</li>
                    <li  class="undefined">Premium Ads Active</li>
                    <li  class="undefined">Premium ads are displayed on top</li>
                    <li style={{overflow: "hidden" , height: "0.593122px", paddingTop: "0px", marginTop:"0px" , paddingBottom:" 0px", marginBottom: "0.225951px"}} class="undefined">Premium ads will be Show in Google results</li>
                    <li  class="undefined">Premium Ads Active</li>
                    <li  class="undefined">Premium ads are displayed on top</li>
                    <li  class="undefined">Premium ads will be Show in Google results</li>
                    <li  class="undefined">Premium Ads Active</li>
                    <li  class="undefined">Premium ads are displayed on top</li>
                    <li  class="undefined">Premium ads will be Show in Google results</li>
                    <li  class="undefined">Premium Ads Active</li>
                    <li  class="undefined">Premium ads are displayed on top</li>
                    <li  class="undefined">Premium ads will be Show in Google results</li>
                    <li  class="undefined">Premium Ads Active</li>
                    <li  class="undefined">Premium ads are displayed on top</li>
                  </ul>
                </div>
              </div>
              <div class="card mb-0">
                <div class="card-header">
                  <h3 class="card-title">Safety Tips For Buyers</h3>
                </div>
                <div class="card-body">
                  <ul class="list-unstyled widget-spec mb-0">
                    <li>Meet Seller at public Place</li>
                    <li>Check item before you buy</li>
                    <li>Pay only after collecting item</li>
                    <li class="ml-5 mb-0">
                      <a href="tips.html">View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              </div>
            </div>
      </section>


    </>
  )
}
