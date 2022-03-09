const puppeteer = require("puppeteer");

const personsData = [
  {
    id: 400,
    name: "Basser",
    phone: "9987656",
  },
  {
    id: 401,
    name: "kane",
    phone: "9987656",
  },
  {
    id: 402,
    name: "martin",
    phone: "9987656",
  },
];

async function withCreatePerson() {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("http://localhost:3004/");
  await page.type("input[id=personId]", "403");
  await page.type("input[id=personName]", "Toronto");
  await page.type("input[id=personPhone]", "9876");
  await page.evaluate(() => {
    document.querySelector("input[type=submit]").click();
  });
  await browser.close();
}
withCreatePerson();
