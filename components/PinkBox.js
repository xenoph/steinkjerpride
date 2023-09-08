export default function PinkBox({ children }) {
	return (
		<section className="ml-0 bg-[#ECC3E7] flex justify-center">
			<div className="p-5 md:p6 lg:p-12 lg:pl-[80px] lg:pr-[116px] max-w-screen-2xl w-full">
				{children}
			</div>
		</section>
	);
}
