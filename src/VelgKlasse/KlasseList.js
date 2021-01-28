import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FagCard from "../fag-card/oblig-fag-card";
import ObligFag from "../oblig-fag/oblig-fag";
import useFetch from "../useFetch";

const KlasseList = ({options, selected}) => {

    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:9000/klasser/');
    //const [answer, setAnswer] = useState(options);
    
    

    return ( 
        <div className="klasse-list">
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
                        selected(klasse)
                    }}
                    >
                    Grunnskolelærer {klasse.klassetrinn} trinn
                    </CustomButton>
                ))
                
                
            }
            
        </div>
     );
}
 
export default KlasseList;