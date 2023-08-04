import React from "react"
import Nav from "./Nav"
import Head from "next/head"
import { Inter } from "next/font/google"
import dynamic from "next/dynamic"

const inter = Inter({ subsets: ["latin"] })

export type MetaDataProps = {
	name?: string
	title?: string
	url?: string
	desc?: string
	img?: string
}
type LayoutProps = {
	children?: React.ReactNode
	metaData?: MetaDataProps
}

const InitTWElements = dynamic(() => import("./../misc/InitTWElements"), { ssr: false })

export default function Layout({ children, metaData }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Obi, Pascal Banjuare - Beevra</title>
				<meta name="application-name" content={metaData?.name ?? "Obi, Pascal Banjuare"} />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-status-bar-style" content="default" />
				<meta name="apple-mobile-web-app-title" content={metaData?.desc ?? "Obi, Pascal Banjuare"} />
				<meta
					name="description"
					content={
						metaData?.desc ??
						`As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
        efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
        development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
        staying up-to-date with the latest technologies.`
					}
				/>
				<meta name="format-detection" content="telephone=yes" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="msapplication-TileColor" content="#035e99" />
				<meta name="msapplication-tap-highlight" content="no" />
				<meta name="theme-color" content="#035e99" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content={metaData?.url ?? "https://www.beevra.online"} />
				<meta name="twitter:title" content={metaData?.title ?? "Obi, Pascal Banjuare"} />
				<meta
					name="twitter:description"
					content={
						metaData?.desc ??
						`As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
                    efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
                    development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
                    staying up-to-date with the latest technologies.`
					}
				/>
				<meta name="twitter:image" content={metaData?.img ?? "https://www.beevra.online/logo.png"} />
				<meta name="twitter:creator" content="@banjuare_obi" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={metaData?.title ?? "Obi, Pascal Banjuare - Full-stack Web Developer"} />
				<meta
					property="og:description"
					content={
						metaData?.desc ??
						`As a Full-stack Developer with 6 years of experience, my career objective is to leverage my skills and knowledge to develop innovative solutions for clients. With a passion for creating
                    efficient and user-friendly applications, I have a proven track record of delivering high-quality projects on time and within budget. I have experience in both front-end and back-end
                    development, using languages such as HTML, CSS, JavaScript, PHP, SQL and more on my skills section. I am a detail-oriented team player who is committed to continuously improving my skills and
                    staying up-to-date with the latest technologies.`
					}
				/>
				<meta property="og:site_name" content={metaData?.name ?? "Obi, Pascal Banjuare"} />
				<meta property="og:url" content={metaData?.url ?? "https://www.beevra.online"} />
				<meta property="og:image" content={metaData?.img ?? "https://www.beevra.online/logo.png"} />
			</Head>
			<main className={` min-h-screen dark:bg-slate-900 bg-light ${inter}`}>
				<Nav />
				{children}

				<InitTWElements />
			</main>
		</>
	)
}
