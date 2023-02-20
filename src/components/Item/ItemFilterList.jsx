import SelectForm from "../Form/SelectForm";
import InputForm from "../Form/InputForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import btn_games from "../../assets/img/games/game_zelda.png";
import btn_price from "../../assets/img/buttons/btn_price.png";
import btn_item from "../../assets/img/buttons/btn_item_type.png";
import icon_arrow_white from "../../assets/icons/arrow-white.svg";

const ItemFilterList = () => {
    const options_game = [
        {value: "default", label: "Select a game"},
        {value: "botw", label: "The Legend of Zelda: Breath of the Wild"},
        {value: "ztp", label: "Zelda Twilight Princess"}
    ];

    const options_price = [
        {value: "default", label: "All"}
    ];

    const options_item_type = [
        {value: "default", label: "All"}
    ];

    return (
        <div className={'container-main-page'}>
            <Container>
                <Row>
                    <Col>
                        <SelectForm
                            options={options_game}
                            start_img={btn_games}
                            end_img={icon_arrow_white}
                        />
                    </Col>
                    <Col xs={5}>
                        <InputForm
                            label="Search"
                            name="search"
                            type="text"
                            value=""
                            onChange={() => {
                            }}
                            error=""
                        />
                    </Col>
                    <Col>
                        <div
                            className={'my-select-group-background'}
                            style={{
                                display: "flex",
                            }}>
                            <Container>
                                <Row>
                                    <Col className={'select-border-right'}>
                                        <SelectForm
                                            options={options_price}
                                            start_img={btn_price}
                                            end_img={icon_arrow_white}
                                        />
                                    </Col>
                                    <Col>
                                        <SelectForm
                                            options={options_item_type}
                                            start_img={btn_item}
                                            end_img={icon_arrow_white}
                                        />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemFilterList