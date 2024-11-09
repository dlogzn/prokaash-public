import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | Prokaash",
	description: "Cross Border E-Commerce Solutions",
};

export default function Home() {
	return (
		<section className="bg-white dark:bg-gray-900">
				<div className="grid max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
						<div className="mr-auto place-self-center lg:col-span-7">
								<div className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Promote Your Business Worldwide</div>
								<div className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Prokaash to simplify their payment stack.</div>
								<a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
										Get started
										<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
								</a>
								<a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
										Speak to Sales
								</a>
						</div>
						<div className="lg:mt-0 lg:col-span-5 lg:flex">
								<img src="../images/hero.png" alt="Hero" />
						</div>
				</div>
				<div className="py-4 max-w-screen-xl mx-auto">
					<p>PROKAASH™ is a global cross border e-Commerce firm that partners with Australia, Albania, Bangladesh, India, China, Canada, Emirates, Kazakhstan, Malaysia, Poland, Rwanda, Senegal, South Korea, Uzbekistan and Vietnam to tackle the most important challenges and capture the great opportunities for sellers to expand their market reach and increase sales volume around the globe.</p>
					<h4>Cross Border e-Commerce:</h4>
					<p>International sales in ebusiness We work according to the &quot;you sell with us abroad as well as in Poland&quot;. You don&#39;t have to know the specifics of the foreign market, the secrets of cross-border e-commerce and the habits of local consumers - that&#39;s what we do.</p>
					<h4>Cross-Border Logistics:</h4>
					<div>The development of your e-store begins abroad It&#39;s simple: no matter what you sell, more of your potential customers definitely live abroad than in the country. That is why cross-border sales are a natural and necessary step if you take your e-business seriously and think about its development.</div>
					<h4>Logistics Service:</h4>
					<div>We like to be where a lot is going on. We operate in countries where the e-Commerce market is developing particularly dynamically. We do Comprehensive logistics service for online stores.</div>
					<ul>
						<li>Give your Customers a Choice.</li>
						<li>Home Delivery</li>
						<li>Pick-up Points</li>
						<li>Packet Vending Machines</li>
						<li>Traditional Postal Operators</li>
					</ul>
					<p>We offer is complete cross-border logistics specially tailored to needs of online stores. This is not only the fastest delivery, but also multi-channel delivery:</p>
					<ul>
						<li>To Home</li>
						<li>Pickup Points</li>
						<li>Parcel Mac</li>
					</ul>
					<p>You sign only one contract, you use one API, one system and you get one invoice. In return, you have access to several markets, different types of forwarding and numerous additional services, such as:</p>
				</div>

		</section>
	);
}
