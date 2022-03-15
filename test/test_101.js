const playwright = require("playwright-aws-lambda");
let chai = require("chai");
const expect = chai.expect;
let chaiHttp = require("chai-http");
let server = require("../server/index");

chai.should();
chai.use(chaiHttp);

describe("Persons APIS", () => {
  describe("POST /person", () => {
    const personDetails = {
      id: Math.floor(Math.random() * (1000000 - 999 + 1) + 999),
      name: "tester",
      phone: "998876",
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
          console.log("testing");
          response.body.should.have.a("array");
          done();
        });
    });
  });
  describe("Persons data frontend", () => {
    let browser;
    let page;
    let context;
    before(async function () {
      browser = await playwright.launchChromium({ headless: true });
      context = await browser.newContext();
      page = await context.newPage();
    });

    it("it should show persons names", async () => {
      await page.goto("http://localhost:3004/persons");
      const heading = await page.$eval("h1", (el) => el.textContent.trim());
      expect(heading).to.equal("Person Details");
    });
  });
});
