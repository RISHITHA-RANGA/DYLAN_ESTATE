import React from 'react';
import { useLocation } from 'react-router-dom';
import './PropertyPreview.css'; // Import your CSS for styling

const PropertyPreview = () => {
    const location = useLocation();
    const { propertyData, phoneNumber } = location.state || {};

    if (!propertyData) {
        return <div>No property data found.</div>;
    }

    const renderPropertyPhotos = () => {
        if (Array.isArray(propertyData.propertyPhotos) && propertyData.propertyPhotos.length > 0) {
            return (
                <div className="property-photos">
                    <h3>Property Photos:</h3>
                    {propertyData.propertyPhotos.map((photo, index) => (
                        <img key={index} src={URL.createObjectURL(photo)} alt={`Property Photo ${index}`} />
                    ))}
                </div>
            );
        } else {
            return <div>No property photos available.</div>;
        }
    };

    return (
        <div className="property-preview-container">
            <h1>Property Preview</h1>
            <div className="property-details">
                <p><strong>Property For:</strong> {propertyData.propertyFor}</p>
                <p><strong>Property Type:</strong> {propertyData.propertyType}</p>
                <p><strong>Property Size:</strong> {propertyData.propertySize}</p>
                <p><strong>Year Built:</strong> {propertyData.yearBuilt}</p>
                <p><strong>Property Address:</strong> {propertyData.propertyAddress}</p>
                {propertyData.propertyType === 'house' || propertyData.propertyType === 'apartment' ? (
                    <p><strong>Number of Rooms:</strong> {propertyData.numberOfRooms}</p>
                ) : null}
                {propertyData.propertyFor === 'sale' && (
                    <p><strong>Sale Price:</strong> {propertyData.salePrice}</p>
                )}
                {propertyData.propertyFor === 'rent' && (
                    <p><strong>Monthly Rent:</strong> {propertyData.monthlyRent}</p>
                )}
                {phoneNumber && (
                    <p><strong>Phone Number:</strong> {phoneNumber}</p>
                )}
            </div>
            {renderPropertyPhotos()}
        </div>
    );
};

export default PropertyPreview;