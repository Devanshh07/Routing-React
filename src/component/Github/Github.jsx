import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github(props) {
      
      const data = useLoaderData()
    //  const[data,setData] = useState("");

    //  useEffect( ()=>{
    //     const url =  "https://api.github.com/users/Devanshh07"
    //       fetch(url).then(res => res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    //  })


    return (
        <div>
              <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
        </div>
    );
}

export default Github;

export const  GithubInfoLoader = async ()=>{
      var res = await fetch("https://api.github.com/users/Devanshh07")
      return res.json();

}