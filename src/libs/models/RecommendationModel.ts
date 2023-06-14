import { sql } from "@vercel/postgres"

export default async function Cart({ params }: { params: { user: string } }) {
	const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`

	return rows
}
