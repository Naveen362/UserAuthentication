import axios from 'axios';
import React, { useEffect, useState } from 'react'




function Home(){

let [data1,setdata]=useState("");
    
  useEffect(()=>{
    axios.get("http://localhost:4000/home",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}}).then((res)=>{
;setdata(res.data.userdata);

            }
        ).catch((err)=>{console.log(err)});
  },[])
  console.log(data1)
   
    return<div>
        <h1>
            Hai {data1.name}

            <h4>Welcome to home page</h4>
        </h1>
    </div>
}

export default Home