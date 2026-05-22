import { useState, useContext } from 'react'
import { useMutation } from "@apollo/client/react";
import { usePostAdsContext } from './index';
import contextValue from '../../context/categories/categoriesContext';
import { CREATE_AD } from './mutations';

const YEARS = Array.from({ length: 32 }, (_, i) => 2024 - i);

export default function Vehical() {
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
        make:          '',
        model:         '',
        year:          '',
        version:       '',
        fuel:          '',
        color:         '',
        owner:         '',
        insurance:     '',
        kmDriven:      '',
        itemCondition: 'OLD Item',
        description:   '',
        country:       'India',
        state:         '',
        city:          '',
        images:        [],
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

            const catObj = categories.find(c => c.cat_name === formData.category);

            const { data } = await createAd({
                variables: {
                    input: {
                        userId:        user?.opid,
                        adType:        'vehicle',
                        adTitle:       formData.adTitle,
                        catId:         catObj?.cat_id ?? 0,
                        subCatId:      parseInt(formData.subCategory) || null,
                        price:         parseFloat(formData.price) || 0,
                        make:          formData.make,
                        model:         formData.model,
                        year:          parseInt(formData.year) || null,
                        version:       formData.version,
                        fuel:          formData.fuel,
                        color:         formData.color,
                        owner:         parseInt(formData.owner) || null,
                        insurance:     formData.insurance,
                        kmDriven:      parseInt(formData.kmDriven) || null,
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
                setSuccess('Vehicle ad posted successfully!');
                setFormData({
                    adTitle: '', category: '', subCategory: '', price: '',
                    make: '', model: '', year: '', version: '', fuel: '',
                    color: '', owner: '', insurance: '', kmDriven: '',
                    itemCondition: 'OLD Item', description: '',
                    country: 'India', state: '', city: '', images: [],
                });
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
                                    <h3 className="card-title">List Vehicle For Sale</h3>
                                </div>

                                <form className="form-horizontal" onSubmit={postAd}>
                                    <div className="card-body">

                                        <div className="form-group">
                                            <label className="form-label text-dark">Ad Title*</label>
                                            <input type="text" className="form-control" name="adTitle" value={formData.adTitle} onChange={handleChange} placeholder="Ad title" required />
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Category*</label>
                                                <select className="form-control" name="category" value={formData.category} onChange={handleCatChange} required>
                                                    <option value="">Select a category...</option>
                                                    {categories.map((c) => (
                                                        <option key={c.cat_id} value={c.cat_name}>{c.cat_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Sub Category*</label>
                                                <select className="form-control" name="subCategory" value={formData.subCategory} onChange={handleChange} required>
                                                    <option value="">Select Subcategory...</option>
                                                    {subcategories.map((s) => (
                                                        <option key={s.sub_cat_id} value={s.sub_cat_id}>{s.sub_cat_name}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Vehicle Price*</label>
                                                <input type="number" className="form-control" name="price" value={formData.price} onChange={handleChange} placeholder="Vehicle Price" required />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Make (Company)*</label>
                                                <input type="text" className="form-control" name="make" value={formData.make} onChange={handleChange} placeholder="e.g. Toyota" required />
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Model*</label>
                                                <input type="text" className="form-control" name="model" value={formData.model} onChange={handleChange} placeholder="e.g. Corolla" required />
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Year*</label>
                                                <select className="form-control" name="year" value={formData.year} onChange={handleChange} required>
                                                    <option value="">Select Year</option>
                                                    {YEARS.map(y => (
                                                        <option key={y} value={y}>{y}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Transmission*</label>
                                                <select className="form-control" name="version" value={formData.version} onChange={handleChange} required>
                                                    <option value="">Select Transmission</option>
                                                    <option value="Automatic">Automatic</option>
                                                    <option value="Manual">Manual</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Fuel*</label>
                                                <select className="form-control" name="fuel" value={formData.fuel} onChange={handleChange} required>
                                                    <option value="">Select Fuel</option>
                                                    <option value="Petrol">Petrol</option>
                                                    <option value="Diesel">Diesel</option>
                                                    <option value="Petrol-CNG">Petrol-CNG</option>
                                                    <option value="Petrol-LPG">Petrol-LPG</option>
                                                    <option value="Electric">Electric</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Color*</label>
                                                <input type="text" className="form-control" name="color" value={formData.color} onChange={handleChange} placeholder="Color" required />
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">No. of Owners*</label>
                                                <select className="form-control" name="owner" value={formData.owner} onChange={handleChange} required>
                                                    <option value="">Select Owner</option>
                                                    {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                                                    <option value="6">More than 5</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">Insurance*</label>
                                                <select className="form-control" name="insurance" value={formData.insurance} onChange={handleChange} required>
                                                    <option value="">Select Insurance</option>
                                                    <option value="Full">Full</option>
                                                    <option value="Third Party">Third Party</option>
                                                    <option value="Nil">Nil</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">KM Driven*</label>
                                                <input type="number" className="form-control" name="kmDriven" value={formData.kmDriven} onChange={handleChange} placeholder="KM's Driven" required />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label text-dark">Type of Condition</label>
                                            <select className="form-control" name="itemCondition" value={formData.itemCondition} onChange={handleChange}>
                                                <option value="OLD Item">Used Vehicle</option>
                                                <option value="New Item">New Vehicle</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label text-dark">Description*</label>
                                            <textarea className="form-control" name="description" value={formData.description} onChange={handleChange} rows="6" placeholder="Describe your vehicle..." required></textarea>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-file">
                                                <center>
                                                    <p className="help-block">Allowed file type: JPEG, JPG, GIF, PNG</p>
                                                </center>
                                                <div className="form-group">
                                                    <label className="col-md-3 control-label">Pictures</label>
                                                    <div className="col-md-8">
                                                        {[1,2,3,4,5,6].map(n => (
                                                            <div className="mb10" key={n}>
                                                                <input type="file" className="file" accept="image/jpeg,image/jpg,image/gif,image/png" onChange={handleImageChange} />
                                                            </div>
                                                        ))}
                                                        <p className="help-block">Add up to 6 photos. Use real images of your vehicle.</p>
                                                    </div>
                                                </div>
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
                                                <label className="form-label text-dark">State*</label>
                                                <input className="form-control" name="state" value={formData.state} onChange={handleChange} placeholder="State" required />
                                            </div>
                                            <div className="form-group col-sm-4 col-md-4">
                                                <label className="form-label text-dark">City*</label>
                                                <input className="form-control" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
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
                                        <li>You can renew your Premium ad after it expires.</li>
                                        <li>Premium ads are active depending on package.</li>
                                        <li className="ml-5 mb-0"><a href="tips.html">View more..</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card mb-0">
                                <div className="card-header">
                                    <h3 className="card-title">Safety Tips For Buyers</h3>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled widget-spec mb-0">
                                        <li>Meet Seller at a public place</li>
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
