import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/store';
import { BranchDetail } from '../../../shared/interfaces/Branch.inteface';

const ResturantDetail = () => {
    const sharedData = useSelector((state: RootState) => state.sharedData);
    const [activeBranch, setActiveBranch] = useState<BranchDetail | null>(null)
    useEffect(() => {
        if (sharedData && sharedData.selectedBranchDetail) {
            setActiveBranch(sharedData.selectedBranchDetail);
        }
    }, [sharedData]);
    return (
        <div>
            <div className='grid align-items-center'>
                <div className='lg:col-9  md:col-8 flex flex-column'>
                    <h1 className='text-3xl font-semibold mb-0'>
                        {activeBranch?.name}
                    </h1>
                    <small>
                        {activeBranch?.address}
                    </small>
                    <small>{activeBranch?.contact_number}</small>
                    <small>Monday - Sunday ( {activeBranch?.open_time} PM - {activeBranch?.close_time} AM )</small>
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