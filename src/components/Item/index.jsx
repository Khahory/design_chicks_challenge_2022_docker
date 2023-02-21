import ItemList from "./ItemList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SelectForm from "../Form/SelectForm";
import btn_sort from "../../assets/img/buttons/btn_sort.png";
import icon_arrow_white from "../../assets/icons/arrow-white.svg";
import '../../assets/css/Item/index.css'

const Item = ({items}) => {
    const options_sort = [
        {value: "by_default", label: "Featured"},
        {value: "by_name", label: "Name"},
        {value: "by_date", label: "Date"},
    ];

    return (
        <div>
            {/*filter*/}
            <Row>
                <Col>
                    <h1 className={'item-footer-text'}>Showing 20 - from 125</h1>
                </Col>
                <Col>
                    <div
                        style={{paddingLeft: '14px', paddingRight: '14px', marginRight: '9px'}}
                        className={'my-select-group-background aling-col-right'}>
                        <SelectForm
                            options={options_sort}
                            start_img={btn_sort}
                            end_img={icon_arrow_white}
                            label={'Sort by'}
                        />
                    </div>
                </Col>
            </Row>

            {/*item list*/}
            <ItemList items={items}/>
        </div>
    );
}

export default Item;