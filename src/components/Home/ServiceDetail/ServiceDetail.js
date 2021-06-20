import React from 'react';

const ServiceDetail = ({ service }) => {
    const { title, image, description, price } = service;
    return (
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><img src={image} className="img-fluid" alt=""/></div>
              <br />
              <h4 className="title">{title}</h4>
              <h5>${price}</h5>
              <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;