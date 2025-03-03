import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'




const Dashboard = () => {
  const [username,setUsername] = useState("")
  useEffect(()=>{
      if(sessionStorage.getItem("user")){
         setUsername(JSON.parse(sessionStorage.getItem("user")).username)
      }else{
        setUsername("")
      }
    },[]
  )
  return (
    <>
     <Header insideDashboard={true}/>
     <div style={{marginTop:'100px'}} className="container-fluid">
      <div className="row mt-3">
        <div className="col-lg-10 p-4 m-2">
        
        <View/>
        </div>
        <div className="col-lg-2">
          <Profile/>
        </div>
      </div>
     </div>
    </>
  )
}

export default Dashboard
