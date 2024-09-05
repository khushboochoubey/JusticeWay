//reportcurruption.js
import React, { useState, useEffect } from 'react';
import './ReportCorruption.css';

// Component to display the history of reports
const ReportHistory = ({ reports }) => {
    const [expanded, setExpanded] = useState({});

    const handleToggle = (id) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [id]: !prevExpanded[id]
        }));
    };

    return (
        <div className="report-history">
            <h2>Report History</h2>
            <ul>
                {reports.map((report) => (
                    <li key={report._id}>
                        <p>
                            {report.description && (expanded[report._id] || report.description.length <= 100)
                                ? report.description
                                : `${report.description ? report.description.substring(0, 100) : ''}...`}
                            {report.description && report.description.length > 100 && (
                                <button
                                    className="toggle-button"
                                    onClick={() => handleToggle(report._id)}
                                >
                                    {expanded[report._id] ? 'Show Less' : 'Read More'}
                                </button>
                            )}
                        </p>
                        <button
                            className={`status-button ${report.status.toLowerCase()}`}
                            disabled
                        >
                            {report.status}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ReportCorruption = () => {
    const [report, setReport] = useState({
        name: '',
        location: '',
        department: '',
        description: '',
        status: 'Pending',
    });
    const [reports, setReports] = useState([]);

    useEffect(() => {
        // Fetch the list of reports when the component mounts
        const fetchReports = async () => {
            try {
                // const response = await fetch('http://localhost:5002/api/reports');
                const response = await fetch(`${window.location.origin}/api/reports`);
                const data = await response.json();
                // Ensure the most recent report appears first
                setReports(data.reverse());
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };
        fetchReports();
    }, []);

    const handleChange = (e) => {
        setReport({ ...report, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //fetch('http://localhost:5002/api/reports', {
        fetch(`${window.location.origin}/api/reports`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(report),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Report submitted:', data);
                setReport({ name: '', location: '', department: '', description: '', status: 'Pending' });
                // Update the list of reports after submitting
                setReports(prevReports => [data, ...prevReports]);
            })
            .catch((error) => {
                console.error('Error submitting report:', error);
            });
    };

    return (
        <div className="report-corruption-container">
            <h1>Report Corruption</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={report.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="location"
                        placeholder="Location/Area"
                        value={report.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        name="department"
                        placeholder="Corruption Related Department"
                        value={report.department}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        placeholder="Describe the corruption incident (limit: 50 words)..."
                        value={report.description}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>
                <button type="submit">Submit Report</button>
            </form>
            {report.status === 'Pending' && (
                <div className="status-update">
                    <p>Your report is pending. We will review it and update the status as soon as possible.</p>
                </div>
            )}
            <ReportHistory reports={reports} />
        </div>
    );
};

export default ReportCorruption;



