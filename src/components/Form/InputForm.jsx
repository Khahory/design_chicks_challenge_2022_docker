import '../../assets/css/input.css';
import btn_type from '../../assets/img/buttons/btn_item_type.png';

const InputForm = ({label, name, type, value, onChange, error}) => {
    return (
        <div>
            <div className={'my-input-group-background'}>
                <div className={'my-input-group'}>
                    <span className="input-group-prepend">
                        <img className={'img-input'} height={23} src={btn_type} alt={'btn_type'}/>
                    </span>
                    <input
                        placeholder={label}
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={onChange}
                        className="my-form-control"
                    />
                    <span className="input-group-append"></span>
                </div>
            </div>

            {error && <div>{error}</div>}
        </div>
    );
}

export default InputForm;