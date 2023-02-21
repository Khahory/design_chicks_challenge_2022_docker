import '../../assets/css/Item/Pagination.css'

const Pagination = () => {

    return (
        <div className={'my-pagination-container'}>
            <ul className={'my-pagination'}>
                <li className={'backgroud-color-pagination my-pagination-item'}>1</li>
                <li className={'my-pagination-item'}>2</li>
                <li className={'my-pagination-item'}>3</li>
                <li className={'my-pagination-item'}>4</li>
                <li className={'my-pagination-item'}>...</li>
                <li className={'my-pagination-item'}>11</li>
            </ul>
        </div>
    )
}

export default Pagination;