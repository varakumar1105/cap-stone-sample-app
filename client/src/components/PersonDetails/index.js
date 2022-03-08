import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <>
      <p>{individualDetails.id}</p>
      <p>{individualDetails.name}</p>
      <p>{individualDetails.phone}</p>
    </>
  );
};

export default PersonDetails;
