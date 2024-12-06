import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  //  const [data, setData] = useState([])
  //   useEffect(() => {
  //    fetch('https://api.github.com/users/hiteshchoudhary')
  //    .then(response => response.json())
  //    .then(data => {
  //       console.log(data);
  //       setData(data)
  //    })
  //   }, [])
  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>Github Followers: {data.followers} 
    <img src={data.avatar_url} alt="git_image" width={300}/>
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json();
}