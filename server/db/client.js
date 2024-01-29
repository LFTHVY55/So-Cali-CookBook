const { Client } = require('pg');
const dbName = "cookbook"; 
// const client = new Client(`postgres://localhost:5432/${dbName}`);


// const client = new Client({
//   user: "postgres",
//   host: 'localhost',
//   database: dbName,
//   password: "postgres",
//   port: 5432,
// });



const client = new Client({
  connectionString: 'postgres://cookbook_9quf_user:vtE4u0ZIji8v5qyfobWtVTXlBYPJ4CD3@dpg-cmqo0jq1hbls73fl785g-a.oregon-postgres.render.com/cookbook_9quf',
    // user: "cookbook_9quf_user",
//   host: 'localhost',
  // database: "cookbook_9quf",
  // password: "vtE4u0ZIji8v5qyfobWtVTXlBYPJ4CD3",
  // port: 5432,
  ssl: {
    rejectUnauthorized: false,
  },
});




client.connect((err) => {
  if (err) {
    console.error("Connection error:", err);
  } else {
    console.log("Connected to database");
  }
});

module.exports = client;