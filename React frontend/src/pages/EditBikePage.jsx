import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BikeService from '../services/BikeService';

const EditBikePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [bike, setBike] = useState({
        bikeName: '',
        bikeNumber: '',
        bikeDescription: '',
        perDayRental: '',
        bikePhoto: '',
        isAvailable: true,
        AvailableCityId: ''
    });

    useEffect(() => {
        const fetchBike = async () => {
            try {
                const response = await BikeService.getBikeById(id);
                const data = response.data;

                setBike({
                    bikeName: data.bikeName || '',
                    bikeNumber: data.bikeNumber || '',
                    bikeDescription: data.bikeDescription || '',
                    perDayRental: data.perDayRental || '',
                    bikePhoto: data.bikePhoto || '',
                    isAvailable: Boolean(data.available),  // map backend field
                    AvailableCityId: data.availableCityId || ''
                });
            } catch (error) {
                console.error('Failed to fetch bike:', error);
            }
        };

        fetchBike();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setBike(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await BikeService.updateBike(id, {
                ...bike,
                isAvailable: !!bike.isAvailable  // ensure boolean
            });
            navigate('/bikes');
        } catch (error) {
            console.error('Failed to update bike:', error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Edit Bike</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label}>Bike Name:</label>
                    <input
                        type="text"
                        name="bikeName"
                        value={bike.bikeName}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Bike Number:</label>
                    <input
                        type="text"
                        name="bikeNumber"
                        value={bike.bikeNumber}
                        onChange={handleChange}
                        required
                        readOnly
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Description:</label>
                    <textarea
                        name="bikeDescription"
                        value={bike.bikeDescription}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Per Day Rental:</label>
                    <input
                        type="number"
                        name="perDayRental"
                        value={bike.perDayRental}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.label}>Bike Photo (URL):</label>
                    <input
                        type="text"
                        name="bikePhoto"
                        value={bike.bikePhoto}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>

                <div style={styles.formGroup}>
                    <label style={styles.labelCheckbox}>
                        <input
                            type="checkbox"
                            name="isAvailable"
                            checked={bike.isAvailable}
                            onChange={handleChange}
                            style={styles.checkbox}
                        />
                        Available
                    </label>
                </div>

                <button type="submit" style={styles.button}>Update Bike</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        marginBottom: '5px',
        color: '#555',
    },
    labelCheckbox: {
        color: '#555',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    input: {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px',
        boxSizing: 'border-box',
    },
    checkbox: {
        transform: 'scale(1.3)',
        cursor: 'pointer',
    },
    button: {
        padding: '10px 20px',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

export default EditBikePage;
