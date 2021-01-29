import { useState  } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FagCard from "../fag-card/oblig-fag-card";
import ObligFag from "../oblig-fag/oblig-fag";
import useFetch from "../useFetch";
import VelgMaster from "../VelgMaster/VelgMaster";


const KlasseList = ({id}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:9000/klasser/');
    const [answer, setAnswer] = useState(klassetrinn);
     
    
    
    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        console.log(e);
        
    }

    //logger tabellen av svaret fra klassetrinn
    function computeAnswer (answer){
    
        if(answer==='1-7'){
            this.setState({
              valgtTrinn: this.state.valgteFag
              
            });
        }
        
        
        console.log(answer);
    }
    

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
                        computeAnswer(klasse)
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