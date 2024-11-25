import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './Services'
import PopularPage from './PopularProducts'
import OurTeam from './OurTeam'

export default function HomePage() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <PopularPage></PopularPage>
      <OurTeam></OurTeam>
    </div>
  )
}
