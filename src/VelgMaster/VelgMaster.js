import React, {useState} from 'react'
import './VelgMaster.css';
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import SingelKlasse from '../VelgKlasse/SingleKlasse';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';


const VelgMaster = (props) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/masterfag/`);
    const [obj, setObj] = useState();
    const [answer, setAnswer] = useState();
    
    
   
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
                        //key={oblig.klasseId}
                        options={oblig}
                        onClick={() =>{
                            //setAnswer([klasse])
                            //selected(oblig)
                            handleClick(oblig)
                            setAnswer(oblig.id)
                            setObj(oblig)
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
            <VelgMuligheter obj={obj} answer={answer}/>
            //<h1>{props.answer}</h1>
        }
        </div>
        </div>
        
        
     );
};
export default VelgMaster;
