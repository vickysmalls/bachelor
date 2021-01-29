import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';
import VelgMuligheter from '../VelgMuligheter/VelgMuligheter';

const SemesterList = () => {

    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    //const [answer, setAnswer] = useState(options);
    const [answer, setAnswer] = useState();
    

    

    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

    return (
        <div>
        <h2>Obliatoriske fag</h2>
        
        {
            isPending && <div>Loading...</div>
        }
        {
            error && <div>{error}</div>
        }
        {
            //Viser de obliatoriske fagene
            klassetrinn && 
            klassetrinn.map((klasse) =>(
                <div className="card-container">
                    <CustomButton 
                    key={klasse.id}
                    options={klasse}
                    onClick={() =>{
                        //setAnswer([klasse])
                        
                        handleClick((klasse))
                        
                        setAnswer(klasse)
                    }}
                    >
                    {klasse.fagnavn}
                    </CustomButton>
                    </div>
            ))
        }
        {
           
        }
        
          
        
        </div>
        
      );
}
 
export default SemesterList;