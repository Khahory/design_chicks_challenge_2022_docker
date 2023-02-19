import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/Header.css';
import logo from '../assets/img/logo-large.svg'
import down_arrow from '../assets/icons/arrow-down.svg'
import btn_add_car from '../assets/img/buttons/btn_add_car.png'

const Header = () => {
    const height_icon = 6;
    return (
        <div className='nav-bar'>
            <Row className={'container-page container-page-header'}>
                <Col className='nav-bar-header-items nav-bar-border'>
                    <img className={'logo'}
                         height={31}
                         src={logo} alt='logo'/>
                </Col>
                <div className={'content-item'}>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page firt-item'>
                        <div>
                            CURRENCY <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            ITEMS <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            ACCOUNTS <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SERVICES <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SWAP <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SELL <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                        </div>
                    </Col>
                </div>
                <div className={'content-item'}>
                    <Col xxl={1} className='aling-item-end nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-end'>
                        USD <img src={down_arrow} alt='down_arrow' height={height_icon}/>
                    </Col>
                    <Col xxl={1} className='aling-item-end nav-bar-header-items-text nav-bar-header-items'>
                        <div>
                            <img src={btn_add_car} alt='down_arrow' height={15}/> CART (5)
                        </div>
                    </Col>
                    <Col xxl={1}
                         className='last-item aling-item-end nav-bar-header-items-text nav-bar-header-items'>
                        <div className={'box-sigin'}>
                            SIGN IN <img src={btn_add_car} alt='down_arrow' height={15}/>
                        </div>
                    </Col>
                </div>
            </Row>
        </div>
    );
}

export default Header;