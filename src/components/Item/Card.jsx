import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputNumberForm from "../Form/InputNumberForm";
import {useState} from "react";
import '../../assets/css/Item/Card.css';
import btn_add_car from '../../assets/img/buttons/btn_add_car.png';

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
        <div className="my-card">
            <div id={'my-card'}>
                {/*on sale info*/}
                <Row>
                    <Col>
                        <div>
                            <div className={'text-sale'}>
                                {item.on_sale ? (
                                        <div>
                                            <div className="dot-sale"></div>
                                            <span>ON SALE</span>
                                        </div>
                                    ) :
                                    (<div className={'out-sale'}>NOT FOR SALE</div>)
                                }
                            </div>
                            <div className={'text-sale text-stock'}>
                                {item.in_stock ? "In Stock" : ""}
                            </div>
                        </div>
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
                    {
                        item.on_sale ? (
                            <div>
                                <span>${item.price}</span> {item.discount > 0 &&
                                <span className={'old-price-card'}>${item.price - item.discount}</span>}
                            </div>
                        ) : (<div className={'out-sale'}>$</div>)
                    }

                </div>
                {/*item description*/}
                <div className={'content-card-description'}>
                    {item.description}
                </div>
                {/*item buttons*/}
                <div className={'content-card-buttons'}>
                    <Row>
                        <Col style={{paddingRight: '6px'}}>
                            <div className={'button-box-detail'}>
                                <span>DETAILS</span>
                            </div>
                        </Col>
                        <Col style={{paddingLeft: '6px'}}>
                            <div className={'button-box-buy'}>
                                <span>ADD</span>
                                <span className={'button-box-buy-img'}>
                                        <img src={btn_add_car} height={14} alt={'item_1'}/>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default Card
