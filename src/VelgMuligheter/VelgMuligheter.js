import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import SemesterList from '../Semester/Semester';
import useFetch from '../useFetch';



const VelgMuligheter = (props) => {

    
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
        
        <div className='ca'>
        <h2>Muligheter</h2>
            {
                klassetrinn &&
                    klassetrinn.map((oblig)=>(
                        
                        //om masterFagId er det samme som answer fra KlasseList =>
                        oblig.masterFagId ===props.answer &&
                        <div className='card-container'>
                        
                            <CustomButton 
                                //key={oblig.masterFagId}
                                options={oblig.fagnavn}
                                onClick={() =>{
                                    //setAnswer([klasse])
                                    //selected(oblig)
                                    handleClick(oblig)
                                    setAnswer(oblig)
                                    //answer1(oblig.id)
                                }}
                                >
                                {oblig.fagnavn}
                            </CustomButton>
                        </div>))
                    
               
          
            }
            {
                

           
            }
 
        </div>
        <div className="ny">
        {
            
        }
        </div>
        </div>
        
        
     );
};
export default VelgMuligheter;
