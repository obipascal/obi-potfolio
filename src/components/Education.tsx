import React from "react"
import XDivider from "./misc/XDivider"
import Link from "next/link"

export default function Education() {
	return (
		<div className="flex flex-col my-8 md:pl-8">
			<div>
				<h1 className="font-bold text-2xl p-3">Education</h1>
				<XDivider classes="mb-5 border-2" />
				<div className="pl-5">
					<p className="font-medium">2021</p>
					<h1 className="font-bold text-lg uppercase">Federal College Of Education</h1>
					<p className="font-semibold text-xs">3 (years) Program | National Certificate In Education (NCE)</p>
					<p className="font-semibold">Associate of Science, Computer Science and Chemistry</p>
					<p className="font-semibold text-sm">
						<em className="">Zaria Kaduna, Nigeria</em>
					</p>
					<XDivider classes="my-3" />
				</div>

				<div className="pl-5">
					<p className="font-medium">Present</p>
					<h1 className="font-bold text-lg uppercase">University Of The People</h1>
					<p className="font-semibold text-xs"> 4 (years) Program | Bachelor Degree (Degree) | Online Degree </p>
					<p className="font-semibold">Bachelor Of Sciences in Computer Science</p>
					<p className="font-semibold text-sm">
						<em className="">E Colorado Blvd Suite 623,Pasadena, CA 91101, USA</em>
					</p>
				</div>
			</div>
		</div>
	)
}
