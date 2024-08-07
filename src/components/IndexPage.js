import React from 'react';
import './IndexPage.css';
import Avatar from '@mui/material/Avatar';
const IndexPage = () => {
    return (
        <div className="index-page">
            <h1 className="welcome-message">WalmartHouse</h1>
            <div className="image-container" style={{ display: 'flex', gap: '100px' }}>
      <div className="avatar-container" onClick={() => alert('Customer clicked!')}>
       
      </div>
      <div className="avatar-container" onClick={() => alert('Warehouse Manager clicked!')}>
        <Avatar
          //variant="rounded"
          src="/broken-image.jpg"
          sx={{ width: 200, height: 200,  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.7) '}}
        />
        <p>Warehouse Manager</p>
      </div>
    </div>
        </div>
    );
};

export default IndexPage;
