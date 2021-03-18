import ObligFagSemester from "../oblig-fag/oblig-fag-semester";
import Muligheter from "./Muligheter";
import ValgtMulighet from "./ValgtMulighet";
import Print from "../Print/Print";
import Semester6Psyko from "../Semester/Semester6Psyko";
import Semester from "../Semester/Semester";

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
  messages

}) => {
  console.log('muligheterId3', muligheterId3);
  console.log('mulighetTull', mulighetTull);
  console.log('masterId', masterId);



  return (
    <div>
      <div classname="card-container" id="printId">
        <div className="card-container">
          <h1>semester 1</h1>
          <div className="semester">
            <ObligFagSemester semester={1} answer={answer} />
          </div>
        </div>

        <div className="card-container">
          <h1>semester 2</h1>
          <div className="semester">
            <ObligFagSemester semester={2} answer={answer} />
          </div>
        </div>
        <div className="card-container">
          <h1>semester 3</h1>
          <div className="semester">
            <ObligFagSemester semester={3} answer={answer} />
          </div>
        </div>
        <div className="card-container">
          <h1>semester 4</h1>
          
          <div className="semester">
          {masterId === 12 ||
            masterId=== 13|| 
            masterId=== 14 ||
            masterId=== 25 ||
            masterId=== 26 || 
            masterId=== 27 ? ( 
          <ValgtMulighet
            klassetrinn={klassetrinn}
            muligheterId={muligheterId1}
          ></ValgtMulighet>
          ): 
          masterId=== 1||
          masterId=== 2 ||
          masterId=== 3 ||
          masterId === 15 ||
          masterId ===16 ||
          masterId === 17 ?(
            //Byttet ut muligheter med ValgtMuligheter pga man vil ha hvilken knapp man trykket på
            //det andre er irrelevant fro norsk matte engelsk
            <ValgtMulighet
            klassetrinn={klassetrinn}
            muligheterId={muligheterId1}
          ></ValgtMulighet>
          ):(
            <Muligheter
            klassetrinn={klassetrinn}
            sorted={sorted}
            semester={4}
            masterId={masterId}
          />
          )
        
        }
            
          </div>
        </div>
        <div className="card-container">
          <h1>semester 5</h1>
          <div className="semester">
          {masterId === 12 ||
            masterId=== 13|| 
            masterId=== 14 ||
            masterId=== 25 ||
            masterId=== 26 || 
            masterId=== 27 ? ( 
          <ValgtMulighet
            klassetrinn={klassetrinn}
            muligheterId={muligheterId2}
          ></ValgtMulighet>
          ): 

          //tull med noe her
          masterId=== 1||
          masterId=== 2 ||
          masterId=== 3 ||
          masterId === 15 ||
          masterId ===16 ||
          masterId === 17 ?(
            //gjelder norsk matte engelsk
             <Muligheter
            klassetrinn={klassetrinn}
            sorted={sorted}
            semester={5}
            masterId={masterId}
          />
          ):

          (
           <Muligheter
              klassetrinn={klassetrinn}
              sorted={sorted}
              semester={5}
              masterId={mulighetTull}
            />
          )
        
        }
          </div>
        </div>
        <div className="card-container">
          <h1>semester 6</h1>
          <div className="semester">
          {masterId === 12 ||
            masterId=== 13|| 
            masterId=== 14 ||
            masterId=== 25 ||
            masterId=== 26 || 
            masterId=== 27 ? ( 
              <div>
              <ValgtMulighet
                klassetrinn={klassetrinn}
                muligheterId={muligheterId3}
              ></ValgtMulighet>
              <Muligheter
              klassetrinn={klassetrinn}
              sorted={sorted}
              semester={6}
              masterId={masterId}
            />
              </div>

          ): 
          
          masterId=== 1||
          masterId=== 2 ||
          masterId=== 3 ||
          masterId === 15 ||
          masterId ===16 ||
          masterId === 17 ?(

            //byttet ut muligheter med ValgtMuligheter
            <ValgtMulighet
            klassetrinn={klassetrinn}
            muligheterId={muligheterId3}
          ></ValgtMulighet>
            
          ):(
            <ValgtMulighet
            klassetrinn={klassetrinn}
            muligheterId={muligheterId3}
          ></ValgtMulighet>
          ) 
        
        }
          </div>
        </div>
        <div className="card-container">
          <h1>semester 7</h1>
          <div className="semester">
            {masterId === 12 ||
            masterId === 13 ||
            masterId === 14 ||
            masterId === 15 ||
            masterId === 16 ||
            masterId === 17 ||
            masterId === 18 ||
            masterId === 19 ||
            masterId === 20 ||
            masterId === 21 ||
            masterId === 22 ||
            masterId === 23 ||
            masterId === 24 ||
            masterId === 25 ||
            masterId === 26 ||
            masterId === 27 ? (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={7}
                masterId={semesterList7}
              />
            ) : (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={7}
                masterId={masterId}
              />
            )}

            <ObligFagSemester semester={7} answer={answer} />
          </div>
        </div>
        <div className="card-container">
          <h1>semester 8</h1>
          <div className="semester">
            {masterId === 12 ||
            masterId === 13 ||
            masterId === 14 ||
            masterId === 15 ||
            masterId === 16 ||
            masterId === 17 ||
            masterId === 18 ||
            masterId === 19 ||
            masterId === 20 ||
            masterId === 21 ||
            masterId === 22 ||
            masterId === 23 ||
            masterId === 24 ||
            masterId === 25 ||
            masterId === 26 ||
            masterId === 27 ? (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={8}
                masterId={semesterList7}
              />
            ) : (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={8}
                masterId={masterId}
              />
            )}
            <ObligFagSemester semester={8} answer={answer} />
          </div>
        </div>
        <div className="card-container">
          <h1>semester 9</h1>
          <div className="semester">
            {masterId === 12 ||
            masterId === 13 ||
            masterId === 14 ||
            masterId === 15 ||
            masterId === 16 ||
            masterId === 17 ||
            masterId === 18 ||
            masterId === 19 ||
            masterId === 20 ||
            masterId === 21 ||
            masterId === 22 ||
            masterId === 23 ||
            masterId === 24 ||
            masterId === 25 ||
            masterId === 26 ||
            masterId === 27 ? (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={9}
                masterId={semesterList7}
              />
            ) : (
              <Muligheter
                klassetrinn={klassetrinn}
                sorted={sorted}
                semester={9}
                masterId={masterId}
              />
            )}
            <ObligFagSemester semester={9} answer={answer} />
          </div>
        </div>

        <div className="card-container">
          <h1>semester 10</h1>
          <div className="semester">
            <Muligheter
              klassetrinn={klassetrinn}
              answer={answer}
              sorted={sorted}
              semester={10}
              masterId={semesterList7}
            />
          </div>
        </div>
      </div>

      <div className="card-container2">
        <h1>Lagre din vei til master</h1>
        <div className="print">
          <Print />
        </div>
      </div>
    </div>
  );
};

export default Resultat;
