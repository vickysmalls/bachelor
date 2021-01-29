import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";


const KlasseList = ({id}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:5000/api/klasser');
    const [answer, setAnswer] = useState(klassetrinn);
     
    
    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
        
    }
    
    return ( 
        
        <div className="klasse-list">
        <h2>Velg Klassetrinn</h2>
            {
                isPending && <div>Loading...</div>
            }
            {
                error && <div>{error}</div>
            }
            {
                klassetrinn && 
                klassetrinn.map((klasse) =>(
                    <CustomButton 
                    key={klasse.id}
                    options={klasse}
                    onClick={() =>{
                        //setAnswer([klasse])
                        
                        //selected(klasse)
                        handleClick((klasse))
                        
                        setAnswer(klasse)
                    }}
                    >
                    Grunnskolelærer {klasse.klassetrinn} trinn
                    </CustomButton>
                    

                    
                ))
                
                
            }
            {
                <VelgMaster answer={answer}/>
            }
            

           
            
        </div>
     );
}
 
export default KlasseList;