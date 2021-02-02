import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import ObligFag from '../oblig-fag/oblig-fag';
import ObligFagCard from '../oblig-fag/oblig-fag-card';
import Semester5 from '../Semester/Semester5';
import useFetch from '../useFetch';
import Muligheter from './Muligheter';



const VelgMuligheter = ({obj, masterId, semester}) => {

    
    const {data: klassetrinn, error, isPending} = useFetch(`http://localhost:5000/api/muligheter/`);
    //const [answer, setAnswer] = useState();
    //const [mulighetId, setMulighetId] = useState();
    const [semesterId, setSemesterId] = useState();

    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }
    
    

    return ( 
        <div>
        <h2>muligheter</h2>
        <div className="fag-card">
        
        </div>

        <div className='card-container'>
        <h3>Semester 4</h3>
            {
                //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
                <Muligheter semester={4} masterId={masterId}/>

            }

        </div>
        <div className='card-container'>
        <h3>Semester 5</h3>
            {
                //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
                <Muligheter semester={5} masterId={masterId}/>

            }

        </div>

        <div className='card-container'>
        <h3>Semester 6</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={6} masterId={masterId}/>
            

        }
        </div>

        <div className='card-container'>
        <h3>Semester 7</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={7} masterId={masterId}/>
            

        }
        </div>
        
        <div className='card-container'>
        <h3>Semester 8</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={8} masterId={masterId}/>
            

        }
        
        </div>

        <div className='card-container'>
        <h3>Semester 9</h3>
        {
            //Viser veien til master, basert på gitt semeseter og på svaret (masterId)
            <Muligheter semester={9} masterId={masterId}/>
            

        }

        </div>

        <div className='card-container'>
        <h3>Semester 5, alle fag</h3>
        {
            <Semester5 semester={5}/>
        }
        </div>
        </div>
        
        
     );
};
export default VelgMuligheter;
