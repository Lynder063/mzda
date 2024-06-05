require("dotenv").config();
const express = require("express");
const pool = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pro parsování JSON těla
app.use(express.json());

// Povolení CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Endpoint pro získání všech směn
app.get("/api/shifts", async (req, res) => {
  try {
    const allShifts = await pool.query("SELECT * FROM shifts");
    res.json(allShifts.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Endpoint pro získání konkrétní směny
app.get("/api/shifts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const shift = await pool.query("SELECT * FROM shifts WHERE id = $1", [id]);
    res.json(shift.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Endpoint pro vytvoření nové směny
app.post("/api/shifts", async (req, res) => {
  const { timeWorked, date, startTime, endTime } = req.body;
  try {
    const newShift = await pool.query(
      "INSERT INTO shifts (date, start_time, end_time) VALUES ($1, $2, $3) RETURNING *",
      [date, startTime, endTime]
    );
    res.json(newShift.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Endpoint pro odstranění směny
app.delete("/api/shifts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM shifts WHERE id = $1", [id]);
    res.json({ message: "Shift deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Spuštění serveru
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
'