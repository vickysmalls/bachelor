import React, {useState} from 'react'
import CustomButton from '../CustomButton/CustomButton';
import InfoButton from '../CustomButton/InfoButton';
import Modal from '../Modal/Modal';

const Semester = ({klasseId, semester, klassetrinn, setValgtFag}) => {
    
    
    //logger ved trykk
    function handleChange(ele) {
        setValgtFag(ele);
      }

    const [fagnavn, setFagnavn] = useState();
    const [emnekode, setEmneKode] = useState();
    const [studiepoeng, setStudiepoeng] = useState();
    
    const [isOpen, setIsOpen] = useState(false);
    
    return ( 
        
        
        <>
        
            {
                klassetrinn &&
                        klassetrinn.map((oblig)=>(
                            
                            //oblig.MasterFagId === masterId &&
                            //om semester = 5 vis semester og semeseter fag
                            oblig.semester === semester &&
                            oblig.klasseId === klasseId &&
                        
                            <>

                            
                            <InfoButton 
                            onClick={() =>{ 
                                setIsOpen(true)
                                setFagnavn(oblig.fagnavn)
                                //setSemester(oblig.semester)
                                setEmneKode(oblig.emnekode)
                                setStudiepoeng(oblig.studiepoeng)
                                //setKlasseId(oblig.klasseId)
                                
                            }}>

                            
                        </InfoButton>
                                

                            
                            
                                <CustomButton 
                                    key={oblig.id}
                                    semester={oblig.semester}
                                    klasseId = {oblig.klasseId}
                                    onClick = {() =>{
                                        handleChange(oblig.fagnavn)
                                        

                                    }}
                                >
                                    semester:{oblig.semester}, fag: 

                                    {oblig.fagnavn}
                                </CustomButton>
                               
                                          
                            </>
                ))
            }
            
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
}
 
export default Semester;