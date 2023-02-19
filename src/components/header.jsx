import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/css/Header.css';
import logo from '../assets/img/logo-large.svg'
import down_arrow from '../assets/icons/arrow-down.svg'

const Header = () => {
    return (
        <div className='nav-bar'>
            <Row className={'container-page'}>
                <Col className='nav-bar-header-items nav-bar-border'>
                    <img className={'logo'}
                         height={31}
                         src={logo} alt='logo' />
                </Col>
                <div className={'content-item'}>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page firt-item'>
                        <div>
                            CURRENCY <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            ITEMS <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            ACCOUNTS <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SERVICES <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SWAP <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                    <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-page'>
                        <div>
                            SELL <img src={down_arrow} alt='down_arrow' height={6} />
                        </div>
                    </Col>
                </div>
                <Col className='nav-bar-header-items-text nav-bar-header-items nav-bar-header-items-end'>USD</Col>
                <Col className='nav-bar-header-items-text nav-bar-header-items'>CAR</Col>
                <Col className='nav-bar-header-items-text nav-bar-header-items'>SIGN IN</Col>
            </Row>
        </div>
    );
}

export default Header;