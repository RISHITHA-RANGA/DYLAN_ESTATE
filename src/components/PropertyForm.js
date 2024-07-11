import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PropertyForm.css'; // Import your CSS for styling

const PropertyForm = () => {
    const navigate = useNavigate();

    const [propertyData, setPropertyData] = useState({
        propertyFor: '',
        propertyType: '',
        propertySize: '',
        yearBuilt: '',
        propertyAddress: '',
        numberOfRooms: '',
        salePrice: '',
        monthlyRent: '',
        propertyPhotos: [], // Store uploaded photos here
    });

    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setPropertyData({ ...propertyData, [name]: checked });
        } else if (type === 'file') {
            setPropertyData({ ...propertyData, [name]: files });
        } else {
            setPropertyData({ ...propertyData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Property Data:', propertyData);
        navigate('/preview', { state: { propertyData: propertyData, phoneNumber: phoneNumber } });
    };

    const validatePhoneNumber = (number) => {
        // Assuming phone number should be exactly 10 digits
        return /^\d{10}$/.test(number);
    };

    return (
        <div className="form-container">
            <h1>Property Form</h1>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    Property For:
                    <select name="propertyFor" value={propertyData.propertyFor} onChange={handleChange} className="input">
                        <option value="">Select</option>
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                </label>
                <label className="label">
                    Property Type:
                    <select name="propertyType" value={propertyData.propertyType} onChange={handleChange} className="input">
                        <option value="">Select</option>
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="land">Land</option>
                    </select>
                </label>
                <label className="label">
                    Property Size (sqft):
                    <input type="text" name="propertySize" value={propertyData.propertySize} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Year Built:
                    <input type="text" name="yearBuilt" value={propertyData.yearBuilt} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Property Address:
                    <input type="text" name="propertyAddress" value={propertyData.propertyAddress} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Number of Rooms:
                    <input type="number" name="numberOfRooms" value={propertyData.numberOfRooms} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Sale Price:
                    <input type="number" name="salePrice" value={propertyData.salePrice} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Monthly Rent:
                    <input type="number" name="monthlyRent" value={propertyData.monthlyRent} onChange={handleChange} className="input" />
                </label>
                <label className="label">
                    Phone Number:
                    <input
                        type="text"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                            const { value } = e.target;
                            if (validatePhoneNumber(value)) {
                                setPhoneNumber(value);
                            } else {
                                setPhoneNumber('');
                                alert('Please enter a valid 10-digit phone number.');
                            }
                        }}
                        className="input"
                    />
                </label>
                <label className="label">
                    Property Photos:
                    <input
                        type="file"
                        name="propertyPhotos"
                        onChange={handleChange}
                        multiple
                        accept="image/*"
                        className="input"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PropertyForm;
