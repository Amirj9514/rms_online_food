import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
// import { useSharedService } from '../../../shared/services/shared.service';

const Banner: React.FC = () => {

    // const { sendPostRequest, state } = useSharedService()
    const [images, setImages] = useState<any[]>([]);

    // useEffect(() => {
    //     const getBanners = async () => {
    //         let apiParam = {
    //             branchId: "1316"
    //         }
    //         try {
    //             const response = await sendPostRequest('WebBannerByBranchId', apiParam);
    //             if (response && response.Success) {
    //                 let data = response.Data;
    //                 if (data && Array.isArray(data) && data.length > 0) {
    //                     setImages(data)
    //                 } else {
    //                     alert("Error")
    //                 }
    //             } else {
    //                 alert("Error")
    //             }
    //         } catch (error) {
    //         }
    //     };
    //     getBanners()
    // }, [sendPostRequest]);

    const itemTemplate = (item: any) => {
        return <img className='border-round-2xl overflow-hidden' src={item.image} alt={item?.alt ? item.alt : ''} style={{ width: '100%', display: 'block', height: '100%', objectFit: 'fill' }} />;
    };
    return (
        <><div className="card">
            <Galleria value={images} className='bannerHeight' autoPlay={true} style={{ maxWidth: '100%', }} showThumbnails={false} item={itemTemplate} />
        </div></>
    )
}

export default Banner