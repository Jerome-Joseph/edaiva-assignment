import React,{useEffect} from 'react'
import { useHistory } from "react-router-dom"

const Home = () => {
  const getUser = async()=>{
    //API CALL
    const response = await fetch(`localhost:5000/api/auth/getuser`, {
        method: 'POST', 
        headers: {
          'auth-token' : localStorage.getItem('auth-token')
        }, 
      });
    
     const json = await response.json()
     console.log(json)
}
 useEffect(() => {
    
 }, [getUser()]);
  return (
    <div>Home</div>
  )
}

export default Home