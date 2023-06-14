import React from "react"
import XDivider from "./misc/XDivider"
import Link from "next/link"

export default function Contact() {
	return (
		<div className="flex flex-col my-8 md:pl-8">
			<div>
				<h1 className="font-bold text-2xl p-3">Contact</h1>
				<XDivider classes="mb-5 border-2" />
				<div className="pl-3">
					<h1 className="font-bold text-lg">Phone</h1>
					<p className="font-medium">
						<Link href={"tel:+2349125256272"}>(+234) 0912-525-6272</Link>
					</p>
					<XDivider classes="my-3" />
				</div>

				<div className="pl-3">
					<h1 className="font-bold text-lg">E-mail</h1>
					<p className="font-medium">
						<Link href={"mailto:pascalobi83@gmail.com"}>pascalobi83@gmail.com</Link>
					</p>
					<XDivider classes="my-3" />
				</div>

				<div className="pl-3">
					<h1 className="font-bold text-lg">Address</h1>
					<p className="font-medium">Kubwa, Abuja FCT, Nigeria</p>
					<XDivider classes="my-3" />
				</div>
			</div>
		</div>
	)
}
