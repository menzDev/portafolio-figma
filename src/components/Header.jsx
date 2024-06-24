import React from 'react'

const header = () => {
  return (
    <nav className='lg:max-w-[1152px] flex justify-end  w-full h-auto py-[27px] px-[60px]  lg:gap-[33px] m-auto'>
      <img className='w-[30px] h-[18px] lg:hidden ' src="./header-menu/menu.png" alt="" />
      <div className='hidden lg:flex justify-end  w-full h-auto py-[20px] px-[18px]  lg:gap-[33px] font-bold'>
        <h2>Works</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>
    </nav>
  )
}

export default header