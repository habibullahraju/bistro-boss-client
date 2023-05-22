import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 w-10/12 mx-auto text-center py-4 mb-4'>
            <p className='text-yellow-500 mb-2'>{subHeading}</p>
            <h3 className='text-4xl border-y-4 py-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;