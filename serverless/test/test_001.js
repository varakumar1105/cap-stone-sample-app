let chai = require("chai");
let chaiHttp = require("chai-http");

let server = require("../server/index");
chai.should();
chai.use(chaiHttp);

describe("Persons APIS", () => {

  describe("POST /person", () => {
    const personDetails = {
      id: Math.floor(Math.random() * (1000000 - 999 + 1) + 999),
      name: "VaraKumar",
      phone: "9999999999",
    };
    it("it should create a new person", (done) => {
      chai
        .request(server)
        .post("/person")
        .send(personDetails)
        .end((err, response) => {
          response.text.should.equal('"Created Person Successfully"');
          done();
        });
    });
  });

  describe("GET /persons", () => {
    it("it should get list of persons", (done) => {
      chai
        .request(server)
        .get("/persons")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.have.a("array");
          done();
        });
    });
  });

});