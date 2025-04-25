import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export async function fetchCalendarEvents() {
  const query = `SELECT timeStart, timeEnd, date, title, description FROM calendar`;
  const [rows] = await pool.query(query);

  console.log(rows);

  return rows.map((row) => {
    const formattedTimeStart = row.timeStart ? row.timeStart : 'Invalid Time';
    const formattedTimeEnd = row.timeEnd ? row.timeEnd : null;

    const formattedDate = new Date(row.date).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    return {
      timeStart: formattedTimeStart + " GMT +2",
      timeEnd: formattedTimeEnd + " GMT +2",
      date: formattedDate,
      title: row.title,
      description: row.description,
    };
  });
}
