import React, {useState} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import SingelKlasse from '../VelgKlasse/SingleKlasse';


const VelgMaster = (props) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    //const [answer, setAnswer] = useState(options);
    //const [answer, setAnswer] = useState();
    const [loggedIn, isLoggedIn] = useState(false);

    function handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
    function  handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }
    

    //logger tabellen av svaret fra klassetrinn
    function computeAnswer (answer){
    
        if(answer){
            this.setState({
              valgtTrinn: this.state.valgteFag
              
            });
        }
        
        
        console.log(answer);
    }
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }
    

    return ( 
        <div>
        <h2>Velg Masteremne</h2>
        <div className='card-container'>

            {
                klassetrinn &&
                    klassetrinn.map((oblig)=>(
                        //om klasseId er det samme som answer fra KlasseList =>
                        oblig.klasseId ===props.answer &&
                    <CustomButton 
                        key={oblig.id}
                        options={oblig.fag}
                        onClick={() =>{
                            //setAnswer([klasse])
                            //selected(oblig)
                            handleClick(oblig)
                            //setAnswer(oblig)
                            //answer1(oblig.id)
                        }}
                        >
                         {oblig.fagnavn}
                    </CustomButton>
                    ))
                    
               
          
            }
            {
                

           
            }
 
        </div>
        <div className="ny">
        {
            <h1>{props.answer}</h1>
        }
        </div>
        </div>
        
        
     );
};
export default VelgMaster;
