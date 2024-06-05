const express = require("express");
const pool = require("./db");

const router = express.Router();

// Route pro vytvoření nové směny
router.post("/shifts", async (req, res) => {
  const { time_worked, date, start_time, end_time } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO shifts (time_worked, date, start_time, end_time) VALUES ($1, $2, $3, $4) RETURNING *",
      [time_worked, date, start_time, end_time]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route pro získání všech směn
router.get("/shifts", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM shifts");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
