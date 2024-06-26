import "./header.scss";
import { CiLocationOn } from "react-icons/ci";
import { Button } from "primereact/button";
import logo from "../../assets/Images/logo.png";
import { useEffect, useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { useSharedService } from "../../shared/services/shared.service";
const Header = () => {
    const [visible, setVisible] = useState(false);
    const { state, getData } = useSharedService()
    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    useEffect(() => {
        // const localStorageData = getData();
        // if (localStorageData) {
        //     console.log(localStorageData);
            
        //     // setSelectedCity(localStorageData.selectedCity);
        // }
    });

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
                                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                    placeholder="Select a City" className="w-full" />

                            </div>
                        </div>


                        <div>
                            <div>
                                <Button label="Let's Go get some Food" className="w-full" />
                            </div>
                        </div>
                    </div>
                )}
            ></Dialog>
        </>
    );
};

export default Header;
