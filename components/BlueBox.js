export default function BlueBox({ children }) {
	return (
		<section className="ml:0 bg-[#BFEDEF] flex justify-center">
			<div className="p-5 md:p-6 lg:p-12 lg:pr-[5rem] lg:pl-[5rem] max-w-screen-2xl w-full">
				{children}
			</div>
		</section>
	);
}
