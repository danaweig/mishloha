import React from 'react';
import searchIcon from '../../../assets/images/search_icon.png';
import './SearchInput.scss';

const SearchInput = () => {
    return (
        <div className="SearchInput">
            <form>
                <input type="text" placeholder="חפש שם מסעדה, מנה או פריט" />
                <button type="submit">
                    <img src={searchIcon} alt="search" />
                </button>
            </form>
        </div>
    );
}

export default SearchInput;