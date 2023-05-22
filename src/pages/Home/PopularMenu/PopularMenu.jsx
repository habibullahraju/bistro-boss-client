import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/sectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(pItems => pItems.category === 'popular')
            setMenu(popularItems)
        })
    },[])
    console.log(menu);
    return (
        <section>
            <section>
                <SectionTitle
                    subHeading="--- Check it out ---"
                    heading="FROM OUR MENU"
                ></SectionTitle>
            </section>
            <div className='grid md:grid-cols-2 gap-10 mb-12'>
                {
                    menu.map(items => <MenuItem
                        key={items._id}
                        items={items}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;