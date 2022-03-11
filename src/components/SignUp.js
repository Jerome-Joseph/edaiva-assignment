import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'

const SignUp = () => {

    const [credentials, setCredentials] =useState({fname:"",lname:"",email:"",phone:"",address:"", password:"",cpassword:""})
    let history = useHistory();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({fname:credentials.fname,lname:credentials.lname, email:credentials.email,phone:credentials.phone,address:credentials.address, password:credentials.password})
          });
        
         const json = await response.json()
         console.log(json)
         //after login redirecting to notes
         if (json.success) {
            localStorage.setItem('auth-token', json.authToken); 
            history.push("/")
         }
         else{
             alert("Invalid credentials")
         }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container  my-3'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="fname" className="form-label">Enter your First Name</label>
                    <input type="text" className="form-control" id="fname" name="fname" onChange={onChange} aria-describedby="emailHelp" minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="lname" className="form-label">Enter your Last Name</label>
                    <input type="text" className="form-control" id="lname" name="lname" onChange={onChange} aria-describedby="emailHelp" minLength={3} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Enter your Phone Number</label>
                    <input type="text" className="form-control" id="phone" name="phone" onChange={onChange} aria-describedby="emailHelp" minLength={10} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Enter your Address</label>
                    <input type="text" className="form-control" id="address" name="address" onChange={onChange} aria-describedby="emailHelp" minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/> 
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
        </div>
    )
}

export default SignUp