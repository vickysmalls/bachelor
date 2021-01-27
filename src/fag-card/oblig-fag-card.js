import CustomButton from '../CustomButton/CustomButton';
import './fag-card.css';
import useFetch from '../useFetch';
import ObligFag from '../oblig-fag/oblig-fag';
import {fetchWrapper} from '../fetch-wrapper';
import {useState, useEffect} from 'react';




const FagCard = () => {

    const [answer, setAnswer] = useState(null);
    

    const {data: obligFags, isPending, error} = useFetch('http://localhost:9000/klasser/');

    const computeAnswer = (answer) =>{
        if(answer){
            this.setState({
                valgteFag: this.state.valgteFag + 1
                
            });
            console.log(answer);
        }
        
    }

    return (
        <div>
        {
            isPending && <div>Loading...</div>
        }
        {
            error && <div>{error}</div>
        }
        {
            //Viser de obliatoriske fagene
            obligFags && 
                obligFags.map(({klassetrinn, obligFag, fag, i}) =>(
                    <div className = 'card-container' key={i}>
                        <h1>{klassetrinn}</h1>
                        
                        {
                            
                            obligFag.map((oblig) => 
                            <CustomButton 
                            key={oblig.id}
                            options={oblig}
                            >
                            {oblig.fag}
                            </CustomButton>)
                        }
                        

                        <p>{fag}</p>
                    </div>
                ))
        }
          
        </div>
      );
    };


 
export default FagCard;