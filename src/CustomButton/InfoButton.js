const { AiFillQuestionCircle } = require("react-icons/ai")

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
            <AiFillQuestionCircle size='2em'/>
        </button>
               
     );
}
 
export default InfoButton;