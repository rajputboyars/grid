import React from 'react'
import HomeSlider from './HomeSlider'
import HomeCategory from './HomeCategory'
import HomePopularProducts from './HomePopularProducts'

const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <HomeCategory/>
      <HomePopularProducts/>
    </div>
  )
}

export default Home
