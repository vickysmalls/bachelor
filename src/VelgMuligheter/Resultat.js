import ObligFagSemester from "../oblig-fag/oblig-fag-semester";
import Muligheter from "./Muligheter";
import ValgtMulighet from "./ValgtMulighet";
import Print from "../Print/Print";

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
}) => {
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
            <Muligheter
              klassetrinn={klassetrinn}
              sorted={sorted}
              semester={4}
              masterId={activeButton}
            />
            {
              <ValgtMulighet
                klassetrinn={klassetrinn}
                muligheterId={muligheterId1}
              ></ValgtMulighet>
            }
          </div>
        </div>
        <div className="card-container">
          <h1>semester 5</h1>
          <div className="semester">
            <Muligheter
              klassetrinn={klassetrinn}
              sorted={sorted}
              semester={5}
              masterId={activeButton}
            />
            {
              <ValgtMulighet
                klassetrinn={klassetrinn}
                muligheterId={muligheterId2}
              ></ValgtMulighet>
            }
          </div>
        </div>
        <div className="card-container">
          <h1>semester 6</h1>
          <div className="semester">
            <Muligheter
              klassetrinn={klassetrinn}
              sorted={sorted}
              semester={6}
              masterId={activeButton}
            />
            {
              <ValgtMulighet
                klassetrinn={klassetrinn}
                muligheterId={muligheterId3}
              ></ValgtMulighet>
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
              masterId={masterId}
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
