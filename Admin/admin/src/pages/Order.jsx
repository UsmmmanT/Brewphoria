import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backend_url, currency } from '../App'
import { assets } from '../assets/admin_assets/assets'
import { toast } from 'react-toastify'


const Order = ({ token }) => {
  const [orders, setOrders] = useState([])
  const [sortOrder, setSortOrder] = useState('asc')
  const adminToken = token || localStorage.getItem('token')

  const fetchOrders = async () => {
    if (!adminToken) {
      console.log('Order fetch skipped: missing admin token')
      return null
    }

    try {
      const res = await axios.post(backend_url + '/api/order/list', {}, { headers: { token: adminToken } })
      console.log(res.data)
      if (res.data.success) {
        setOrders(res.data.orders)
      }

    } catch (error) {
      console.log('Order fetch failed:', error?.response?.data || error.message)
    }

  }

  const statusHandler = async (event,orderId)=>{

    try {
      const res= await axios.post(
        backend_url+'/api/order/status',
        {orderId , status:event.target.value},
        {headers:{token: adminToken}}
      )
      
      if(res.data.success){
        toast.success(res.data.message)
        fetchOrders()
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log('Order status update failed:', error?.response?.data || error.message)
      toast.error(error?.response?.data?.message || error.message)
      
    }

    

  }

  const handleSortByStatus = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
    setSortOrder(newSortOrder)
  }

  const getSortedOrders = () => {
    const sorted = [...orders].sort((a, b) => {
      const statusOrder = ['Order Placed', 'Packing', 'Shipped', 'Out For Delivery', 'Delivered']
      const indexA = statusOrder.indexOf(a.status)
      const indexB = statusOrder.indexOf(b.status)
      
      if (sortOrder === 'asc') {
        return indexA - indexB
      } else {
        return indexB - indexA
      }
    })
    return sorted
  }

  useEffect(() => {
    fetchOrders()
  }, [adminToken])




  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h3>Orders Page</h3>
        <button
          onClick={handleSortByStatus}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
        >
          Sort by Status ({sortOrder === 'asc' ? 'A-Z' : 'Z-A'})
        </button>
      </div>
      <div>
        {getSortedOrders().map((order, index) => (
          <div className='py-0.5 grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-1 p-5 md:p-8 text-xs sm:text-sm text-gray-700' key={index}>
            <img src={assets.parcel_icon} alt="" />
            <div>
              {order.items.map((item, itemIndex) => {
                if (itemIndex === order.items.length - 1) {
                  return <p className='py-0.5' key={itemIndex}>{item.name} x {item.quantity}: <span>{item.size}</span></p>
                }
                else {
                  return <p className='py-0.5' key={itemIndex}>{item.name} x {item.quantity}: <span>{item.size}</span>,</p>

                }
              })}

              <p className='mt-3 mb-2 font-medium'>{
                order.address.firstName + ' ' + order.address.lastName

              }</p>

              <div>
                <p>{order.address.street + ','}</p>
                <p>{order.address.city + ',' + order.address.province + ',' + order.address.country + ',' + order.address.zipCode}</p>

              </div>

              <p>{order.address.phone}</p>
            </div>
            <div>
              <p>Items:{order.items.length}</p>
              <p>Method:{order.paymentMethod}</p>
              <p>Payment:{order.payment?'Done':'Pending'}</p>
              <p>Date:{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p>{currency} {order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order