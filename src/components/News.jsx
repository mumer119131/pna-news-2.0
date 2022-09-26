import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleNews from './SingleNews'
const News = () => {
const [newsData, setNewsData] = useState({})
useEffect(()=>{
    
    const fetchData = async () =>{
        await axios.get("http://127.0.0.1:5000/")
          .then((res)=> {
            setNewsData(res.data)
          })
          .catch((error) => console.log(error))
    }

    fetchData()

  },[])
  return (
    <div className='p-8'>
      {
        Object.keys(newsData).map((val, index) =>{
          return <div key={index}>
            <SingleNews news={newsData[val]} channel={val} />
          </div>
        })
      }
    </div>
  )
}

export default News