import React from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer className='mt-32 text-[#374151]'>
            <div className='grid grid-cols-1 gap-12 border-t border-transparent pt-4 text-left md:grid-cols-[1.8fr_1fr_1fr] md:gap-20'>
                <div className='max-w-xl'>
                    <Link to='/' className='inline-flex'>
                        <img className='w-32 sm:w-40 h-auto rounded-xl' src={logo}  alt='Brewphoria logo' />
                    </Link>
                    <p className='mt-8 max-w-md text-lg leading-10 text-[#4B5563] sm:text-[15px] sm:leading-9'>
                        Brewphoria brings together bold roasts, smooth blends, and a coffee ritual built for slow mornings and long conversations. Every cup is crafted to feel familiar, comforting, and worth coming back to.
                    </p>
                </div>

                <div>
                    <h3 className='text-3xl font-semibold uppercase tracking-tight text-black sm:text-[26px]'>COMPANY</h3>
                    <ul className='mt-10 space-y-4 text-lg text-[#4B5563] sm:text-[15px]'>
                        <li>
                            <Link to='/' className='transition hover:text-black'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='transition hover:text-black'>About us</Link>
                        </li>
                        <li>
                            <span>Delivery</span>
                        </li>
                        <li>
                            <span>Privacy policy</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='text-3xl font-semibold uppercase tracking-tight text-black sm:text-[26px]'>GET IN TOUCH</h3>
                    <ul className='mt-10 space-y-4 text-lg text-[#4B5563] sm:text-[15px]'>
                        <li>
                            <a href='tel:+10000000000' className='transition hover:text-black'>+1-000-000-0000</a>
                        </li>
                        <li>
                            <a href='mailto:hello@brewphoria.com' className='transition hover:text-black'>hello@brewphoria.com</a>
                        </li>
                        <li>
                            <a
                                href='https://www.instagram.com/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='transition hover:text-black'
                            >
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='mt-12 border-t border-gray-200'>
                <p className='py-5 text-center text-sm text-[#6B7280]'>Copyright 2026 Brewphoria. All rights reserved.</p>
            </div>
        </footer>
  )
}

export default Footer