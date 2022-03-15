const express = require("express");
const path = require("path");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const cors = require("cors");
const { response } = require("express");
const dbPath = path.join(__dirname, "peopledata.db");
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3004" }));

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });
    app.listen(3006, () => {
      console.log("Server Running at http://localhost:3006/");
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

app.get("/persons", async (request, response) => {
  const getPersonDataQuery = `SELECT * FROM persons`;
  const jsonPersonData = await db.all(getPersonDataQuery);
  response.send(jsonPersonData);
});

module.exports = app;
