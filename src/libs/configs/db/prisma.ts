// lib/prisma.ts
import { PrismaClient } from "@prisma/client"

let prismaConn: PrismaClient

prismaConn = new PrismaClient()

export default prismaConn
