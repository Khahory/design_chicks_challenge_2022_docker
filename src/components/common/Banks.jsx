import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../../assets/css/bank.css';
import bank_visa from "../../assets/img/bank/visa.svg";
import bank_mastercard from "../../assets/img/bank/mastercard.svg";
import bank_amex from "../../assets/img/bank/amex.svg";
import bank_skrill from "../../assets/img/bank/skrill.svg";
import bank_crypto from "../../assets/img/bank/crypto.svg";
import Container from "react-bootstrap/Container";

const Banks = () => {
    const col_xs = 1;

    return (
        <div className={'background-bank'}>
            <div className='container-main-page'>
                <Container>
                    <Row>
                        <Col xs={col_xs}>
                            <img src={bank_visa} alt="bank_visa"/>
                        </Col>
                        <Col xs={col_xs}>
                            <img src={bank_mastercard} alt='bank_mastercard'/>
                        </Col>
                        <Col xs={col_xs}>
                            <img src={bank_amex} alt='bank_amex'/>
                        </Col>
                        <Col xs={col_xs}>
                            <img src={bank_skrill} alt='bank_skrill'/>
                        </Col>
                        <Col xs={col_xs}>
                            <img src={bank_crypto} alt='bank_crypto'/>
                        </Col>
                        <Col id='label-more' xs={2}>
                            <span>and 50+ more</span>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Banks