import '../../assets/css/Item/Pagination.css'
import icon_arrow_left from '../../assets/icons/navigate_before_white.svg'
import icon_arrow_right from '../../assets/icons/navigate_next_white.svg'

const Pagination = () => {
    return (
        <div className={'my-pagination-container'}>
            <ul className={'my-pagination'}>
                <li className={'my-pagination-item-prev'}>
                    <img src={icon_arrow_left} height={20} alt={'prev'}/>
                </li>
                <li className={'backgroud-color-pagination my-pagination-item'}>1</li>
                <li className={'my-pagination-item'}>2</li>
                <li className={'my-pagination-item'}>3</li>
                <li className={'my-pagination-item'}>4</li>
                <li className={'my-pagination-item'}>...</li>
                <li className={'my-pagination-item'}>11</li>
                <li className={'my-pagination-item-next'}>
                    <img src={icon_arrow_right} height={20} alt={'next'}/>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;