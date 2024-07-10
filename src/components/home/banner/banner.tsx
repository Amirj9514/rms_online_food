import React, { useState, useEffect, useCallback } from 'react';
import { Galleria } from 'primereact/galleria';
import { ApiService } from '../../../shared/services/sharedService';



const Banner: React.FC = () => {

    const [images, setImages] = useState<any[]>([]);
    
    const getBanners = useCallback(async () => {
        const apiService = new ApiService();
        let apiParam = {
            branchId: "1316"
        }

        try {
            const response = await apiService.sendPostRequest('WebBannerByBranchId', apiParam);
            if (response.Success) {
                let data = response.Data;
                if (data && Array.isArray(data) && data.length > 0) {
                    setImages(data)
                }
            } else {
                // Handle the case where response is not successful
            }
        } catch (error) {
            // Handle the error
        }
    }, []);
    useEffect(() => {
        getBanners()
    }, [getBanners]);




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