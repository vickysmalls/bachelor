import CustomButton from '../CustomButton/CustomButton';
import './fag-card.css';
import useFetch from '../useFetch';
import {useState, useEffect} from 'react';




const FagCard = () => {

    const [answer, setAnswer] = useState(null);
    

    const {data: obligFags, isPending, error} = useFetch('http://localhost:5000/api/obligfag/');

    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

    return (
        <div>
        <h2>Obliatoriske fag</h2>
        <div className="card-container">
        {
            isPending && <div>Loading...</div>
        }
        {
            error && <div>{error}</div>
        }
        {
            //Viser de obliatoriske fagene
            obligFags && 
            obligFags.map((klasse) =>(

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
            ))
        }
        {
            
        }
        
          
        </div>
        </div>
        
      );
    };


 
export default FagCard;