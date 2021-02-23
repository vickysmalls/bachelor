import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import  Modal  from '../Modal/Modal';
import InfoButton from '../CustomButton/InfoButton';




const Muligheter = ({masterId, semester, klassetrinn, sorted}) => {

    
    //logger ved trykk
    function handleClick(e) {
        console.log('The link was clicked.');
        
        console.log(e);
        
    }

    const [fagnavn, setFagnavn] = useState();
    //const [semester, setSemester] = useState();
    const [emnekode, setEmneKode] = useState();
    const [studiepoeng, setStudiepoeng] = useState();
    const [klasseId ,setKlasseId] = useState();
    const [isOpen, setIsOpen] = useState(false);


       
    return ( 
        
        
        <>
        <>

        {   
            klassetrinn&&
            
                sorted.map((oblig)=>(
                        
                        //om masterFagId (fra database) er det samme som masterId (hentet fra VelgMaster) 
                        oblig.masterFagId === masterId &&
                        oblig.semester === semester &&
                        <>
                        
                      
                            <CustomButton
                                //setter fargen på den valgte fagveien
                                style={{backgroundColor: 'red'}} 
                                key={oblig.id}
                                fag={oblig.fagnavn}
                                
                                onClick ={() =>{
                                    handleClick(oblig);   
                            }}>
                                {oblig.fagnavn}
                            </CustomButton>

                            <InfoButton 
                            onClick={() =>{ 
                                setIsOpen(true)
                                setFagnavn(oblig.fagnavn)
                                //setSemester(oblig.semester)
                                setEmneKode(oblig.emnekode)
                                setStudiepoeng(oblig.studiepoeng)
                                setKlasseId(oblig.klasseId)
                                
                            }}>
                            </InfoButton>
                            

                        </>
                        
                    ))
                }

                
                
        
        </>

            <Modal 
                open= {isOpen} 
                onClose={() => setIsOpen(false)}
            >
                <h3>Info om {fagnavn}</h3><br/>

                <ul>
                    <li>
                    Fagnavn: {fagnavn}
                    </li>
                    <li>
                    Emnekode: {emnekode}
                    </li>
                    <li>
                    Studiepoeng: {studiepoeng}
                    </li>
                    <li>
                    klassetrinn: {klasseId}
                    </li>
                </ul>
            </Modal>
       
      
        

               </>
               
               
             );
            

            };
           

export default Muligheter;

