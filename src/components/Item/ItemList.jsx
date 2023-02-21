import Card from "./Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({items}) => {
    const list = items.items;

    // group items by 5
    const groupedData = [];
    for (let i = 0; i < list.length; i += 5) {
        groupedData.push(list.slice(i, i + 5));
    }


    return (
        <div style={{marginTop: '3%'}}>
            {groupedData.map((group, index) => (
                <Row key={index}>
                    {group.map((item, index) => (
                        <Col key={index}>
                            <Card item={item}/>
                        </Col>
                    ))}
                </Row>
            ))}
            <pre>
                {/*{JSON.stringify(items, null, 2)}*/}
            </pre>
        </div>
    );
}

export default ItemList;