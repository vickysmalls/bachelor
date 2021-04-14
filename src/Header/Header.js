import './Header.css';
import logo2 from './OsloMet logo for nett.png';
import logo3 from './LogoOsloMet.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return ( 
        
    
    <div className="row" id="header">
    <div className="column" id="OsloMetLogo">    
        <img src={logo3} alt="OslometLogo"/>
    </div>
    <div className="column" id="Forti"> 
        <h1>Gjør deg kjent med de ulike retningene ved lærerutdanningen på OsloMet!</h1>
    </div>
    </div>
    
    
      

    );
      
}
 
export default Header;