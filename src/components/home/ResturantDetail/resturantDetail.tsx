import React from 'react'

const ResturantDetail = () => {
    return (
        <div>
            <div className='grid align-items-center'>
                <div className='lg:col-9  md:col-8 flex flex-column'>
                    <h1 className='text-3xl font-semibold mb-0'>
                        Falafel Mustafa Town
                    </h1>
                    <small>
                        12 Qayyum Block Mustafa Town Wahdat Road Lahore
                    </small>
                    <small>(0092)330-3252325</small>
                    <small>Monday - Sunday ( 4:00 PM - 2:00 AM )</small>
                </div>
                <div className='lg:col-3 md:col-4 flex'>
                    <div className='flex border-round-3xl p-1' style={{ backgroundColor: '#E8E8E8' }}>
                        <div className='px-4 py-2 border-round-3xl cursor-pointer' style={{ backgroundColor: '#ffffff' }}>Delivery</div>
                        <div className='px-4 py-2 border-round-3xl cursor-pointer'>Pickup</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResturantDetail