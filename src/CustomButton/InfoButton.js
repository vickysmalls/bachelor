const { FaEnvelopeOpenText } = require("react-icons/fa")

const InfoButton = ({
    children,
    inverted,
    ...otherProps
}) => {
    return (
        <button
        className='infoknapp'
        {...otherProps}
        >
            <FaEnvelopeOpenText size='2em'/>
        </button>
               
     );
}
 
export default InfoButton;