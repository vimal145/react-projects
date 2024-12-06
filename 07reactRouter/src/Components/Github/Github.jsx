import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData(); // Use data loaded by the loader

  return (
    <div className='text-center bg-gray-600 text-white text-3xl p-4'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="git_image" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;  

  if (!token) {
    throw new Error('GitHub Token not found');  
  }

  const response = await fetch('https://api.github.com/users/vimal145', {
    headers: {
      Authorization: `token ${token}`,  
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');  
  }

  return response.json();  
};
