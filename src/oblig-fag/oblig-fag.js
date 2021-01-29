import {useState} from 'react';
import CustomButton from '../CustomButton/CustomButton';

//Brukes ikke
const ObligFag = ({options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return(
        <div className='obligfag'>
            <h2 variant="title">Velg Master</h2>
             <div className='buttons'>
             {
                answer.map((text, index) =>(
                    <CustomButton 
                    key ={index}
                    onClick={() =>{
                        setAnswer([text]);
                        selected(text)
                    }}>
                    {text}
                    </CustomButton> 
                ) 
                    
                )
            }
            
             
             </div>   
            
        </div>
    );
}
 
export default ObligFag;