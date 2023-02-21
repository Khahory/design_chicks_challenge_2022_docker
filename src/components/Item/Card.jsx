import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputNumberForm from "../Form/InputNumberForm";
import {useState} from "react";
import '../../assets/css/Item/Card.css';

const Card = ({item}) => {
    // image src
    const [imageSrc, setImageSrc] = useState(item.img_item);
    const [categorySrc, setCategorySrc] = useState(item.img_category);
    import(`../../assets/img/items/${item.img_item}`).then((image) => {
        setImageSrc(image.default);
    });
    import(`../../assets/img/category/${item.img_category}`).then((image) => {
        setCategorySrc(image.default);
    });

    return (
        <div>
            <div className="my-card">
                <div id={'my-card'}>
                    {/*on sale info*/}
                    <Row>
                        <Col>
                            {item.on_sale ? "ON SALE" : ""}
                            <br/>
                            {item.in_stock ? "In Stock" : ""}
                        </Col>
                        <Col>
                            <InputNumberForm
                                type={'text'}
                                has_icon={false}
                                value={1}/>
                        </Col>
                    </Row>
                    {/*item img*/}
                    <div className={'img-content-card'}>
                        <img src={imageSrc} height={63} alt={'item_1'}/>
                    </div>
                    {/*item content*/}
                    <div className={'content-card'}>
                        <Row>
                            <Col xs={8}>
                                <div className={'tittle-card'}>
                                    {item.name}
                                </div>
                            </Col>
                            <Col>
                                <div className={'aling-col-right'}>
                                    <img src={categorySrc} height={16} alt={'item_1'}/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/*item price*/}
                    <div className={'price-card'}>
                        <span>${item.price}</span> {item.discount > 0 &&
                        <span className={'old-price-card'}>${item.price - item.discount}</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
