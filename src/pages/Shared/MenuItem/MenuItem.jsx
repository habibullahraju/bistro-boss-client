import React from 'react';

const MenuItem = ({items}) => {
    const {name, image, price, recipe} = items;
    return (
        <div className='flex space-x-4 '>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[100px] h-20' src={image} alt="" />
            <div>
                <h2 className='uppercase'>{name} -------------------</h2>
                <h3>{recipe}</h3>
            </div>
            <h2 className='text-yellow-500'>${price}</h2>
        </div>
    );
};

export default MenuItem;