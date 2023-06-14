import { db } from "@vercel/postgres"

export const DBConn = async () => await db.connect()
