import Header from "../components/header";
import Footer from "../components/Footer";
import Item from "../components/Item";
import {getFetchData} from "../service/FetchData";
import ItemFilterList from "../components/Item/ItemFilterList";
import Banks from "../components/common/Banks";
import SocialMedia from "../components/common/SocialMedia";
import Container from "react-bootstrap/Container";

// Logic for Item Container
const ItemContainer = () => {
    return (
        <div className={'background-img'}>
            <Header/>
            <div className={'container-main-page'}>
                <h1 className={'my-title'}>Condimentum consectetur</h1>
                <ItemFilterList/>
                <Container className={'container-main-card'}>
                    <div className={'container-card'}>
                        <Item items={getFetchData()}/>
                    </div>
                </Container>
            </div>
            <Banks/>
            <SocialMedia/>
            <Footer/>
        </div>
    )
}

export default ItemContainer