import Header from "../components/header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import {getFetchData} from "../service/FetchData";
import ItemFilterList from "../components/Item/ItemFilterList";

// Logic for Item Container
const ItemContainer = () => {
    return (
        <div>
            <Header/>
            <h1>Item Container</h1>
            <div>
                <ItemFilterList/>
                <Item items={getFetchData()}/>
            </div>
            < Footer/>
        </div>
    )
}

export default ItemContainer