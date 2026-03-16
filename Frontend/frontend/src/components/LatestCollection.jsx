import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {
    const {products}  = useContext(ShopContext)
    const [LatestProducts,setLatestProducts]=useState([]);

    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])

  return (
    <section className='my-20'>
        <div className='py-4 text-center'>
             
             <div className='text-3xl font-bold'>
                 <Title text1={"What's"} text2={'NEW'}></Title>
             </div>
             <p className='mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#6b5648] sm:text-base'>
                Freshly selected favorites with bold character, cozy notes, and the kind of quality that makes each bag worth opening.
                </p>
        </div>
        {/*Rendering Products*/}
                <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
            {
                LatestProducts.map((item,index)=>(
                    <ProductItem key={index} product={item}/>
                )
            )
            }

        </div>

                </section>
  )
}

export default LatestCollection