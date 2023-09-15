import React, { useState } from 'react'

const NavBar = () => {

  const [inputData, setInputData] = useState('');
  const [filteredData, setfilteredData] = useState([]);

  const countries = [{ name: "Belgium", continent: "Europe" },
  { name: "India", continent: "Asia" },
  { name: "Bolivia", continent: "South America" },
  { name: "Ghana", continent: "Africa" },
  { name: "Japan", continent: "Asia" },
  { name: "Canada", continent: "North America" },
  { name: "New Zealand", continent: "Australasia" },
  { name: "Italy", continent: "Europe" },
  { name: "South Africa", continent: "Africa" },
  { name: "China", continent: "Asia" },
  { name: "Paraguay", continent: "South America" },
  { name: "Usa", continent: "North America" },
  { name: "France", continent: "Europe" },
  { name: "Botswana", continent: "Africa" },
  { name: "Spain", continent: "Europe" },
  { name: "Senegal", continent: "Africa" },
  { name: "Brazil", continent: "South America" },
  { name: "Denmark", continent: "Europe" },
  { name: "Mexico", continent: "South America" },
  { name: "Australia", continent: "Australasia" },
  { name: "Tanzania", continent: "Africa" },
  { name: "Bangladesh", continent: "Asia" },
  { name: "Portugal", continent: "Europe" },
  { name: "Pakistan", continent: "Asia" }
  ];
  const setValue = (event) => {
    event.preventDefault();
    const inputValue = event.target.value;
    setInputData(inputValue);

    const result = countries.filter((country) => {
      return country.name.toLowerCase().includes(inputData.toLowerCase());
    })
    setfilteredData(result);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Goku</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="d-flex ms-5 me-5 w-100 " role="search">
              <input className="form-control me-2 justify-item-end" onChange={setValue} value={inputData} type="search" placeholder="Search" aria-label="Search" />
            </div>
          </div>
        </div>
      </nav>
      <table className='table'>
        <thead>
          <tr>
            <th className='col'>Country</th>
            <th className='col'>Continet</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.length > 0 ?
              filteredData.map((country, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td scope='row'>{country.name}</td>
                      <td scope='row'>{country.continent}</td>
                    </tr>
                  </>
                );
              }) :
              countries.map((country, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td scope='row'>{country.name}</td>
                      <td scope='row'>{country.continent}</td>
                    </tr>
                  </>
                );
              })
          }
        </tbody>
      </table>
    </>
  )
}

export default NavBar
