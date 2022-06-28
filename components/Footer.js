import Container from "./container";

export default function Footer() {
	return (
		<footer className="bg-[#3391E9]/[0.47] border-t border-accent-2">
			<Container>
				<div className="py-28 flex flex-col lg:flex-row items-center">
					<h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
						Besøk oss på Facebook
					</h3>
					<div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
						<a
							href="https://www.facebook.com/SteinkjerPride"
							className="mx-3 bg-indigo-500 rounded-md hover:bg-indigo-700 border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Steinkjer Pride
						</a>
						<a
							href="https://www.facebook.com/roedtraaad"
							className="mx-3 bg-indigo-500 hover:bg-indigo-700 rounded-md border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
						>
							Rød Tråd
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
}
