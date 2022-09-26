import React from 'react'

const SingleNews = (props) => {
  const news = props.news
  return (
    <>
        <h2 className='text-center uppercase text-2xl mt-8 font-bold'>{props.channel}</h2>
        <div className='flex flex-wrap p-2 gap-4 justify-center hover:mb-3'>
            {
                news.map((val, ind) =>{
                    return <div className='bg-slate-100 p-2 rounded w-72 drop-shadow-2xl' key={ind}>
                        <a href={val.news_link} target="_blank">
                            <img src={val.img_url} alt="" className='object-cover w-full h-60 rounded' />
                            <p className='mt-2'>{val.title}</p>
                        </a>
                    </div>
                })
            }
        </div>
    </>
  )
}

export default SingleNews