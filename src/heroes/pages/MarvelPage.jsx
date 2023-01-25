import React from 'react'
import { HeroList } from '../components';


export const MarvelPage = () => {

  const publisher = 'Marvel Comics';

  return (
    <>
      <h1 className='mt-4 mb-4'>MARVEL COMICS</h1>

      <HeroList publisher={publisher} />
    </>
  )
}
