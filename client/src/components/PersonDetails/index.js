import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { MainContainer, Heading, Paragraph } from "./styledComponents";

const PersonDetails = () => {
  const [individualDetails, setIndividualDetails] = useState({
    id: 0,
    name: "",
    phone: "",
  });
  const { id } = useParams();
  const getIndividualDetails = async () => {
    const url = `http://localhost:3006/person/${id}`;
    const response = await fetch(url);
    const responseData = await response.json();
    setIndividualDetails({
      id: responseData.id,
      name: responseData.name,
      phone: responseData.phone,
    });
  };

  useEffect(() => {
    getIndividualDetails();
  }, []);

  return (
    <MainContainer>
      <Heading>Person Details</Heading>
      <Paragraph>{individualDetails.id}</Paragraph>
      <Paragraph>{individualDetails.name}</Paragraph>
      <Paragraph>{individualDetails.phone}</Paragraph>
    </MainContainer>
  );
};

export default PersonDetails;
