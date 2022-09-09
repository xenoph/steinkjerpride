import BlueBox from "./BlueBox";

const ProgramListing = () => {
	return (
		<BlueBox>
			<div className="flex flex-col justify-between w-full gap-5">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						PROGRAM
					</h2>
				</div>
				<div className="flex md:flex-row flex-col md:justify-between">
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Onsdag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							SKEIV PRAT
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							19:00 - 21:00
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Samfunnshuset
						</p>
					</div>
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Torsdag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							DRAG BINGO
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							20:00
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Vårt Hjem
						</p>
					</div>
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Fredag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							BARNE-DISCO
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							17:00 - 18:30
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Festsalen Samfunnshuset
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							UNG PRIDE
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							19:00 - 21:30
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Klubbscenen - Samfunnshuset
						</p>
					</div>
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Lørdag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							PRIDE PARADE
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							12:00
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Oppmøte Trifolium (Amfi)
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							PRIDEAFTEN
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							19:00
						</p>
						<p className="text-[#39393A] text-[14px] pt-1 flex-[1]">
							Klubbscenen - Samfunnshuset
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:w-[430px] pt-12">
					<h2 className="text-[#666] font-bold text-2xl flex-1">
						For mere info se her:
					</h2>
					<a
						href="https://www.facebook.com/SteinkjerPride"
						className="text-blue-400 underline"
					>
						Steinkjer Pride Facebook
					</a>
				</div>
			</div>
		</BlueBox>
	);
};

export default ProgramListing;
