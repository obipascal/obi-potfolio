import Image from "next/image"
import React from "react"

import ProfilePhoto from "assets/img/pro-1.png"
import YearsOfExperience from "./YearsOfExperience"
import ProfessionalSummary from "./ProfessionalSummary"

export default function About() {
	return (
		<div className="">
			<Image src={ProfilePhoto} alt="Obi, Pascal Banjuare" className="w-52  m-auto block mt-3 rounded-full px-8 border-2 border-light-50" />
			<div className="px-8 py-2">
				<h1 className="font-bold text-2xl block text-center">Obi Pascal Banjuare</h1>
				<YearsOfExperience />
				<h1 className="font-bold text-lg block text-center">
					<em className="">Full-stack Software Developer</em>
				</h1>
			</div>
			<ProfessionalSummary />
		</div>
	)
}
