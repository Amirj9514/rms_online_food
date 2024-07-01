import { useEffect } from "react";
import Header from "./header/header";
import { ApiService } from "../shared/services/sharedService";
import { useDispatch, } from 'react-redux';
import { AppDispatch } from '../Store/store';
import {  insertData } from '../Store/Slices/sharedDataSlice';



const Layout = () => {

  const dispatch = useDispatch<AppDispatch>();  

  useEffect(() => {
    const apiService = new ApiService();
    const getResturantDetail = async () => {
      try {
        const responce = await apiService.sendGetRequest(`GetRestaurantBranchesNameAndId/${process.env.REACT_APP_RESTAURANT_ID}`)
        if (responce.Success) {
          dispatch(insertData({ key: 'resturantDetail', val: responce.Data }));
        } else {
        }
      } catch (error) {
      }
    }

    getResturantDetail()
  })

  return (
    <>
      <div className=''>
        <Header />
      </div>
    </>
  )
}

export default Layout;