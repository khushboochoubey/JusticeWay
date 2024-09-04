import React, { useState } from 'react';
import './DocumentStorage.css';

const DocumentStorage = () => {
    const [documents, setDocuments] = useState([]);
    const [replaceIndex, setReplaceIndex] = useState(null);

    const handleUpload = (event) => {
        const files = event.target.files;
        const newDocuments = [...documents];

        if (replaceIndex !== null) {
            // Replace the document at the specified index
            newDocuments[replaceIndex] = {
                name: files[0].name,
                url: URL.createObjectURL(files[0]),
            };
            setReplaceIndex(null); // Reset replace index after replacing
        } else {
            // Add new documents
            for (let i = 0; i < files.length; i++) {
                newDocuments.push({
                    name: files[i].name,
                    url: URL.createObjectURL(files[i]),
                });
            }
        }

        setDocuments(newDocuments);
    };

    const handleView = (url) => {
        window.open(url, '_blank');
    };

    const handleDownload = (url, name) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReplace = (index) => {
        setReplaceIndex(index); // Set the index to be replaced
        document.getElementById('fileUpload').click(); // Trigger the file upload
    };

    return (
        <div className="document-storage-container">
            <h1>Document Storage</h1>
            <p>Securely store and manage your important documents such as driving licenses, vehicle registrations, and more.</p>

            <div className="upload-section">
                <input
                    type="file"
                    id="fileUpload"
                    onChange={handleUpload}
                    className="upload-input"
                />
                <label htmlFor="fileUpload" className="upload-button">Upload Document</label>
            </div>

            <div className="document-list">
                {documents.map((document, index) => (
                    <div key={index} className="document-item">
                        <span className="document-name">{document.name}</span>
                        <div className="document-actions">
                            <button onClick={() => handleView(document.url)} className="action-button view-button">View</button>
                            <button onClick={() => handleDownload(document.url, document.name)} className="action-button download-button">Download</button>
                            <button onClick={() => handleReplace(index)} className="action-button replace-button">Replace</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DocumentStorage;
