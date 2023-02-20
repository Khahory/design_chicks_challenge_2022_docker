const ItemList = ({items}) => {
    return (
        <div>
            <h1>Items list</h1>
            <pre>
                {JSON.stringify(items, null, 2)}
            </pre>
        </div>
    );
}

export default ItemList;