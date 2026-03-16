import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <section className='border-t border-[#e0c7b6] pt-8'>
      <div className='mb-8'>
       
        <div className='mt-3 text-2xl'>
          <Title text1={'GET IN'} text2={'TOUCH'} />
        </div>
        <p className='mt-3 max-w-xl text-sm leading-7 text-[#6b5648] sm:text-base'>
          Reach out for orders, support, or general questions.
        </p>
      </div>

      <div className='space-y-4 text-sm text-[#5d4639] sm:text-base'>
        <p>Phone: +92 330-865-307-7</p>
        <p>Email: utanveer485@gmail.com</p>
        <p>Location: Karachi, Pakistan</p>
      </div>
    </section>
  )
}

export default Contact