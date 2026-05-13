import { useState } from 'react'
import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      success
      message
    }
  }
`;

export default function AccountPrivacy() {
  const [changePassword, { loading }] = useMutation(CHANGE_PASSWORD);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.newPassword !== formData.confirmPassword) {
      setError('New passwords do not match.');
      return;
    }
    if (formData.newPassword.length < 6) {
      setError('New password must be at least 6 characters.');
      return;
    }

    try {
      const { data } = await changePassword({
        variables: {
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }
      });
      if (data.changePassword.success) {
        setSuccess('Password changed successfully!');
        setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      } else {
        setError(data.changePassword.message);
      }
    } catch (err) {
      setError('Failed to change password. Please try again.');
    }
  };

  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">Change Password</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="card-body">

          <div className="form-group">
            <label className="form-label text-dark">Current Password</label>
            <input
              type="password"
              className="form-control"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              placeholder="Enter current password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark">New Password</label>
            <input
              type="password"
              className="form-control"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="Enter new password"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label text-dark">Confirm New Password</label>
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm new password"
              required
            />
          </div>

        </div>

        <div className="card-footer">
          {error && <div className="alert alert-danger mb-2">{error}</div>}
          {success && <div className="alert alert-success mb-2">{success}</div>}
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? 'Changing...' : 'Change Password'}
          </button>
        </div>
      </form>
    </div>
  );
}
