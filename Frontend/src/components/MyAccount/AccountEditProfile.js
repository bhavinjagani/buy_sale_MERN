import { useState } from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../../store/authSlice'

const UPDATE_PROFILE = gql`
  mutation UpdateUserProfile($input: UserProfileInput!) {
    updateUserProfile(input: $input) {
      success
      message
      user {
        user_id
        custname
        username
        custphone
        custaddress
        aboutme
        weblink
        fblink
        instalink
        googlelink
        twitterlink
        youtubelink
        custimg
      }
    }
  }
`;

export default function AccountEditProfile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [updateProfile, { loading }] = useMutation(UPDATE_PROFILE);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    custname:    user?.custname    ?? '',
    custphone:   user?.custphone   ?? '',
    custaddress: user?.custaddress ?? '',
    aboutme:     user?.aboutme     ?? '',
    weblink:     user?.weblink     ?? '',
    fblink:      user?.fblink      ?? '',
    instalink:   user?.instalink   ?? '',
    googlelink:  user?.googlelink  ?? '',
    twitterlink: user?.twitterlink ?? '',
    youtubelink: user?.youtubelink ?? '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const { data } = await updateProfile({ variables: { input: formData } });
      if (data.updateUserProfile.success) {
        setSuccess('Profile updated successfully!');
        dispatch(updateUser(data.updateUserProfile.user));
      } else {
        setError(data.updateUserProfile.message);
      }
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">Edit Profile</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body">

          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label text-dark">Full Name</label>
              <input type="text" className="form-control" name="custname" value={formData.custname} onChange={handleChange} placeholder="Full name" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark">Phone</label>
              <input type="text" className="form-control" name="custphone" value={formData.custphone} onChange={handleChange} placeholder="Phone number" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label text-dark">Address</label>
            <input type="text" className="form-control" name="custaddress" value={formData.custaddress} onChange={handleChange} placeholder="Address" />
          </div>

          <div className="form-group">
            <label className="form-label text-dark">About Me</label>
            <textarea className="form-control" name="aboutme" value={formData.aboutme} onChange={handleChange} rows="4" placeholder="Tell something about yourself..." />
          </div>

          <h5 className="mt-3 mb-3 font-weight-bold">Social Links</h5>

          <div className="row">
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-chrome mr-1"></i> Website</label>
              <input type="url" className="form-control" name="weblink" value={formData.weblink} onChange={handleChange} placeholder="https://yourwebsite.com" />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-facebook mr-1"></i> Facebook</label>
              <input type="url" className="form-control" name="fblink" value={formData.fblink} onChange={handleChange} placeholder="https://facebook.com/..." />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-instagram mr-1"></i> Instagram</label>
              <input type="url" className="form-control" name="instalink" value={formData.instalink} onChange={handleChange} placeholder="https://instagram.com/..." />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-google mr-1"></i> Google+</label>
              <input type="url" className="form-control" name="googlelink" value={formData.googlelink} onChange={handleChange} placeholder="https://plus.google.com/..." />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-twitter mr-1"></i> Twitter</label>
              <input type="url" className="form-control" name="twitterlink" value={formData.twitterlink} onChange={handleChange} placeholder="https://twitter.com/..." />
            </div>
            <div className="form-group col-md-6">
              <label className="form-label text-dark"><i className="fa fa-youtube mr-1"></i> YouTube</label>
              <input type="url" className="form-control" name="youtubelink" value={formData.youtubelink} onChange={handleChange} placeholder="https://youtube.com/..." />
            </div>
          </div>

        </div>

        <div className="card-footer">
          {error && <div className="alert alert-danger mb-2">{error}</div>}
          {success && <div className="alert alert-success mb-2">{success}</div>}
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
