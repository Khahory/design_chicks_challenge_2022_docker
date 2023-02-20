import SelectForm from "../Form/SelectForm";
import InputForm from "../Form/InputForm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

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
                        <SelectForm options={options_game}/>
                    </Col>
                    <Col xs={6} >
                        <InputForm
                            label="Search"
                            name="search"
                            type="text"
                            value=""
                            onChange={() => {}}
                            error=""
                        />
                    </Col>
                    <Col>
                        <SelectForm options={options_price}/>
                    </Col>
                    <Col>
                        <SelectForm options={options_item_type}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ItemFilterList