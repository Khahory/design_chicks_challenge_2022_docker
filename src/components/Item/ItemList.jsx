import Card from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({items}) => {
    return (
        <div>
            <Row>
                <Col>
                    <Card item={items.items[0]}/>
                </Col>
                <Col>
                    <Card item={items.items[0]}/>
                </Col>
                <Col>
                    <Card item={items.items[0]}/>
                </Col>
                <Col>
                    <Card item={items.items[0]}/>
                </Col>
                <Col>
                    <Card item={items.items[0]}/>
                </Col>
            </Row>
            <pre>
                {JSON.stringify(items, null, 2)}
            </pre>
        </div>
    );
}

export default ItemList;