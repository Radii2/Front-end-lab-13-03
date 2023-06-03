import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ImageDetailsCard.css';

const ImageDetailsCard = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className="page">
      <div className="image-card">
        <div className="image-content">
          <h1>Informacje o autorze</h1>
          <div>{state.image.authorDetails}</div>
          <h1>Informacje o obrazie</h1>
          <div>{state.image.imageDetails}</div>
          <div style={{ marginTop: '50px' }}>
            <button
              className="exit-details-button"
              onClick={() => navigate(-1)}
            >
              Opuść szczegóły
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailsCard;
