import ObligFagSemester from "../oblig-fag/oblig-fag-semester";
import Muligheter from "./Muligheter";
import ValgtMulighet from "./ValgtMulighet";
import Print from "../Print/Print";
import useWindowSize from '../useWindowSize';
import React, { useState } from "react";

const Resultat = ({
  answer,
  klassetrinn,
  sorted,
  activeButton,
  muligheterId1,
  muligheterId2,
  muligheterId3,
  masterId,
  semesterList7,
  mulighetTull,
  fagNavn,
  setMessages,
  messages,
  valg7Master,
  semesterList9,
  activeButton10,
  activeButton9,
  activeButton2,
  activeButton4,
}) => {
  const [tom, setTom] = useState();

  const [width, height] = useWindowSize();
  console.log(width);

  console.log("activeButton2", activeButton2);
  return (
    <>
      <div className="row" id="printId">
        <div className="column" id="PrintRad">
          <h3>Oppsummering av studieløp</h3>
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 1</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                <ObligFagSemester semester={1} answer={answer} />
              </div>
            </div>

            <div className="Forti">
              <h5>Semester 2</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
              <div className="fag">
                <ObligFagSemester semester={2} answer={answer} />
              </div>
            </div>
          </div>
        </div>

        <div className="column" id="PrintRad">
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 3</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                <ObligFagSemester semester={3} answer={answer} />
              </div>
            </div>

            <div className="Forti">
              <h5>Semester 4</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>

              <div className="fag">
                {
                  //sjekker om id err norsk matte engelsk eller pedagogikk
                  masterId === 1 ||
                  masterId === 2 ||
                  //masterId === 4 ||
                  masterId === 3 ||
                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  masterId === 15 ||
                  masterId === 16 ||
                  masterId === 17 ||
                  masterId === 25 ||
                  masterId === 26 ||
                  masterId === 27 ? (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={4}
                      masterId={muligheterId1}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  ) : (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={4}
                      masterId={masterId}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="column" id="PrintRad">
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 5</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  //sjekker om noe er pedagogikk

                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  masterId === 25 ||
                  masterId === 26 ||
                  masterId === 27 ? (
                    <ValgtMulighet
                      klassetrinn={klassetrinn}
                      muligheterId={activeButton}
                    ></ValgtMulighet>
                  ) : //om deet er begynner
                  masterId === 3 ? (
                    <ValgtMulighet
                      klassetrinn={klassetrinn}
                      muligheterId={activeButton4}
                    ></ValgtMulighet>
                  ) : (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={5}
                      masterId={masterId}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  )
                }
              </div>
            </div>

            <div className="Forti">
              <h5>Semester 6</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  //sjeekker om noe er pedagogikk
                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  masterId === 25 ||
                  masterId === 26 ||
                  masterId === 27 ? (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={6}
                      masterId={masterId}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  ) : (
                    <ValgtMulighet
                      klassetrinn={klassetrinn}
                      muligheterId={activeButton2}
                    ></ValgtMulighet>
                  )
                }
              </div>
            </div>
          </div>
        </div>

        <div className="column" id="PrintRad">
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 7</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/

                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  answer === 2 ? (
                    <ValgtMulighet
                      klassetrinn={klassetrinn}
                      muligheterId={semesterList7}
                    ></ValgtMulighet>
                  ) : (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={7}
                      masterId={valg7Master}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  )
                }

                <ObligFagSemester semester={7} answer={answer} />
              </div>
            </div>

            <div className="Forti">
              <h5>Semester 8</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  /*
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  answer === 2 ? (
                    <Muligheter
                      setActiveButton={setTom}
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={8}
                      masterId={valg7Master}
                    />
                  ) : (
                    <Muligheter
                      klassetrinn={klassetrinn}
                      sorted={sorted}
                      semester={8}
                      masterId={valg7Master}
                      setActiveButton={setTom}
                      setConditionalSem9={setTom}
                      activeButton={tom}
                      setIstrue={setTom}
                      setValg7Master={setTom}
                      setSemesterList7={setTom}
                    />
                  )
                }
                <ObligFagSemester semester={8} answer={answer} />
              </div>
            </div>
          </div>
        </div>

        <div className="column" id="PrintRad">
          <div className="obligatoriske semestre">
            <div classname="Seksti">
              <h5>Semester 9</h5>
              <p id="SemesterBeskrivelse">Høstsemester, 30 studiepoeng</p>
              <div className="fag">
                {
                  /*
              kommentert ut var tidligeere, beholder i tilfelle ny løsmninng er bug
            masterId === 12 || masterId === 13 || masterId === 14 || masterId === 15 || masterId === 16 || masterId === 17 || masterId === 18 || masterId === 19 || masterId === 20 || masterId === 21 || masterId === 22 || masterId === 23 || masterId === 24 || masterId === 25 || masterId === 26 || masterId === 27*/
                  masterId === 12 ||
                  masterId === 13 ||
                  masterId === 14 ||
                  answer === 2 ? (
                    <React.Fragment>
                      <ValgtMulighet
                        klassetrinn={klassetrinn}
                        muligheterId={semesterList9}
                      />
                      <ValgtMulighet
                        klassetrinn={klassetrinn}
                        muligheterId={activeButton9}
                      ></ValgtMulighet>
                    </React.Fragment>
                  ) : (
                    //annen måte
                    <ValgtMulighet
                      klassetrinn={klassetrinn}
                      muligheterId={activeButton9}
                    ></ValgtMulighet>
                  )
                }

                <ObligFagSemester semester={9} answer={answer} />
              </div>
            </div>
              
            <div className="Forti">
              <h5>Semester 10</h5>
              <p id="SemesterBeskrivelse">Vårsemester, 30 studiepoeng</p>
              <div className="fag">
                {/*  <Muligheter
              klassetrinn={klassetrinn}
              answer={answer}
              sorted={sorted}
              semester={10}
              masterId={semesterList7}
            /> */}
                {
                  //annen måte
                  <ValgtMulighet
                    klassetrinn={klassetrinn}
                    muligheterId={activeButton10}
                  ></ValgtMulighet>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      {
       width > 1024 ?
        <div className="column" id="PrintRad">
        <h5 id="PDFknapp">Lagre studieløpet ditt:</h5>
        <p id="AarBeskrivelse">
          Du har nå gjennomført hele veilederen, og kan lagre opplysningene som
          PDF
        </p>
        <div classname="Seksti">
          <Print />
        </div>
      </div> 
     :
     null
      }
      
    </>
  );
};

export default Resultat;
