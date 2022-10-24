import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'



function Search() {
    return (
        <center> 
        
        <div name='book' className='search'>
        <div class="mb-3">   
        <h2 for="exampleInputPassword1" class="form-label">Choose destination (city)</h2>
            <div>
                <select className="form">
                    <option value="1" >Taipei</option>
                    <option value="1">Taichung</option>
                    <option value="1">Taitung</option>
                    <option value="1">Tainan</option>
                    <option value="1">Hualien</option>
                    <option value="1">Kaohsiung</option>
                </select>
            </div>
                     
        </div>

        <h2 for="start">Start date:</h2>
            <input type="date" id="start" name="trip-start" >
            </input>
        
        <h2 for="start">End date:</h2>
            <input type="date" id="end" name="trip-end" >
            </input>    

        <h2 for="tentacles">Number of guests :</h2>
            <input type="number" id="tentacles" name="tentacles" min="1" max="100">
            </input> 

            <div>
                <script> 
                        function myFunction() {  alert("Invite your friends!") }
                    </script> 
                <button class="btn btn-primary" type="submit" onclick="myFunction()">Team up</button>   
                    
            </div> 

            

        </div>
        </center>
    )
}



export default Search
