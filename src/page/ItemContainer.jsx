import Header from "../components/header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import {getFetchData} from "../service/FetchData";
import ItemFilterList from "../components/Item/ItemFilterList";
import Banks from "../components/common/Banks";
import SocialMedia from "../components/common/SocialMedia";

// Logic for Item Container
const ItemContainer = () => {
    return (
        <div>
            <Header/>
            <div className={'container-main-page'}>
                <h1>Item Container</h1>
                <ItemFilterList/>
                <Item items={getFetchData()}/>
            </div>
            <Banks/>
            <SocialMedia/>
            <Footer/>
        </div>
    )
}

export default ItemContainer