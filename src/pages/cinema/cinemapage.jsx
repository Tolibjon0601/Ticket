import React from 'react'
import ButtonsPage from '../home/buttons'

const CinemaPage = () => {
  return (
    <div >
     <ButtonsPage/>
     <div className='flex gap-6 items-center justify-center'>
      <img src="./image/cinema_img_1.png" alt="" />
      <img src="./image/cinema_img_2.png" alt="" />
      <img src="./image/cinema_img_3.png" alt="" />
     </div>

    </div>

  )
}

export default CinemaPage