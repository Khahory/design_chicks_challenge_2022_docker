import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import social_facebook from "../../assets/img/social/facebook.svg";
import social_instagram from "../../assets/img/social/instagram.svg";
import social_twitter from "../../assets/img/social/twitter.svg";
import social_discord from "../../assets/img/social/discord.svg";

const SocialMedia = () => {
    const col_xs = 1;

    return (
        <div className={'background-social'}>
            <div className='container-main-page'>
                <Row>
                    <Col xs="auto">
                        <img src={social_facebook} alt="social_facebook"/>
                    </Col>
                    <Col xs="auto">
                        <img src={social_instagram} alt="social_instagram"/>
                    </Col>
                    <Col xs="auto">
                        <img src={social_twitter} alt="social_twitter"/>
                    </Col>
                    <Col xs="auto">
                        <img src={social_discord} alt="social_discord"/>
                    </Col>
                </Row>
                <br/>
                <hr />
            </div>
        </div>
    )
}

export default SocialMedia