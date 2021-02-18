import './Popup.css';
import {FaRegWindowClose} from 'react-icons/fa';

function Popup(props) {
    return (props.trigger) ?(
        <div className='popup'>
            <div className="popup-inner">
                <button>
                    <FaRegWindowClose size='1.5em' className="close-btn" onClick={() => props.setTrigger(false)}/>
                </button>
                {props.children}
            </div>
        </div>
    ) : '';
}

export default Popup
