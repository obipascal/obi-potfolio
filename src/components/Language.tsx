import React from "react"
import XDivider from "./misc/XDivider"

export default function Language() {
	return (
		<div className="flex flex-col my-8 md:pl-8">
			<div>
				<h1 className="font-bold text-2xl p-3">Language</h1>
				<XDivider classes="mb-5 border-2" />
				<div className="pl-3">
					<h1 className="font-semibold text-lg">English</h1>

					<XDivider classes="my-3" />
				</div>
				<div className="pl-3">
					<h1 className="font-semibold text-lg">Native: Bokiy</h1>
					<XDivider classes="my-3" />
				</div>
			</div>
		</div>
	)
}
