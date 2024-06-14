import './header.scss';
import { CiLocationOn } from 'react-icons/ci'
import { Button } from 'primereact/button';
import logo from '../../assets/Images/logo.png'

const Header = () => {
    return (
        <nav className='topNavbar'>
            <div className='flex justify-content-between align-items-center py-2 mx-4'>
                <div className='flex align-items-center gap-3'>
                    <div className='logo'>
                        <img src={logo} alt='logo' width={100} />
                    </div>

                    <div className='flex gap-1 align-items-center cursor-pointer ml-3'>
                        <div className='flex justify-content-center align-items-center'>
                            <CiLocationOn size={25} />
                        </div>
                        <div>
                            <div >Select Branch</div>
                            <div className='text-lg font-semibold'>Falafel Mustafa Town</div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div>
                        <Button label="Login / Register" severity="secondary" text />
                    </div>
                    <div>
                        <Button label="View Cart" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header