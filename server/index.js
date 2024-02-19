import cors from "cors";
import env from "dotenv";
import express from "express";
import pg from "pg";

const app = express();
env.config();

const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});
db.connect();

// module.exports = pool;

app.use(cors());
app.use(express.json());

let users = [];

// GET NOTES
app.get("/notes", async (req, res) => {
  const result = await db.query("SELECT * FROM note");
  users = result.rows;
  res.json(users);
});

// GET SPECIFIC NOTE
app.get("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query("SELECT * FROM note WHERE note_id = $1", [
      id,
    ]);
    res.json(result.rows[0]);
    console.log(result.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// ADD NOTE
app.post("/notes", async (req, res) => {
  const title = req.body["title"];
  const lyrics = req.body["lyrics"];
  const result = await db.query(
    "INSERT INTO note (title, lyrics) VALUES ($1, $2) RETURNING *;",
    [title, lyrics]
  );
  const data = result.rows[0];
  res.json(data);
});

// UPDATE NOTE
app.put("/edit/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body["title"];
    const lyrics = req.body["lyrics"];
    await db.query(
      "UPDATE note SET title = $1, lyrics = $2 WHERE note_id = $3;",
      [title, lyrics, id]
    );
    res.json("Updated!");
  } catch (error) {
    console.log(error.message);
  }
});

// DELETE NOTE
app.delete("/notes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await db.query("DELETE FROM note WHERE note_id = $1", [id]);
    res.json("Lyrics was deleted!");
    console.log(id);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
