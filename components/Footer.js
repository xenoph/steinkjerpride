export default function Footer() {
	return (
		<footer className="bg-[#ffff9f]/[0.47] border-t border-accent-2">
			<div className="py-24 md:py-28 flex flex-col items-center justify-center">
				<h3 className="px-4 text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center mb-10 lg:pr-4 lg:w-1/2">
					Besøk oss på Facebook
				</h3>
				<div className="flex flex-col lg:flex-row justify-center items-center">
					<a
						href="https://www.facebook.com/SteinkjerPride"
						className="w-48 text-center mx-3 bg-indigo-500 rounded-md hover:bg-indigo-700 border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
					>
						Steinkjer Pride
					</a>
					<a
						href="https://www.facebook.com/roedtraaad"
						className="w-48 text-center mx-3 bg-indigo-500 hover:bg-indigo-700 rounded-md border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
					>
						Rød Tråd
					</a>
				</div>
			</div>
		</footer>
	);
}
