import Image from "next/image"
import { Inter } from "next/font/google"
import Nav from "@/components/Nav"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Skills from "@/components/Skills"
import Language from "@/components/Language"
import Workexperience from "@/components/Workexperience"
import Education from "@/components/Education"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<Head>
				<title>Obi, Pascal Banjuare - Beevra</title>
				<meta name="application-name" content="Obi, Pascal Banjuare" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content="Obi, Pascal Banjuare" />
				<meta
					name="description"
					content="As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
				efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
				development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
				staying up-to-date with the latest technologies."
				/>
				<meta name="format-detection" content="telephone=no" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#035e99" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#035e99" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://beevra.online" />
				<meta name="twitter:title" content="Obi, Pascal Banjuare" />
				<meta
					name="twitter:description"
					content="As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
				efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
				development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
				staying up-to-date with the latest technologies."
				/>
				<meta name="twitter:image" content="https://beevra.online/logo.png" />
				<meta name="twitter:creator" content="@banjuare_obi" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Obi, Pascal Banjuare - Experience Full-stack Software Developer" />
				<meta
					property="og:description"
					content="As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
				efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
				development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
				staying up-to-date with the latest technologies."
				/>
				<meta property="og:site_name" content="Obi, Pascal Banjuare" />
				<meta property="og:url" content="https://beevra.online" />
				<meta property="og:image" content="https://beevra.online/logo.png" />
			</Head>
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
