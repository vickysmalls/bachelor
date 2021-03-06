import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import useFetch from "../useFetch";

const VelgStudierettning = ({
  setStudieRetning,
  valgtObligFag,
  setValgtObligFag,
  fagNavnStudierettning,
  setFagNavnStudierettning,
}) => {
  //setter masterfag tabellen til masterFag
  const { data: masterFag, error, isPending } = useFetch(
    `https://api.fagvalget.no/api/masterfag/`
  );

  //Sette farge valgt semester
  const [activeButton, setActiveButton] = useState();

  const onSideBtnClick = (e) => {
    setActiveButton(e.id);
    //alert(e.id);
  };

 

  return (
    <>
      <div class="row">
        <div class="column" id="Hundre">
          <h5>Trykk på undervisningsfaget du studerer i de tre første semestrene </h5>
          <div className='masterfag'>
            {
              isPending && <div>Loading...</div>
            }
            {
              error && <div>{error}</div>
            }
            {masterFag &&
              masterFag.map((fag) => {
                const className = activeButton === fag.id ? "red" : "";

                return (
                  //om klasseId er det samme som answer (klassetrinn id) fra KlasseList =>

                  fag.id === 15 || fag.id === 16 || fag.id === 17 ? (
                    <>
                      
                        <CustomButton
                          inverted={className}
                          key={fag.id}
                          options={fag}
                          activeButton={activeButton}
                          onClick={() => {
                            setStudieRetning(fag.id);
                            setValgtObligFag(fag.id);
                            onSideBtnClick(fag);
                            setFagNavnStudierettning(fag.fagnavn);
                          }}
                        >
                          {fag.fagnavn}
                        </CustomButton>
                      
                    </>
                  ) : null
                );
              })}
              </div>
        </div>
      </div>
    </>
  );
};

export default VelgStudierettning;
