// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { DBConn } from "@/libs/configs/db/dbconfig"
import prismaConn from "@/libs/configs/db/prisma"
import { ReviewersData } from "@/types/reviews"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse<ReviewersData | any>) {
	// req.body
	const formData: ReviewersData = req.body
	const { name, company, position, contact, message } = formData

	const results = await prismaConn.revews.create({
		// @ts-ignore
		data: {
			...formData
		}
	})

	return res.status(200).json({ status: true, data: results })
}
