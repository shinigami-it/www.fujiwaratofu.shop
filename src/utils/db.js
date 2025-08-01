import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
import { DateTime } from 'luxon'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  dateStrings: true 
})

function formatTime(dateStr, timeStr) {
  if (!timeStr) return null
  const dt = DateTime.fromISO(`${dateStr}T${timeStr.trim()}`, { zone: 'Europe/Berlin' })
  if (!dt.isValid) return null
  return dt.toFormat('HH:mm ZZZZ')
}

export async function fetchCalendarEvents() {
  const query = `SELECT timeStart, timeEnd, date, title, description FROM calendar`
  const [rows] = await pool.query(query)

  const now = DateTime.now().setZone('Europe/Berlin')

  const futureEvents = rows.filter(row => {
    if (!row.timeStart) return false
    const dateISO = row.date instanceof Date ? row.date.toISOString().substring(0, 10) : row.date
    const eventDateTime = DateTime.fromISO(`${dateISO}T${row.timeStart.trim()}`, { zone: 'Europe/Berlin' })
    if (!eventDateTime.isValid) return false
    return eventDateTime >= now
  })

  return futureEvents.map(row => {
    const dateISO = row.date instanceof Date ? row.date.toISOString().substring(0, 10) : row.date
    return {
      timeStart: formatTime(dateISO, row.timeStart),
      timeEnd: formatTime(dateISO, row.timeEnd),
      date: DateTime.fromISO(dateISO, { zone: 'Europe/Berlin' }).toFormat('dd.MM.yyyy'),
      title: row.title,
      description: row.description,
    }
  })
}