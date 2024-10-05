import React, { useState } from "react";
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className={`search-input ${query ? 'filled' : ''}`}
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <span className="search-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.313 0-6 2.687-6 6s2.687 6 6 6 6-2.687 6-6-2.687-6-6-6zm13.707 17.293l-5.387-5.387c-.41-.41-1.074-.41-1.485 0-.41.41-.41 1.074 0 1.485l5.387 5.387c.41.41 1.074.41 1.485 0 .41-.41.41-1.074 0-1.485z"/>
        </svg>
      </span>
    </div>
  );
};

export default Search;

// css
/* Container for the search bar */
.search-container {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
}

/* Search input field */
.search-input {
  width: 100%;
  padding: 10px 40px 10px 20px;
  font-size: 18px;
  border: 2px solid #ccc;
  border-radius: 50px;
  transition: border 0.3s ease, box-shadow 0.3s ease;
  outline: none;
  background-color: #f9f9f9;
}

/* When input is focused */
.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
  background-color: #fff;
}

/* Animation when input has text */
.search-input.filled {
  border-color: #007bff;
  animation: filled 0.3s forwards;
}

@keyframes filled {
  0% {
    background-color: #f9f9f9;
  }
  100% {
    background-color: #fff;
  }
}

/* Search icon positioning */
.search-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #888;
}

/* Search icon SVG */
.search-icon svg {
  width: 100%;
  height: 100%;
}
