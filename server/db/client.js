const { Client } = require('pg');
const dbName = "cookbook"; 
// const client = new Client(`postgres://localhost:54321/${dbName}`);


const client = new Client({
  user: "postgres",
  host: 'localhost',
  database: dbName,
  password: "postgres",
  port: 5432,
});




client.connect((err) => {
  if (err) {
    console.error("Connection error:", err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = client;
