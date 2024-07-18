import './home.scss';
import Banner from '../../components/home/banner/banner';
import ResturantDetail from '../../components/home/ResturantDetail/resturantDetail';
import Menu from '../../components/home/Menu/Menu';

const Home = () => {
    return (
        <div className='mx-4 mt-2 mb-4'>
            <Banner />
            <ResturantDetail />
            <Menu />
        </div>
    )
}

export default Home