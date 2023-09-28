import React, { useState } from 'react';
import './search.css';

function Search() {
  const [searchValue, setSearchValue] = useState(''); // value input = text
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  }

  const handleSearch = () => {
    setQuery(searchValue);
  }


  return (
    <div className='search-page'>

      <div className='search-container'>
        <form
          onSubmit={e => e.preventDefault()}  //ngăn k load lại
        >
              <div className='search-input'>
                <input
                  type="text"
                  placeholder='Type keyword'
                  value={searchValue}
                  onChange={handleChange}
                />
              </div>

                <div className='search-button'>
                  <button
                    className='btn-search'
                    onClick={handleSearch}>
                    SEARCH
                  </button>
                </div>

        </form>
      </div>

      {/* search-result */}

    </div>
  )
}

export default Search
