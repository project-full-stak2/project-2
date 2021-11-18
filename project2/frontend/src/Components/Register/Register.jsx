import axios from 'axios';
import React, { useState } from 'react'

import Navbar from "../Navbar/Navbar";
import { NavLink } from 'react-router-dom';


export default function Register(props) {

    let [errorList, setErrorList] = useState([]);

    let [error, setError] = useState('');
    let [loading, setLoading] = useState(false);



    let [user, setUser] = useState({
        firstname: '', lastname: '',
        email: '', pass: ''
    });

    function getUser(e) {

        let myUser = { ...user };//Note
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
        console.log(myUser);
    }


    async function formSubmit(e) {
        e.preventDefault();
        setLoading(true);
        
            let {data}= await axios.post(`http://itechnologyeg.com:3001//signup`, user);
           
            console.log(data.message)
            if (data.message === 'success') {
                console.log("success")
                setLoading(false);
            }
            else {
                setLoading(false);
                setError(data.message)
            }
        



    }
    return (
        <>
                     {/* navbar */}
           <div>
  <nav  className="navbar navbar-expand-md navbar-light bg-light ">
    <div className="container">
      <a style={{fontSize:"30px",color:"brown"}} className="navbar-brand fw-bold  " to="#">Corner coffee</a>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/home"> <i className="fa fa-home fa-2x text-info"></i> <span className="visually-hidden">(current)</span></NavLink>
          </li>
        
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/notification"> <i class="fas fa-bell fa-2x text-info"></i></NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/videos"><i class="fas fa-play fa-2x  text-info"></i> </NavLink>
          </li>
          <li className="nav-item mx-4 active">
            <NavLink className="nav-link" to="/setting"><i class="fas fa-cog fa-2x text-info"></i> </NavLink>
          </li>
        </ul>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/login"> Log in <i class="fas fa-user-check text-dark"></i> </NavLink>
            <NavLink className="nav-link text-light fs-5 fw-bold  ms-4 text-dark" to="/register"> Register <i class="fas fa-user-check text-dark"></i> </NavLink>
    </div>
    </div>
</nav>
</div>
            
{/* end nav  */}
        <div>
<h1  className="text-center mt-5">Register Now</h1>
            <div className="w-50 mx-auto py-4 ">
                

                <form className="m-auto " onSubmit={formSubmit}>
                        <div style={{  borderRadius:"15px "}} className="content  w-50 m-auto bg-dark text-light p-3 ">
                            
                    {error && <div className="alert alert-danger">{error}</div>}
                    {errorList.map((error, index) => index === errorList.length - 1 ? <div className="alert alert-danger p-2">pass invalid </div> :
                        <div className="alert alert-danger p-2">{error.message}</div>
                    )}

                    <div className='my-2 m-auto'>
                        <label className="my-2 fw-bold fs-5 " htmlFor="firstname">First name</label>
                        <input onChange={getUser} type="text" className='form-control w-100' name="firstname" />

                    </div>
                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="lastname">Last name</label>
                        <input onChange={getUser} type="text" className='form-control w-100' name="lastname" />
                    </div>

                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="email">Email</label>
                        <input onChange={getUser} type="email" className='form-control w-100' name="email" />
                    </div>

                    <div className='my-2'>

                        <label className="my-2 fw-bold fs-5 "htmlFor="pass">pass</label>
                        <input onChange={getUser} type="pass" className='form-control w-100' name="pass" />
                    </div >


                            <div className=" text-center">
                                <button type='submit' className=' btn btn-info'>
                        {loading ? <i className='fas fa-spinner fa-spin'></i> : 'register'}
                    </button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
        

        </>
    )
}
