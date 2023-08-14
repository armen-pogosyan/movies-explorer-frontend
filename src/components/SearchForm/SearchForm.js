import React from 'react';
import './SearchForm.css'


function Search({handleSubmitFormSearch, queryStr, switchStatus}) {
  const [value, setValue] = React.useState(queryStr);
  const [checked, setChecked] = React.useState(switchStatus);
  const [errorMassege, setErrorMassege] = React.useState("Фильм");

  const handleSubmit = (e)=>{
    
    e.preventDefault();
    if (value === "") {
      setErrorMassege("Нужно ввести ключевое слово");
      return
    }
    handleSubmitFormSearch(value, checked)
  }

  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return (
    <div className='search'>
      <form className="form-search" onSubmit={handleSubmit} noValidate>
          <input className={`form-search__input ${errorMassege!=="Фильм" ? "form-search__input_placeholder" : ""}`} placeholder={errorMassege} required id="film" type="text" value={value} onChange={handleChange}/>
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