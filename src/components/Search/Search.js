import React from 'react';
import './Search.css'


function Search(props) {

  return (
    <div className='search'>
      <form className="form-search">
          <input className="form-search__input" placeholder="Фильм" required id="film" type="text" />
          <button type="submit" className="form-search__button-submit">{}</button>
      </form>
      <label class="switch">
        <input type="checkbox"/>
        <span class="slider"></span>
      </label>
      <div className="search__line"></div>
    </div>
  );
}
export default Search;
