import './CustomButton.css';
const CustomButton = ({
    children,
    inverted,
    ...otherProps
}) => {
    return (
        <button
        className={`${inverted ? 'inverted': ''} custom-button`}
        {...otherProps}
        >
        {children}
        </button>
               
     );
}
 
export default CustomButton;