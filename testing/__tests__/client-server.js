const request = require("supertest");

const baseUrl = "http://localhost:4000/";

const personDetails = {
  id: Math.floor(Math.random() * (1000000 - 999 + 1) + 999),
  name: "Raju",
  phone: "998876",
};

describe("Persons endpoints", () => {
  it("should return and get the data from the db", async () => {
    await request(baseUrl).post("person").send(personDetails);
    const response = await request(baseUrl).get(`persons`);
    expect(response.statusCode).toBe(200);
  })
})
