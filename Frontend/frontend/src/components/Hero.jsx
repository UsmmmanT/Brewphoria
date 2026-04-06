import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/hero.png'

const Hero = () => {
  return (
        <section className='mt-8'>
            <div className='grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]'>
                <div className='py-6'>
                    
                    <h1 className='mt-5 max-w-2xl text-4xl leading-tight text-[#2f1d14] sm:text-5xl lg:text-6xl'>
                        Indonesian coffee with depth, warmth, and a smooth finish.
                    </h1>
                    <p className='mt-6 max-w-xl text-base leading-8 text-[#6c5648] sm:text-lg'>
                        Bold enough to stand out, balanced enough for every day. Discover a roast
                        that turns a simple cup into a richer ritual.
                    </p>

                    <div className='mt-8 flex flex-col gap-4 sm:flex-row sm:items-center'>
                        <Link
                            to='/collection'
                            className='inline-flex items-center justify-center rounded-full bg-[#2f1d14] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#493024]'
                        >
                            Shop
                        </Link>
                        <Link
                            to='/about'
                            className='inline-flex items-center justify-center text-sm font-semibold uppercase tracking-[0.18em] text-[#6c5648] transition hover:text-[#2f1d14]'
                        >
                            Our Story
                        </Link>
                    </div>
                </div>

                <div>
                    <div className='relative min-h-[320px] overflow-hidden rounded-[2rem] bg-[#ead8ca]'>
                        <img src={hero} className='h-full w-full object-cover' alt='Featured Brewphoria coffee' />
                    
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero