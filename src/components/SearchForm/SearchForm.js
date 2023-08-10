import React from 'react';
import './SearchForm.css'


function Search({handleSubmitFormSearch, queryStr, switchStatus}) {
  const [value, setValue] = React.useState(queryStr);
  const [checked, setChecked] = React.useState(switchStatus);

  const handleSubmit = (e)=>{
    e.preventDefault();
    handleSubmitFormSearch(value, checked)
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className='search'>
      <form className="form-search" onSubmit={handleSubmit}>
          <input className="form-search__input" placeholder="Фильм" required id="film" type="text" value={value} onChange={handleChange}/>
          <button type="submit" className="form-search__button-submit"></button>
      </form>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={() => {
          setChecked(!checked)
          handleSubmitFormSearch(value, !checked)
        }} />
        <span className="slider"></span>
      </label>
      <div className="search__line"></div>
    </div>
  );
}
export default Search;