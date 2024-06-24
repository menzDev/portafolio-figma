import React from 'react'

const Contenido = () => {
  return (
    <div className='descripcion flex justify-center flex-col items-center w-full h-auto lg:max-w-[855px]  lg:flex lg:justify-between lg:items-center lg:flex-row-reverse  m-auto pb-[71px]'>
        <div className='mt-[33px] '><img className='lg:w-[243px] lg:h-[243px]' src="./avatar.png" alt="" /></div>
        <div className=' flex flex-col lg:flex lg:flex-col'>
          <div className='text-center w-[312px] lg:w-full h-auto mt-[34px]'>
            <h1 className='text-[32px] font-bold text-balance lg:text-left mb-[21px] xl:w-[506px] xl:h-[105px] xl:font-bold xl:text-[44px] xl:leading-[60px] '>Hi, I am John,Creative Tecnologist</h1>
            <p className='text-[16px] font-normal text-balance lg:text-left  xl:w-[497px] xl:h-[66px] xl:text-[16px] xl:leading-relaxed'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className='max-[412px]:flex justify-center'><button className='bg-[#FF6464] mt-[36px] w-[208px] h-[47px] rounded-[2px] text-white'>Download Resume</button></div>
        </div>
    </div>
  )
}

export default Contenido