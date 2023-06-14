import React from "react"
import XDivider from "./misc/XDivider"

export default function Skills() {
	return (
		<div className="flex flex-col my-8 md:pl-8">
			<div>
				<h1 className="font-bold text-2xl p-3">Skills / Expertise</h1>
				<XDivider classes="mb-5 border-2" />

				{/* Backend Skills */}
				<div className="pl-3">
					<h1 className="font-semibold text-lg">Backend</h1>
					<XDivider classes="my-3" />
					<ul className="pl-3 list-disc">
						<li>
							<h1 className="font-medium text-md">PHP</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "95%" }}>
									6-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">Node.JS (ExpressJS + Socket.io)</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "85%" }}>
									4-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">Laravel</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "70%" }}>
									3-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">Python</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "25%" }}>
									1-yrs
								</div>
							</div>
						</li>
					</ul>
				</div>

				{/* Frontend Skills */}
				<div className="pl-3">
					<h1 className="font-semibold text-lg">Frontend</h1>
					<XDivider classes="my-3" />
					<ul className="pl-3 list-disc">
						<li>
							<h1 className="font-medium text-md">HTML5/CSS3 & Vanilla JavaScript</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "95%" }}>
									6-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">ReactJS</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "85%" }}>
									4-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">Next.JS + ReactJS + Tailwindcss</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "50%" }}>
									1-yrs
								</div>
							</div>
						</li>
					</ul>
				</div>

				{/* Other skills */}
				<div className="pl-3">
					<h1 className="font-semibold text-lg">Others</h1>
					<XDivider classes="my-3" />
					<ul className="pl-3 list-disc">
						<li>
							<h1 className="font-medium text-md">Version Control (Github, GitLab & Bitbucket)</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "95%" }}>
									6-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">DevOps</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "85%" }}>
									5-yrs
								</div>
							</div>
						</li>

						<li>
							<h1 className="font-medium text-md">AWS: SNS,S3, SES e.t.c</h1>
							<div className="mb-6 w-11/12 rounded-full bg-neutral-200 dark:bg-neutral-600">
								<div className="rounded-full bg-sky-700 text-white p-0.8 text-center text-xs font-medium leading-none text-primary-100" style={{ width: "50%" }}>
									3-yrs
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
