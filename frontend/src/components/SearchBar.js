// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Import component-specific styles

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search chalans..."
            className="search-bar"
        />
    );
};

export default SearchBar;
