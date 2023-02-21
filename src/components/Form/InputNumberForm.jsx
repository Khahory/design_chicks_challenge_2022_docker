import '../../assets/css/input.css';
import '../../assets/css/Item/index.css';
import icon_arrow from '../../assets/icons/arrow-white.svg';

const InputNumberForm = ({label, name, type, value, onChange, error}) => {
    return (
        <div>
            <div className={'my-input-group-background'}>
                <div className={'my-input-group'}>
                    <span className="input-group-prepend"></span>
                    <input
                        placeholder={label}
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChange={(e) => onChange(e)}
                        className="my-form-control"
                    />
                    <span className="input-group-append">
                        <div style={{marginTop: '7px'}}>
                            <img style={{
                                transform: 'rotate(180deg)'
                            }} className={'img-input img-icon-input-number'} height={10} src={icon_arrow} alt={'icon_arrow'}/>
                        </div>
                        <div>
                            <img style={{
                                transform: 'rotate(0deg)',
                                paddingTop: '0'
                            }} className={'img-input img-icon-input-number'} height={10} src={icon_arrow} alt={'icon_arrow'}/>
                        </div>
                    </span>
                </div>
            </div>

            {error && <div>{error}</div>}
        </div>
    );
}

export default InputNumberForm;