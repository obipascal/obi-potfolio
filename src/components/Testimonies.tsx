import Image from "next/image"
import React from "react"
import IconUserTie from "./icons/IconUserTie"
import Link from "next/link"
import { ReviewersData } from "@/types/reviews"

type TestimoniesProps = {
	data?: Array<ReviewersData>
}
export default function Testimonies({ data }: TestimoniesProps) {
	return (
		<section className="p-5 my-8 flex flex-col items-center justify-center min-h-screen">
			<div className="">
				<h3 className="mb-6 ml-3 text-2xl font-bold text-neutral-700 dark:text-neutral-300">What my exployers, colleagues and clients say about me...</h3>

				<ol className="border-l-2 dark:border-sky-100 border-gray-500">
					{data && (
						<>
							{data.map(item => (
								<li key={item?.id}>
									<div className="flex-start md:flex">
										<div className="-ml-[13px] flex h-[25px] w-[25px] items-center justify-center rounded-full dark:bg-sky-100 dark:text-sky-700 bg-gray-100 text-gray-700  ">
											<IconUserTie />
										</div>
										<div className="mb-10 ml-6 w-10/12 block max-w-md rounded-lg bg-neutral-50 p-6 shadow-md shadow-black/5 dark:bg-slate-800 dark:shadow-black/10">
											<div className="mb-4 flex flex-col ">
												<h1 className="md:text-lg xs:text-md text-slate-900 dark:text-white font-medium">{item?.name}</h1>
												<span className="text-sm text-info transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700">
													<em className="">{item?.position}</em> - <em className="">{item?.company}</em>
												</span>
											</div>
											<p className="mb-6 text-neutral-700 dark:text-neutral-200">{item?.message}</p>
										</div>
									</div>
								</li>
							))}
						</>
					)}
				</ol>
			</div>
			<Link href={"/review"} className="rounded-full shadow bg-orange-400 p-3 my-8" role="button">
				Write me a review
			</Link>
		</section>
	)
}
