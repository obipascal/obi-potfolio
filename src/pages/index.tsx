import Image from "next/image"
import { Inter } from "next/font/google"
import Nav from "@/components/Nav"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Language from "@/components/Language"
import Workexperience from "@/components/Workexperience"
import Education from "@/components/Education"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<main className={` min-h-screen dark:bg-slate-900 bg-light ${inter}`}>
				<Nav />
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
			</main>
		</>
	)
}
