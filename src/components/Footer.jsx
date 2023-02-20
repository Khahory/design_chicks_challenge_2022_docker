import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import logo from "../assets/img/logo-large.svg";
import '../assets/css/Footer.css'
import starts from "../assets/img/5-star.svg";

const Footer = () => {
    return (
        <div className={'background-footer'}>
            <div className='container-main-page'>
                <Container>
                    <Row>
                        <Col>
                            <div>
                                <img className={'logo'}
                                     height={31}
                                     src={logo} alt='logo'/>
                            </div>
                            <div className={'item-footer'}>support@chicksgold.com</div>
                        </Col>
                        <Col>
                            <div className={'item-footer-text-title'}>
                                <b>Chicks Gold</b>
                                <div className={'box-item-footer-text'}>
                                    <div className={'item-footer-text'}>Games</div>
                                    <div className={'item-footer-text'}>About Us</div>
                                    <div className={'item-footer-text'}>Blog</div>
                                    <div className={'item-footer-text'}>Sitemap</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={'item-footer-text-title'}>
                                <b>Support</b>
                                <div className={'box-item-footer-text'}>
                                    <div className={'item-footer-text'}>Contact Us</div>
                                    <div className={'item-footer-text'}>FAQ</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className={'item-footer-text-title'}>
                                <b>Legal</b>
                                <div className={'box-item-footer-text'}>
                                    <div className={'item-footer-text'}>Privacy Policy</div>
                                    <div className={'item-footer-text'}>Terms of Service</div>
                                    <div className={'item-footer-text'}>Copyright Policy</div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={3}>
                            <img src={starts} alt={'starts'} className={'img-starts'}/>
                            <span className={'item-footer-text'}>
                                Trustpilot Reviews
                            </span>
                        </Col>
                    </Row>
                </Container>
                <div className={'item-footer-text copy-right'}>
                    © 2017 - 2020 Chicksgold.com. All Rights Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer