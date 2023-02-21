import btn_type from "../../assets/img/buttons/btn_item_type.png";
import '../../assets/css/Select.css'

const SelectForm = ({options, start_img, end_img, label, ...props}) => {
    start_img = start_img ?? btn_type;
    end_img = end_img ?? btn_type;

    return (
        <div>
            <div>
                <div className={'my-input-group-background'}>
                    <div className={'my-input-group'}>
                        <span className="input-group-prepend">
                            <img className={'img-input'} height={23} src={start_img} alt={'btn_type'}/>
                        </span>
                        <div>
                            <span className={'my-select-label'}>{label}</span>
                            <select className={'my-select'} {...props}>
                                {options.map((option, index) => (
                                    <option key={index} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <span className="input-group-append">
                            <img className={'img-input'} height={7} src={end_img} alt={'btn_type'}/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectForm;