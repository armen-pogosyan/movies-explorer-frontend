import React from 'react';
import './SearchForm.css'


function Search(props) {

  return (
    <div className='search'>
      <form className="form-search">
          <input className="form-search__input" placeholder="Фильм" required id="film" type="text" />
          <button type="submit" className="form-search__button-submit"></button>
      </form>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider"></span>
      </label>
      <div className="search__line"></div>
    </div>
  );
}
export default Search;