import React from 'react';
import BasicCard from './components/BasicCard'
import Carousel from './components/Carousel'

function DetailsCard({details}) {
  return (
  <>
    <Carousel details={details} />
    <BasicCard details={details} />
  </>
  )

}

export default DetailsCard;