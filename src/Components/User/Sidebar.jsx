


import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './sidebar.css';

const Sidebar = () => {
  useEffect(() => {
    document.title = 'LMS | MainMenu';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='card'>
      <div className='list-group list-group-flush'>
        {/* <Link to='/user-dashboard' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-house-door-fill me-3"></i> Dashboard
        </Link> */}

<Link to='/user-dashboard' className='list-group-item list-group-item-action d-flex align-items-center py-3 text-decoration-none' style={{ padding: '20px' }}>
  <i className="bi bi-house-door-fill me-3"></i> Dashboard
</Link>


        <Link to='/my-courses' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-book-fill me-3"></i> My Courses
        </Link>
        <Link to='/favorite-courses' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-heart-fill me-3"></i> Favorite Courses
        </Link>
        <Link to='/my-teachers' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '22px' }}>
          <i className="bi bi-person-fill me-3"></i> My Teachers
        </Link>
        <Link to='/recommended-courses' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-lightbulb-fill me-3"></i> Recommended Courses
        </Link>
        <Link to='/my-assignments' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
        <i class="bi bi-file-check-fill me-3"></i>Assignments
        </Link>
        <Link to='/profile-setting' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-gear-fill me-3"></i> Profile Settings
        </Link>
        <Link to='/change-password' className='list-group-item list-group-item-action d-flex align-items-center' style={{ padding: '20px' }}>
          <i className="bi bi-shield-lock-fill me-3"></i> Change Password
        </Link>
        <Link to='/user-logout' className='list-group-item list-group-item-action text-danger d-flex align-items-center' style={{ padding: '20px' }} >
          <i className="bi bi-box-arrow-right me-3"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;











