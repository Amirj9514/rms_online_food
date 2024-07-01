import "./header.scss";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "primereact/button";
import logo from "../../assets/Images/logo.png";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store/store";
import { insertData } from "../../Store/Slices/sharedDataSlice";
import { ApiService } from "../../shared/services/sharedService";
import { RestaurantBranch } from "../../shared/interfaces/Branch.inteface";

const Header = () => {
    const sharedData = useSelector((state: RootState) => state.sharedData);
    const [visible, setVisible] = useState<boolean>(true);
    const [selectedBranch, setSelectedBranch] = useState<RestaurantBranch | null>(null);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (sharedData && sharedData.selectedBranch) {
            setSelectedBranch(sharedData.selectedBranch);
        }
    }, [sharedData]);

    const getResturantDetail = (): any[] => {
        if (sharedData && sharedData.resturantDetail && sharedData.resturantDetail.length > 0) {
            return sharedData.resturantDetail;
        }
        return [];
    };



    const handelSelectedBranch = (data: any): void => {
        setSelectedBranch(data);
        dispatch(insertData({ key: 'selectedBranch', val: data }));
    }

    const getBranchDetail = async () => {
        const apiService = new ApiService();

        try {
            const responce = await apiService.sendPostRequest(`WebAppMainData?branch_id=${selectedBranch?.id}&app_id=1`, null)
            if (responce.Success) {
            }else{

            }
        } catch (error) {

        }

    }
    return (
        <>
            <nav className="topNavbar">

                <div className="flex justify-content-between align-items-center py-2 mx-4">
                    <div className="flex align-items-center gap-3">
                        <div className="logo">
                            <img src={logo} alt="logo" width={100} />
                        </div>
                        <div className="flex gap-1 align-items-center cursor-pointer ml-3">
                            <div className="flex justify-content-center align-items-center">
                                <CiLocationOn size={25} />
                            </div>
                            <div>
                                <div>Select Branch</div>
                                <div className="text-lg font-semibold">
                                    Falafel Mustafa Town
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <Button label="Login / Register" severity="secondary" text />
                        </div>
                        <div>
                            <Button label="View Cart" />
                        </div>
                    </div>
                </div>
            </nav>

            <Dialog
                visible={visible}
                modal
                style={{ width: "40vw" }}
                onHide={() => {
                    if (!visible) return;
                    setVisible(false);
                }}
                content={({ hide }) => (
                    <div
                        className="flex justify-content-center flex-column px-4 py-5 gap-4"
                        style={{ borderRadius: "12px", backgroundColor: "#ffffff" }}
                    >
                        <div className="logo flex justify-content-center pointer-none">
                            <img src={logo} alt="logo" width={100} />
                        </div>
                        <div className="flex flex-column align-item-center justify-center-center text-center">
                            <div className="text-lg font-semibold">
                                Select Your Order Type
                            </div>
                            <div className="flex justify-content-center mt-2">
                                <div
                                    className="flex border-round-3xl p-1"
                                    style={{ backgroundColor: "#E8E8E8" }}
                                >
                                    <div
                                        className="px-4 py-2 border-round-3xl cursor-pointer"
                                        style={{ backgroundColor: "#ffffff" }}
                                    >
                                        Delivery
                                    </div>
                                    <div className="px-4 py-2 border-round-3xl cursor-pointer">
                                        Pickup
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-column align-item-center justify-center-center text-center">
                            <div className="text-lg font-semibold mb-2">
                                Please Select Branch
                            </div>
                            <div className="text-left">
                                <Dropdown value={selectedBranch} onChange={(e) => handelSelectedBranch(e.value)} options={getResturantDetail()} optionLabel="name"
                                    placeholder="Select a Branch" className="w-full" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <Button label="Let's Go get some Food" onClick={() => { getBranchDetail() }} className="w-full" />
                            </div>
                        </div>
                    </div>
                )}
            ></Dialog>
        </>
    );
};

export default Header;
