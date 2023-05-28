import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({item}) => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();
  const [,refetch] = useCart()
    const {_id, name, image, price, recipe} = item;
    const handleAddToCart = item =>{
      if (user && user.email) {
        const cartItem = {menuItemId: _id, name, image, price, email: user.email}
        fetch('http://localhost:5000/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          if (data.insertedId) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added in the cart',
              showConfirmButton: false,
              timer: 1500
            })
            refetch()
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order Food!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from: location}})
          }
        })
      }
    }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
        <p className="bg-black absolute top-0 right-0 mt-4 mr-4 px-4 text-white">${price}</p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="mb-2">{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={()=> handleAddToCart(item)} className="btn bg-slate-100 text-black hover:text-white border-orange-400 border-0 border-b-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
