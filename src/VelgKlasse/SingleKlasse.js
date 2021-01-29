import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import useFetch from '../useFetch';


const SingelKlasse = (props) => {
    const {data: klassetrinn, error, isPending} = useFetch('http://localhost:9000/klasser/');

    //const [answer, setAnswer] = useState();

    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

    return ( 
       <div className='card-container'>
       
       {
           <CustomButton></CustomButton>
        }
        
       </div>
     );
};

export default SingelKlasse;