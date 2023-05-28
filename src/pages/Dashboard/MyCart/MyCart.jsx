import React from "react";
import useCart from "../../../hooks/useCart";
import {Helmet} from "react-helmet-async";
import { FaTrashAlt} from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, items) => items.price + sum, 0);

  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
          if (data.deletedCount > 0) {
            refetch()
            Swal.fire(
          'Deleted!',
          'Your food has been deleted.',
          'success'
        )
          }
        })
        
      }
    })
  }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="flex justify-between h-12 font-semibold ">
        <h3 className="text-3xl">TOTAL ORDERS: {cart.length}</h3>
        <h3 className="text-3xl">TOTAL PRICE: {total}</h3>
        <button className="btn btn-warning btn-sm text-white">PAY</button>
      </div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <th>
                    <button onClick={()=>handleDelete(item)} className="btn bg-red-600 btn-sm px-2 rounded-md"><FaTrashAlt /></button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
