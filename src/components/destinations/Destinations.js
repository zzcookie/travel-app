import React from 'react'
import './DestinationsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'

import seavalley from '../../assets/海崖谷.jpg'
import skymirror from '../../assets/都歷海灘天空之鏡.jpg'
import waterfall from '../../assets/翡翠谷水簾瀑布.jpg'
import seapark from '../../assets/遠雄海洋公園.jpg'
import dreamlake from '../../assets/雲山水夢幻湖.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">

            <div class="vh-100 d-flex justify-content-center align-items-center ">
            <div class="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h1 class="text-center mb-4 text-primary">Login Form</h1>
                <form>
                    <div class="mb-3">
                        <div>
                        <h2 for="exampleInputEmail1" class="form-label">Email address</h2>
                        <form className="form">
                            <div>
                                <input type="text" placeholder='Email address' aria-describedby="emailHelp"/>
                            </div>
                        </form>
                        </div>
                    </div>
                </form>          
                    
                    <div class="mb-3">
                        <h2 for="exampleInputPassword1" class="form-label">Password</h2>
                        <form className="form">
                            <div>
                                <input type="text" placeholder='Password' />
                            </div>
                        </form>  
                    </div>
                        <p class="small"><a class="text-primary" href="forget-password.html">Forgot password?</a></p>
                    <div class="d-grid">
                        <button class="btn btn-primary" type="submit">Login</button>
                    </div>
                <div> 
                <p></p>
                </div>   
                <div class="mt-3">
                    <p class="mb-0  text-center">Don't have an account? <a href="signup.html"
                            class="text-primary fw-bold">Sign
                            Up</a></p>
                </div>
                </div>
            </div>
            </div>

            

            

            
        </div>        
        
        
    )
}

export default Destinations
