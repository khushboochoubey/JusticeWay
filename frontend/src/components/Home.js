import React, { useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import './Home.css';

const challanData = [
    { name: 'Speeding', detail: 'Exceeding the speed limit.', prize: '$150', link: 'detail1' },
    { name: 'Parking Violation', detail: 'Parking in a no-parking zone.', prize: '$100', link: 'detail2' },
    { name: 'Signal Violation', detail: 'Running a red light.', prize: '$200', link: 'detail3' },
    { name: 'Overloading', detail: 'Exceeding the vehicle’s load limit.', prize: '$250', link: 'detail4' },
    { name: 'Speed Trap', detail: 'Changing lanes without signaling.', prize: '$120', link: 'detail5' },
    { name: 'DUI', detail: 'Driving under the influence.', prize: '$500', link: 'detail6' },
    { name: 'Expired License', detail: 'Driving with an expired license.', prize: '$75', link: 'detail7' },
    { name: 'No Insurance', detail: 'Driving without insurance.', prize: '$300', link: 'detail8' },
    // Extra Card
    { name: 'Seatbelt Violation', detail: 'Not wearing a seatbelt.', prize: '$50', link: 'detail9' }
];

const Home = () => {
    const [filteredData, setFilteredData] = useState(challanData);

    const handleSearch = (query) => {
        const filtered = challanData.filter(challan =>
            challan.name.toLowerCase().includes(query.toLowerCase()) ||
            challan.detail.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    return (
        <div className="home-container">
            <header className="home-header">
                
                <h1>JusticeWay</h1>
                <p>Search and explore different chalan details.</p>
                <SearchBar onSearch={handleSearch} />
            </header>
            <main className="home-features">
                {filteredData.map(challan => (
                    <Card
                        key={challan.link}
                        name={challan.name}
                        detail={challan.detail}
                        prize={challan.prize}
                        link={challan.link}
                    />
                ))}
            </main>
        </div>
    );
};

export default Home;
