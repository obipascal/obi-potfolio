import React from "react"
import XDivider from "./misc/XDivider"
import Link from "next/link"

export default function Workexperience() {
	return (
		<div>
			<div>
				<h1 className="font-bold text-2xl p-3">Experience</h1>
				<XDivider classes="mb-5 border-2" />
			</div>
			<ol className="border-l-2 border-gray-500 dark:border-sky-500">
			<li>
					<div className="flex-start flex items-center">
						<div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 dark:bg-sky-500"></div>
						<div className="">
							<h4 className="text-xl font-semibold">Full-stack Developer</h4>
							<h4 className="text-lg font-semibold">
								<em className="">JCK Consulting Ltd</em>
							</h4>
						</div>
					</div>
					<div className="mb-6 ml-6 pb-6">
						<a
							href="#!"
							className="text-sm text-sky transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 dark:focus:text-sky-500 dark:active:text-sky-600"
						>
							June 2023 - July 2023 (1 mos) | UK
						</a>
						<div className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
							<ul className="list-disc pl-8">
								<li className="">
								Successfully led the end-to-end development and deployment of the JCK Consulting Ltd Client Portal, meeting all project milestones and delivering the final product on time and within budget.
								</li>
								<li className="">
								Increased client satisfaction by 35% through the implementation of an intuitive user interface (UI) and seamless user experience (UX) on the portal, enhancing client engagement and retention.
								</li>
								<li className="">
									Directed and managed a team of professionals, overseeing the implementation and execution of BilmaPay&apos;s vision, resulting in successful product development and market entry.
								</li>
								<li className="">
								Achieved a 50% reduction in manual data entry and processing time for the consulting team by automating key processes within the portal, improving operational efficiency and accuracy.
								</li>
								<li className="">
								Ensured data security and privacy compliance, achieving a 100% passing score in third-party security audits and providing clients with confidence in the protection of their sensitive information.
								</li>
							</ul>
						</div>
						<Link
							href={"https://www.jckconsulting.co.uk"}
							target="_blank"
							role="button"
							className="inline-block rounded bg-sky-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							View project
						</Link>
					</div>
				</li>

				<li>
					<div className="flex-start flex items-center">
						<div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 dark:bg-sky-500"></div>
						<div className="">
							<h4 className="text-xl font-semibold">Full-stack Developer</h4>
							<h4 className="text-lg font-semibold">
								<em className="">Bilma Technologies Ltd</em>
							</h4>
						</div>
					</div>
					<div className="mb-6 ml-6 pb-6">
						<a
							href="#!"
							className="text-sm text-sky transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 dark:focus:text-sky-500 dark:active:text-sky-600"
						>
							June 2022 - June (12 mos) | Abuja, Nigeria
						</a>
						<div className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
							<ul className="list-disc pl-8">
								<li className="">
									Co-Founded and launched BilmaPay, a startup company that revolutionized the online payment industry, addressing the challenges and frustrations faced by online shoppers and
									cross-border payments.
								</li>
								<li className="">
									Identified and capitalized on a gap in the market, by developing a comprehensive business plan that leveraged emerging technologies and innovative strategies to drive growth and
									success.
								</li>
								<li className="">
									Directed and managed a team of professionals, overseeing the implementation and execution of BilmaPay&apos;s vision, resulting in successful product development and market entry.
								</li>
								<li className="">
									Fostered strategic partnerships and collaborations with key stakeholders, such as investors, partners, and customers, to drive business growth and increase revenue.
								</li>
								<li className="">
									Successfully navigated the complex regulatory landscape of the cross-border payment industry, establishing BilmaPay & BilmaStores as a trusted and reliable payment solution for
									consumers and businesses alike.
								</li>
							</ul>
						</div>
						<Link
							href={"https://stores.bilmapay.com"}
							target="_blank"
							role="button"
							className="inline-block rounded bg-sky-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							View project
						</Link>
					</div>
				</li>

				<li>
					<div className="flex-start flex items-center">
						<div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 dark:bg-sky-500"></div>
						<div className="">
							<h4 className="-mt-2 text-xl font-semibold">Frontend Developer</h4>
							<h4 className="text-lg font-semibold">
								<em className="">Beekle&apos;s</em>
							</h4>
						</div>
					</div>
					<div className="mb-6 ml-6 pb-6">
						<a
							href="#!"
							className="text-sm text-sky transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 dark:focus:text-sky-500 dark:active:text-sky-600"
						>
							Jul 2022 - Feb 2023 (8 mos) | Lagos, Nigeria (Remotely)
						</a>
						<div className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
							<ul className="list-disc pl-8">
								<li className="">
									Collaborated with the UX team to implement UX designs using Bootstrap, CSS, and Javascript, resulting in a visually appealing website and improved user experience.
								</li>
								<li className="">
									Translated UI designs into React reusable components and implemented frontend flows, resulting in a 50% reduction in development time and an increase in user engagement by 20%.
								</li>
								<li className="">Partnered with backend stakeholders to implement frontend logic by calling APIs, resulting in a seamless integration between the frontend and backend systems.</li>
								<li className="">Successfully tested and deployed the frontend project single-handedly, resulting in a 100% functional website with a 20% increase in website traffic.</li>
								<li className="">
									Implemented A/B testing methodologies to optimize user engagement and conversion rates, resulting in a further increase of 10% in user engagement and a 5% increase in conversion
									rates.
								</li>
							</ul>
						</div>
						<Link
							href={"https://beekle.io"}
							target="_blank"
							type="button"
							className="inline-block rounded bg-sky-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							View Project
						</Link>
					</div>
				</li>

				<li>
					<div className="flex-start flex items-center">
						<div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 dark:bg-sky-500"></div>
						<div className="">
							<h4 className="-mt-2 text-xl font-semibold">Backend Developer</h4>
							<h4 className="text-lg font-semibold">
								<em className="">AirPay Global</em>
							</h4>
						</div>
					</div>
					<div className="mb-6 ml-6 pb-6">
						<a
							href="#!"
							className="text-sm text-sky transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 dark:focus:text-sky-500 dark:active:text-sky-600"
						>
							Nov 2022 - May 2023 (7 mos) | Namibia (Remotely)
						</a>
						<div className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
							<ul className="list-disc pl-8">
								<li className="">Integrated Paystack payment gateway into Airpay Global&apos;s system, increasing payment options by 50%.</li>
								<li className="">Designed and developed RESTAPI services for AirPOS, enabling seamless interaction with the Payment Gateway and reducing processing time by 40%.</li>
								<li className="">Collaborated with the frontend team to implement the gateway RESTAPI, resulting in a 60% reduction in user errors and a 30% increase in successful transactions.</li>
								<li className="">Implemented top-notch security measures to protect customer information, achieving a 100% secure backend system.</li>
								<li className="">
									Conducted extensive testing and debugging of the payment gateway system, resulting in a 99.9% uptime and a 95% reduction in technical issues reported by customers.
								</li>
							</ul>
						</div>
						<Link
							href={"https://airpayglobal.com"}
							target="_blank"
							type="button"
							className="inline-block rounded bg-sky-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							View Project
						</Link>
					</div>
				</li>

				<li>
					<div className="flex-start flex items-center">
						<div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-gray-500 dark:bg-sky-500"></div>
						<div className="">
							<h4 className="-mt-2 text-xl font-semibold">Backend Developer</h4>
							<h4 className="text-lg font-semibold">
								<em className="">LEGACY EVENTS</em>
							</h4>
						</div>
					</div>
					<div className="mb-6 ml-6 pb-6">
						<a
							href="#!"
							className="text-sm text-sky transition duration-150 ease-in-out hover:text-sky-600 focus:text-sky-600 active:text-sky-700 dark:text-sky-400 dark:hover:text-sky-500 dark:focus:text-sky-500 dark:active:text-sky-600"
						>
							May 2021 - Aug 2022 (1 yr 4 mos) | United Kingdom&apos;s (Remotely)
						</a>
						<div className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
							<ul className="list-disc pl-8">
								<li className="">Developed a gateway service and integrated Stripe APIs, expanding payment options by 40% and reducing processing time by 30%.</li>
								<li className="">Single-handedly built and connected vendors with Stripe Connect accounts, enabling seamless payouts and increasing vendor satisfaction by 50%.</li>
								<li className="">
									Redesigned the marketplace checkout flow and integrated the gateway on the checkout form, improving the user experience and increasing successful transactions by 25%.
								</li>
								<li className="">
									Collaborated with the frontend team to resolve responsive design issues on the marketplace, achieving a 100% responsive website and increasing user engagement by 15%.
								</li>
								<li className="">
									Implemented fraud detection and prevention measures using Stripe Radar, resulting in a 75% reduction in fraudulent transactions and a 20% increase in revenue for the marketplace.
								</li>
							</ul>
						</div>
						<Link
							href={"https://marketplace.legacy-events.com"}
							target="_blank"
							type="button"
							className="inline-block rounded bg-sky-500 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-sky-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-sky-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-sky-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
							data-te-ripple-init
							data-te-ripple-color="light"
						>
							View Project
						</Link>
					</div>
				</li>
			</ol>
		</div>
	)
}
