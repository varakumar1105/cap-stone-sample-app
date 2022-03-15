const axios = require("axios");
let express = require("express");
const app = express();
const request = require("supertest");
const expect = require("chai").expect;
const playwright = require("playwright-aws-lambda");

describe("Persons APIS", () => {
  describe("GET /persons", () => {
    it("it should get persons", async () => {
      const getPersons = async () => {
        try {
          let response = await axios.get("http://localhost:3006/persons");
          return response.data;
        } catch (error) {
          console.error(error);
        }
      };
      let data = await getPersons();
      expect(getPersons().length).not.eql(0);
    });
  });

  describe("Persons data in client", () => {
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
