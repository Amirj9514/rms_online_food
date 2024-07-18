import React, { useEffect, useRef, useState } from 'react';
import { RootState } from '../../../Store/store';
import { useSelector } from 'react-redux';
import { BranchMenu, MenuCategory } from '../../../shared/interfaces/Branch.inteface';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './menu.scss'
import { Button } from 'primereact/button';

const Menu = () => {
    const sharedData = useSelector((state: RootState) => state.sharedData);
    const [menuList, setMenu] = useState<MenuCategory[]>([])
    const scrollContainerRef = useRef<HTMLUListElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScrollWidth, setMaxScrollWidth] = useState(0);
    useEffect(() => {
        if (sharedData && sharedData.selectedBranchDetail) {
            let branchDetail = sharedData.selectedBranchDetail
            setMenu(branchDetail && branchDetail.lstCategory.length > 0 ? branchDetail.lstCategory : [])

            const scrollContainer = scrollContainerRef.current;
            if (scrollContainer) {
                setMaxScrollWidth(scrollContainer.scrollWidth - scrollContainer.clientWidth);
            }

            const handleScroll = () => {
                if (scrollContainerRef.current) {
                    setScrollPosition(scrollContainerRef.current.scrollLeft);
                }
            };

            if (scrollContainer) {
                scrollContainer.addEventListener('scroll', handleScroll);
            }

            // Cleanup event listener on component unmount
            return () => {
                if (scrollContainer) {
                    scrollContainer.removeEventListener('scroll', handleScroll);
                }
            };
        }
    }, [sharedData]);
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const arrowButton = () => {
        if (maxScrollWidth && maxScrollWidth > 0) {
            return (
                <div className='flex gap-2'>
                    <div className={`arrows flex align-items-center justify-content-center ${scrollPosition && scrollPosition > 0 ? '' : 'pointer-none opacity-30'} `} onClick={scrollLeft}>
                        <IoIosArrowBack />
                    </div>
                    <div className={`arrows flex align-items-center justify-content-center ${scrollPosition >= maxScrollWidth ? 'pointer-none opacity-30' : ''}`} onClick={scrollRight}>
                        <IoIosArrowForward />
                    </div>
                </div >
            )
        }
    }
    return (
        <>
            <div className="my-4">

                <div className="tabs flex align-items-center">
                    <ul className='scroll-container' ref={scrollContainerRef}>
                        {
                            menuList.map((menu: MenuCategory, index: number) => {
                                return (
                                    <li key={index} id={'item-' + menu.id} className={index === 1 ? 'active' : ''}>
                                        {menu.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {
                        arrowButton()
                    }
                </div>

                <div className='my-3'>
                    {
                        menuList.map((menu: MenuCategory, index: number) => {
                            return (
                                <>
                                    <div key={index} id={'item-' + menu.id} className='text-xl font-semibold my-3 py-2 border-bottom-2'>
                                        {menu.name}
                                    </div>
                                    <div className='grid'>
                                        {
                                            menu.menuList.map((menu: BranchMenu, index: number) => {
                                                return (
                                                    <>
                                                        <div key={index} className='col-4' >
                                                            <div className='menuCard'>
                                                                <div className='menuDetail p-2'>
                                                                    <div className='text-base font-medium'>
                                                                        {menu.name}
                                                                    </div>
                                                                    <div className='py-2 text-xs '>
                                                                        {menu.price}
                                                                    </div>
                                                                    <div className=''>
                                                                        <Button severity='secondary' label="Add to cart" className='text-sm font-normal py-2' rounded />
                                                                    </div>
                                                                </div>
                                                                <div className='menuImg'>
                                                                    <img src={menu.image_url} width={100} height={100} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default Menu