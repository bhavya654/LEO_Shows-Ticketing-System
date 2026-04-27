import React from 'react'
import BannerSlider from '../components/shared/BannerSlider'
import MovieFilter from '../components/Movies/MovieFilter'
import MovieList from '../components/Movies/MovieList'
const Movies = () => {
  return (
    <div>
        <BannerSlider/>
        <div className='flex flex-col md:flex-row bg-[#f5f5f5] min-h-screen md:px-[100px] pb-10 pt-8'>
            <MovieFilter /> 
            <MovieList/>
        </div>
    </div>
  )
}

export default Movies