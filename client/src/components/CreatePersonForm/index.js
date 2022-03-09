import { useState } from "react";

import {
  MainContainer,
  Form,
  Heading,
  Label,
  InputField,
  Button,
} from "./styledComponents";

const CreatePersonForm = () => {
  const [personDetails, setPersonDetails] = useState({
    id: null,
    name: "",
    phone: "",
  });

  const createperson = async () => {
    const url = "http://localhost:3006/person";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(personDetails),
    });
    const responseData = await response.json();
    return responseData;
  };

  const onSubmitpersonData = async (event) => {
    event.preventDefault();
    await createperson();
    setPersonDetails((personDetails) => ({
      ...personDetails,
      id: "",
      name: "",
      phone: "",
    }));
  };

  const onChangeId = (event) => {
    setPersonDetails((personDetails) => ({
      ...personDetails,
      id: event.target.value,
    }));
  };

  const onChangeName = (event) => {
    setPersonDetails((personDetails) => ({
      ...personDetails,
      name: event.target.value,
    }));
  };

  const onChangePhone = (event) => {
    setPersonDetails((personDetails) => ({
      ...personDetails,
      phone: event.target.value,
    }));
  };

  return (
    <MainContainer>
      <Heading>Fill the details</Heading>
      <Form onSubmit={onSubmitpersonData}>
        <Label For="personId">Person Id:</Label>
        <InputField
          type="number"
          id="personId"
          value={personDetails.id}
          onChange={onChangeId}
        />
        <br />
        <Label For="personName">Person Name:</Label>
        <InputField
          type="text"
          id="personName"
          value={personDetails.name}
          onChange={onChangeName}
        />
        <br />
        <Label For="personPhone">Person Phone:</Label>
        <InputField
          type="text"
          id="personPhone"
          value={personDetails.phone}
          onChange={onChangePhone}
        />
        <br />
        <Button type="submit">Create Person</Button>
      </Form>
    </MainContainer>
  );
};

export default CreatePersonForm;
