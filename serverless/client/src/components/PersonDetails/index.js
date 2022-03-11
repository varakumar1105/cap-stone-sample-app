import { useState, useEffect } from "react"

import { MainContainer, Heading, Paragraph } from "./styledComponents"

const PersonDetails = () => {
  const [personsList, setPersonsList] = useState([])
  const getIndividualDetails = async () => {
    const url = `http://localhost:4000/persons/`
    const response = await fetch(url)
    const responseData = await response.json()
    const tempPersonsList = responseData.map((person) => {
      return {
        id: person.id,
        name: person.name,
        phone: person.phone,
      }
    })
    setPersonsList(tempPersonsList)
  }

  useEffect(() => {
    getIndividualDetails()
  }, [])

  return (
    <MainContainer>
      <Heading>Person Details</Heading>
      {personsList.map((eachPerson) => (
        <>
          <Paragraph>{eachPerson.id}</Paragraph>
          <Paragraph>{eachPerson.name}</Paragraph>
          <Paragraph>{eachPerson.phone}</Paragraph>
        </>
      ))}
    </MainContainer>
  )
}

export default PersonDetails
