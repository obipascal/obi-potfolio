import Image from "next/image"
import { Inter } from "next/font/google"
import Nav from "@/components/layout/Nav"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Language from "@/components/Language"
import Workexperience from "@/components/Workexperience"
import Education from "@/components/Education"
import Layout from "@/components/layout/Layout"
import Testimonies from "@/components/Testimonies"
import { GetServerSideProps } from "next"
import prismaConn from "@/libs/configs/db/prisma"
import { ReviewersData } from "@/types/reviews"

type HomeProps = {
	reviews?: Array<ReviewersData>
}
export default function Home({ reviews }: HomeProps) {
	return (
		<Layout>
			<section className="grid md:grid-cols-3 sm:grid-cols-1 p-5 gap-0">
				<div className="dark:bg-slate-800 rounded-md md:rounded-r-none sm:rounded-b-none bg-[#fff] dark:text-light text-slate-900  min-h-screen">
					<About />
					<Contact />
					<Skills />
					<Language />
				</div>
				<div className="md:col-span-2 p-2 bg-slate-100 dark:bg-slate-900 dark:text-light text-slate-900  min-h-screen">
					<Workexperience />
					<Education />
				</div>
			</section>

			{reviews && <Testimonies data={reviews} />}
		</Layout>
	)
}

// pages/p/[id].tsx
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const _reviews = await prismaConn.revews.findMany({
			select: {
				id: true,
				name: true,
				company: true,
				position: true,
				contact: true,
				message: true
			}
		})
		return {
			props: {
				reviews: _reviews
			}
		}
	} catch (error) {}

	return {
		props: {
			reviews: null
		}
	}
}
