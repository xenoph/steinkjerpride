export default function BlueBox({ children }) {
	return (
		<section className="ml:0 lg:mr-9 mb-12 lg:rounded-r-[35px] bg-[#BFEDEF] flex justify-center">
			<div className="p-5 md:p-6 lg:p-12 lg:pr-[80px] lg:pl-[116px] max-w-screen-2xl w-full">
				{children}
			</div>
		</section>
	);
}
