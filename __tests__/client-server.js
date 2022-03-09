const request = require("supertest");

const baseUrl = "http://localhost:3006/";

const personDetails = {
  id: Math.floor(Math.random() * (1000000 - 999 + 1) + 999),
  name: "tester",
  phone: "998876",
};

describe("Persons endpoints", () => {
  it("should return and get the data from the db", async () => {
    await request(baseUrl).post("person").send(personDetails);
    const response = await request(baseUrl).get(`person/${personDetails.id}`);
    expect(response.body).toMatchObject({
      id: personDetails.id,
      name: "tester",
      phone: "998876",
    });
  });
});
