import Card from "./Card";

const ItemList = ({items}) => {
    return (
        <div>
            <Card item={items.items[0]} />
            <pre>
                {JSON.stringify(items, null, 2)}
            </pre>
        </div>
    );
}

export default ItemList;