import { useState, useEffect } from "react";

import { MainContainer, Heading, Paragraph } from "./styledComponents";

const PersonsDetails = () => {
  const [personsData, setPersonsData] = useState([]);
  const getPersonsData = async () => {
    const url = `http://localhost:3006/persons`;
    const response = await fetch(url);
    const responseData = await response.json();
    console.log(responseData);
    setPersonsData(responseData);
  };

  useEffect(() => {
    setPersonsData(getPersonsData());
  }, []);

  return (
    <MainContainer>
      <Heading>Person Details</Heading>
      <div>
        {personsData.length &&
          personsData.map((eachPerson) => <h1>{eachPerson.name}</h1>)}
      </div>
    </MainContainer>
  );
};

export default PersonsDetails;
