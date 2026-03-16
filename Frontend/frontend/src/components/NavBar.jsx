import React, { useContext } from 'react'
import logo from '../images/logo.jpg'
import search from '../images/search.png'
import user from '../images/user.png'
import coffeShop from '../images/coffeeShop.png'
import list from '../images/list.png'
import back from '../images/back.png'
import { Link,NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import {toast} from 'react-toastify'

const NavBar = () => {
  const [visible,setVisible] = React.useState(false)
  const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}= useContext(ShopContext)
  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/collection', label: 'PRODUCTS' },
    { to: '/about', label: 'ABOUT' },
    { to: '/contact', label: 'CONTACT' },
  ]

  const logout=()=>{
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    setToken('');
    setCartItems({});
    navigate('/login');
  }

  return (
    <div className='w-full py-5 font-medium'>
      <div className='flex items-center justify-between gap-4 rounded-[1.75rem] border border-[#e9c8b2] bg-[linear-gradient(135deg,_#DCCDBE,_#C8A58C)] px-4 py-4 shadow-[0_20px_50px_rgba(118,63,29,0.12)] sm:px-6'>
        <Link to='/' className='flex items-center gap-3'>
          <img className='w-32 sm:w-40 h-auto rounded-xl' src={logo} alt='Brewphoria logo' />
          <div className='hidden lg:block'>
            
          </div>
        </Link>

        <ul className='hidden sm:flex items-center gap-2 rounded-full border border-[#eed3c2] bg-white/70 px-3 py-2 text-sm text-[#5f493d]'>
          {navLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? 'rounded-full bg-[#2e1d14] px-4 py-2 text-white shadow-sm transition'
                  : 'rounded-full px-4 py-2 transition hover:bg-[#f5e4d7] hover:text-[#2e1d14]'
              }
            >
              <p className='text-[12px] tracking-[0.22em]'>{item.label}</p>
            </NavLink>
          ))}
        </ul>

        <div className='flex items-center gap-3 sm:gap-4'>
          <button
            type='button'
            onClick={() => setShowSearch(true)}
            className='flex h-11 w-11 items-center justify-center rounded-full border border-[#ead0bf] bg-white/75 transition hover:bg-white'
          >
            <img src={search} className='w-4 cursor-pointer' alt='Search' />
          </button>

          <div className='group relative'>
            <Link
              to='/login'
              className='flex h-11 w-11 items-center justify-center rounded-full border border-[#ead0bf] bg-white/75 transition hover:bg-white'
            >
              <img src={user} className='w-4 cursor-pointer' alt='User account' />
            </Link>
            <div className='absolute right-0 z-20 hidden pt-4 group-hover:block'>
              <div className='flex w-44 flex-col gap-2 rounded-2xl border border-[#ecd4c3] bg-[linear-gradient(180deg,_#fffaf5,_#f8e3d3)] py-4 px-5 text-sm text-[#6c5548] shadow-[0_18px_40px_rgba(94,50,25,0.16)]'>
                <p onClick={() => navigate('/login')} className='cursor-pointer transition hover:text-[#2e1d14]'>Profile</p>
                <p onClick={() => navigate('/orders')} className='cursor-pointer transition hover:text-[#2e1d14]'>Orders</p>
                <p onClick={logout} className='cursor-pointer transition hover:text-[#2e1d14]'>Logout</p>
              </div>
            </div>
          </div>

          <Link to='/cart' className='relative flex h-11 w-11 items-center justify-center rounded-full border border-[#ead0bf] bg-[#2e1d14] shadow-sm transition hover:bg-[#472d21]'>
            <img src={coffeShop} className='w-4 min-w-4 brightness-0 invert' alt='Cart' />
            <p className='absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d37b46] px-1 text-[10px] leading-none text-white'>
              {getCartCount()}
            </p>
          </Link>

          <button
            type='button'
            onClick={() => setVisible(true)}
            className='flex h-11 w-11 items-center justify-center rounded-full border border-[#ead0bf] bg-white/75 sm:hidden'
          >
            <img src={list} className='w-4 cursor-pointer' alt='Open menu' />
          </button>
        </div>
      </div>

      {/* Mobile Menu for small screens*/}
      <div className={`fixed top-0 right-0 bottom-0 z-30 overflow-hidden bg-[linear-gradient(180deg,_rgba(255,249,244,0.98),_rgba(246,220,200,0.98))] transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex h-full flex-col text-[#5d4639]'>
          <div className='flex items-center justify-between border-b border-[#e8cab4] px-6 py-5'>
            <div>
              <p className='mt-1 text-lg font-semibold text-[#2e1d14]'>Brewphoria</p>
            </div>
            <button
              type='button'
              onClick={() => setVisible(false)}
              className='flex items-center gap-3 rounded-full border border-[#e8cab4] bg-white/70 px-4 py-2'
            >
              <img className='h-4 rotate-180' src={back} alt='Back' />
              <p>Back</p>
            </button>
          </div>

          <div className='flex flex-1 flex-col gap-3 px-6 py-6'>
            {navLinks.map((item) => (
              <NavLink
                key={item.to}
                onClick={() => setVisible(false)}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? 'rounded-2xl bg-[#2e1d14] px-5 py-4 text-sm tracking-[0.25em] text-white shadow-sm'
                    : 'rounded-2xl border border-[#ead0bf] bg-white/70 px-5 py-4 text-sm tracking-[0.25em] text-[#5d4639]'
                }
              >
                {item.label}
              </NavLink>
            ))}

        
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
