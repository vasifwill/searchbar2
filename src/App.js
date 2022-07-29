import { useState } from 'react';
import './App.css';
import JSONDATA from "./MOCK_DATA.json"

function App() {
  const[searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
    <input placeholder='search...' onChange={(event) => setSearchTerm(event.target.value)}/>
    <table >
        <tbody>
         <tr>
            <th> First Name</th>
            <th> Last Name</th>
            <th> Email</th>
            <th> Gender</th>
          </tr>
          {JSONDATA.filter((val) => {
            if( searchTerm === "") {
              return val
              } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase()))
              { return val
              }}).map((val, key) => {
                return (
                  <tr key={key}>
                      <td>{val.first_name}</td>
                      <td>{val.last_name}</td>
                      <td>{val.gender}</td>
                      <td>{val.email}</td>
                  </tr>
                  )})}
          </tbody>
      </table>

    
     
    </div>
  );
}
 
export default App;
