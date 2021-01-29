import React, {useState} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import KlasseList from '../VelgKlasse/KlasseList';
import FagCard from '../fag-card/oblig-fag-card';
import SingelKlasse from '../VelgKlasse/SingleKlasse';


const VelgMaster = (props) => {

    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:9000/klasser/');
    //const [answer, setAnswer] = useState(options);
    const [answer, setAnswer] = useState();
    const [single, setSingle] = useState();
    

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
        <div className='card-container'>
            
            
              
            {
                klassetrinn && 
                klassetrinn.map((klasse) =>(
                    klasse.masterFag.map((oblig)=>(
                    <CustomButton 
                        key={oblig.id}
                        options={oblig.fag}
                        onClick={() =>{
                            //setAnswer([klasse])
                            //selected(oblig)
                            handleClick(oblig)
                            setAnswer(oblig)
                            //answer1(oblig.id)
                        }}
                        >
                         {oblig.fag}
                    </CustomButton>
                    ))
                    
                ))
          
            }
 
        </div>
        <div className="ny">
        {
            <SingelKlasse options={answer}></SingelKlasse>
        }
        </div>
        </div>
        
        
     );
};
export default VelgMaster;
