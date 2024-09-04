import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css'; // Import the CSS file for DetailPage

const detailData = {
    detail1: { name: 'Speeding', detail: 'Detailed information about Speeding.', prize: '$150' },
    detail2: { name: 'Parking Violation', detail: 'Detailed information about Parking Violation.', prize: '$100' },
    detail3: { name: 'Signal Violation', detail: 'Detailed information about Signal Violation.', prize: '$200' },
    detail4: { name: 'Overloading', detail: 'Detailed information about Overloading.', prize: '$250' },
    detail5: { name: 'Speed Trap', detail: 'Changing lanes without signaling can cause collisions.', prize: '$120', link: 'detail5' },
    detail6: { name: 'DUI', detail: 'Driving under the influence is a criminal offense with severe penalties.', prize: '$500', link: 'detail6' },
    detail7: { name: 'Expired License', detail: 'Driving with an expired license is illegal and subject to fines.', prize: '$75', link: 'detail7' },
    detail8: { name: 'No Insurance', detail: 'Driving without insurance leaves you vulnerable to financial liabilities.', prize: '$300', link: 'detail8' },
};

const DetailPage = () => {
    const { id } = useParams();
    const chalan = detailData[id];

    if (!chalan) {
        return <div className="error">Chalan not found.</div>;
    }

    return (
        <div className="container">
            <h1>{chalan.name}</h1>
            <p>{chalan.detail}</p>
            <p><strong>Legal Chalan Prize:</strong> {chalan.prize}</p>
        </div>
    );
};

export default DetailPage;
