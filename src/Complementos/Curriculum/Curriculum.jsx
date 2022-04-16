import English from "./img/en.png";
import Spanish from "./img/es.png";
import styled from "styled-components";

const Contenedor = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  height: 600px;
  clear: both;
  overflow: hidden;
`;

const FlagSpanish = styled.div`
  margin: 30px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 200px;
`;
const FlagEnglish = styled.div`
  margin: 30px auto;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 200px;
`;

const Flag = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  border: solid 1px white;
  cursor: pointer;
  :hover {
    box-shadow: 0px 0px 20px 5px rgba(224, 219, 219, 0.15);
  }
`;

export const Curriculum = () => {
  return (
    <>
      <Contenedor>
        <FlagEnglish>
          <h4
            style={{
              width: "250px",
              margin: " 10px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 1px",
              borderRadius: "10px",
            }}
          >
            Curriculum in English
          </h4>
          <a
            href="https://drive.google.com/file/d/1iKLQ8L3A6d5dE0dIESmeFi4i6NLX2jNW/view?usp=sharing"
            target="_blanck"
          >
            <Flag src={English} alt="english" />
          </a>
        </FlagEnglish>

        <FlagSpanish>
          <h4
            style={{
              width: "260px",
              margin: "10px auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-15px",
              border: "solid 1px",
              borderRadius: "10px",
            }}
          >
            Curriculum en Español
          </h4>
          <a
            href="https://drive.google.com/file/d/1pvTpWKhotcWqk-ko0XzmgV9W2HvcGtA4/view?usp=sharing"
            target="_blanck"
          >
            {" "}
            <Flag src={Spanish} alt="spanish" />
          </a>
        </FlagSpanish>
      </Contenedor>
    </>
  );
};
