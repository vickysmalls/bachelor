import './CustomButton.css';
const CustomButton = ({
    children,
    inverted,
    ...otherProps
}) => {
    return (
        <button
        className={`${inverted ? 'red': ''} custom-button`}
        {...otherProps}
        >
        {children}
        </button>
               
     );
}
 
export default CustomButton;