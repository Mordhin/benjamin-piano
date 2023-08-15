import React from 'react'
import maintenance from '../assets/maintenance.png';

export const Maintenance = () => {
  return (
    <div className='container h-screen flex flex-col justify-center items-center mx-auto'>
      <h2 className='mb-4 font-bold text-5xl'>Site en maintenance</h2>
      <div className=''>
        <img src={maintenance} alt='maintenance' className='w-auto'></img>
        <p className='text-center'>
          Une nouvelle version du site est en cours de construction.
          <br/> En attendant, vous pouvez me contacter par mail : 
        </p>
        <p className='my-4 text-center'><strong> benjamin.corion.note@gmail.com </strong></p> 
        <p className='text-center'>
          A bientôt !
        </p>
      </div>
    </div>
  )
}
