import { useEffect } from "react";
import Header from "./header/header";
import { useSharedService } from "../shared/services/shared.service";



const Layout = () => {
  const { sendGetRequest, state, insertData } = useSharedService()

  useEffect(() => {
    const getResturantDetail = async () => {
      try {
        const responce = await sendGetRequest(`GetRestaurantBranchesNameAndId/${process.env.REACT_APP_RESTAURANT_ID}`)
        if (responce.Success) {
          insertData({ key: 'resturantDetail', val: responce.Data })
        } else {

        }

      } catch (error) {

      }

    }

    getResturantDetail()
  }, [])

  return (
    <>
      <div className=''>

        <Header />
      </div>
    </>
  )
}

export default Layout;