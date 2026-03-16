import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import down from '../images/down.png'
import Title from '../components/Title'
import  ProductItem from '../components/ProductItem'

const Collection = () => {
  const [showFilter,setShowFIlter]=useState(true)
  const [filteredProducts,setFilteredProducts]=useState([])
  const {products ,search,showSearch, getProductStartingPrice}=useContext(ShopContext)
  const [sortType,setSortType]=useState('relavent');

  const [category,setCategory]=useState([]);

  const toggleCategory=(e)=>{
    const selectedCategory = e.target.value.toLowerCase();

    if (category.includes(selectedCategory)){
      setCategory(category.filter((item)=>item!==selectedCategory))
    }
    else{
      setCategory([...category,selectedCategory])
    } 
  }

  const applyFilters=()=>{
    let productsCopy=products.slice();
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length>0){
      productsCopy=productsCopy.filter((item)=> category.includes(item.category?.toLowerCase()));
  }
  setFilteredProducts(productsCopy);
}


  useEffect(()=>{
    applyFilters();
  },[category, products,search,showSearch])

  const sortProduct=()=>{
    const fpCopy=filteredProducts.slice();

    switch(sortType){

      case 'low-high':
       setFilteredProducts(fpCopy.sort((a,b)=>getProductStartingPrice(a)-getProductStartingPrice(b)));
        break;  
      case 'high-low':
        setFilteredProducts(fpCopy.sort((a,b)=>getProductStartingPrice(b)-getProductStartingPrice(a)));
        break;
      default:        
      applyFilters();
      break;

    }

  }

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 border-t'>
      {/*Filter Options*/}
      <div className='min-w-60 sm:max-w-[220px]'>
        <p className='my-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#7d4b2f] cursor-pointer'>FILTERS
          <img onClick={()=>setShowFIlter(!showFilter)} className={`h-6 sm:hidden ${showFilter ?'rotate-90':' '}`} src={down} alt="" />
        </p>
          {/*Category Filter*/}
          <div className={`mt-4 rounded-[1.4rem] border border-[#dfc2ae] bg-[linear-gradient(180deg,_rgba(255,249,244,0.96),_rgba(245,226,212,0.92))] px-4 py-4 shadow-[0_14px_35px_rgba(118,63,29,0.08)] ${showFilter ? '':'hidden'} sm:block`}>
          <p className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8f5a39]'>Categories</p>

          <div className='flex flex-col gap-3 text-sm text-[#5e483c]'>
            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'coffee'} onClick={toggleCategory} />COFFEE
            </label>

            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'hot chocolate'} onClick={toggleCategory} />HOT CHOCOLATE
            </label>

            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'matcha & friends'} onClick={toggleCategory} />MATCHA & FRIENDS
            </label>

            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'chocolate'} onClick={toggleCategory} />CHOCOLATE
            </label>

            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'munchables'} onClick={toggleCategory} />MUNCHABLES
            </label>

            <label className='flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] transition hover:text-[#2f1d14]'>
              <input className='h-3.5 w-3.5 accent-[#8f5231]' type="checkbox" value={'spreads'} onClick={toggleCategory} />SPREADS
            </label>
          </div>
          </div>

      </div>
      {/*right side*/}
      <div className='flex-1'> 
        <div className='mb-5 flex items-center justify-between gap-4 text-base sm:text-2xl'>
          <Title text1={'OUR'} text2={'PRODUCTS'} />
          {/*Product Sort*/}
          <select onChange={(e)=>setSortType(e.target.value)} className='rounded-full border border-[#d8b8a4] bg-white/85 px-4 py-2 text-sm text-[#5a4338] outline-none'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/*Map Products*/}
        <div className='grid grid-cols-2 gap-4 gap-y-7 md:grid-cols-3 lg:grid-cols-4'>
        {
          filteredProducts.map((item,index)=>(
            <ProductItem key={index} product={item} />
          ))
        }
        </div>


      </div>

    </div>
  )
}

export default Collection