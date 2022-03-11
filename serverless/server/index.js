const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");

const dbPath = path.join(__dirname, "peopledata.db");
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });
    app.listen(4000, () => {
      console.log("Server Running at http://localhost:4000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(-1);
  }
};
initializeDBAndServer();


app.post("/person", async (request, response) => {
  const { id, name, phone } = request.body;
  const createNewPersonQuery = `INSERT INTO persons (id, name, phone) VALUES('${id}', '${name}', '${phone}')`;
  await db.run(createNewPersonQuery);
  response.json("Created Person Successfully");
});

;
app.get("/persons", async (request, response) => {
  const getPersonDataQuery = `SELECT * FROM persons`;
  const jsonPersonsData = await db.all(getPersonDataQuery);
  console.log(jsonPersonsData)
  response.send(jsonPersonsData);
});

module.exports = app;