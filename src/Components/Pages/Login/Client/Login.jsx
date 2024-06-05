import React, { useEffect, useState } from 'react'
import './Login.css'
// import { Link } from 'react-router-dom'
import logo from "../../../../images/logo.ico"

function Login() {

  const initialvalues={
    username:" ",
    email:" ",
    password:" ",

  }// taking the initial values
  const[formvalues,setFormvalues]=useState(initialvalues);// setting the initial values as initial form values
  const[formerror,setFormerror]=useState({});// initially all the form errors will be makred  empty
 const [submit,setSubmit]=useState(false);// intially the form will not be sumbitted

 const handlesubmit=(e)=>{ // used to submit the 
  e.preventDefault();  // save the form being send to somewhere else
  setFormerror(validate(formvalues)) // check for errors
  setSubmit(true)// then submit the form
  console.log(formvalues);
 }

 const handlechange=(e)=>{ // used to submit the values 
  const{name,value}=e.target; // taking values
  setFormvalues({...formvalues,[name]:value}); // setting the form the values
}

useEffect(()=>{
  console.log(formerror)
  if(Object.keys(formerror).length===0 && submit){
    console.log(formvalues);// now checking if the values of the form is correct AS there are no error
  }
},[formerror])

const validate=(val)=>{
  const error={} // puts all the error got during the object
//  const regex2=/^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\.[a-zA-Z]{2,}$/
  const regex=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;// regular expression for password
if(!val.username){
  error.username="Username is required" // if the username is empty
}
if(!val.email){
  error.email="Email is required" // if the email is empty
}
// }else if(!regex2.test(val.email)){
//   error.email="Email not is required format"
// }


if(!val.password){
  error.password="Password is required" // if the password is empty
}else if(!regex.test(val.password)){
  error.password="Password should have 8 character long with one special character and one " // password does not follow the regex
}

return error;
}

  return (
   <section>
    <div className='positiondiv'>
      {/* {Object.keys(formerror).length===0 && submit ?(
        <div className='msg'>Signed in Successfull</div>
      ):(
        <pre>{JSON.stringify(formvalues, undefined, 2)}</pre>
      )} */}
      <div className='main'>
        <div className='logo'>
          <img src={logo} alt="" />

        </div>
         
         {/* <Link to="/signup" className='signuplink'>
          Sign UP
         </Link>  */}
       

                      
                      <form onSubmit={handlesubmit} >
                        <h1>Login Form</h1>
                        <div className='ui-form'>
                        <div className='field'>
                            <label htmlFor="" className='label'>Username</label>
                            <input
                            type='text'
                            placeholder='Enter Your Username'
                            onChange={handlechange}
                            name='username'
                            value={formvalues.username} // this is the most important attribute 
                            className='input'
                            />
                            
                          </div>
                          <p>{formerror.username}</p>
                      

                          <div className='field'>
                            <label htmlFor="" className='label'>Email:</label>
                            <input type="email"
                            onChange={handlechange} 
                            name='email'
                            placeholder='Enter Email'
                            value={formvalues.email}// this tells where to send the data
                            // onChange={handlechange}
                            className='input'
                            />

                          </div>
                          <p>{formerror.email}</p>
                          <div className='field'>
                            <label htmlFor="" className='label'>Password</label>
                            <input
                            
                            type='password'
                            name="password"
                            placeholder='Enter password'
                            value={formvalues.password}
                            onChange={handlechange}
                            className='input'
                            />
                          </div>
                          <p>{formerror.password}</p>
                         
                         <button className='btn'>Submit</button>

                          </div>
                      </form>

      </div>

    </div>


   </section>
  )
}

export default Login
