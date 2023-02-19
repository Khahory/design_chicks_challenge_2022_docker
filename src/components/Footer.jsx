import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/img/logo-large.svg";
import '../assets/css/Footer.css'

const Footer = () => {
    return (
        <div className={'background-footer'}>
            <div className='container-main-page'>
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
                        <div className={'item-footer-text'}><b>Chicks Gold</b></div>
                        <div className={'item-footer-text'}><b>Games</b></div>
                        <div className={'item-footer-text'}><b>About Us</b></div>
                        <div className={'item-footer-text'}><b>Blog</b></div>
                        <div className={'item-footer-text'}><b>Sitemap</b></div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </div>
        </div>
    )
}

export default Footer