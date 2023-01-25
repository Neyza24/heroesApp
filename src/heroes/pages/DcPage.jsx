import { HeroList } from '../components';


export const DcPage = () => {

  const publisher ='DC Comics';

  return (
    <>
      <h1 className='mt-4 mb-4'>DC COMICS</h1>
      <HeroList publisher={publisher} />
    </>
  )
}

