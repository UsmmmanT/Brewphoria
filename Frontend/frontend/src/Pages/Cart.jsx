import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Title from '../components/Title'
import bin from '../images/bin.png'
import CartTotal from '../components/CartTotal'

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, getProductPrice } = useContext(ShopContext);
  const [cartData,setCartData]=useState([]);

  useEffect(() => {
    const tempData = []

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }
    }

    setCartData(tempData);
  }, [cartItems])


  return (
    <section className='border-t border-[#e0c7b6] pt-8'>
      <div className='mb-8'>
        
        <div className='mt-3 text-2xl'>
          <Title text1={'MY'} text2={'CART'} />
        </div>
       
      </div>

      <div className='space-y-5'>
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id)

          if (!productData) {
            return null
          }

          const selectedPrice = getProductPrice(productData, item.size)

          return (
            <div
              key={index}
              className='grid grid-cols-[4fr_0.8fr_0.4fr] items-center gap-4 border-b border-[#ead5c7] py-5 text-[#6b5648] sm:grid-cols-[4fr_1.4fr_0.5fr]'
            >
              <div className='flex items-start gap-5'>
                <img src={productData.image[0]} className='w-18 rounded-[1.2rem] bg-[#ead9cd] sm:w-24' alt={productData.name} />
                <div>
                  <p className='text-sm font-medium leading-6 text-[#3f2b21] sm:text-lg'>{productData.name}</p>

                  <div className='mt-3 flex flex-wrap items-center gap-3 sm:gap-5'>
                    <p className='rounded-full bg-white px-3 py-1.5 text-sm font-semibold tracking-[0.05em] text-[#8a4f30] shadow-[0_6px_18px_rgba(118,63,29,0.06)]'>
                      {currency} {selectedPrice}
                    </p>
                    <p className='rounded-full border border-[#dec5b4] bg-white px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#6b5648] shadow-[0_6px_18px_rgba(118,63,29,0.06)] sm:text-[13px]'>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  e.target.value === '' || e.target.value === '0'
                    ? null
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                }}
                type='number'
                min={1}
                defaultValue={item.quantity}
                className='justify-self-end rounded-full border border-[#d9baa6] bg-white/85 px-3 py-2 text-center text-sm text-[#3f2b21] outline-none sm:max-w-24'
              />
              <img
                onClick={() => {
                  updateQuantity(item._id, item.size, 0)
                }}
                src={bin}
                className='mr-2 w-4 cursor-pointer justify-self-end opacity-70 transition hover:opacity-100 sm:mr-4 sm:w-5'
                alt='Remove item'
              />
            </div>
          )
        })}
      </div>

      <div className='my-20 flex justify-end'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />

          <div className='w-full text-end'>
            <button
              onClick={() => {if (cartData.length > 0) navigate('/placeorder'); else alert('Your cart is empty! Please add items to proceed to checkout.')}}
              className='mt-8 inline-flex items-center justify-center rounded-full bg-[#2f1d14] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#493024]'
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Cart