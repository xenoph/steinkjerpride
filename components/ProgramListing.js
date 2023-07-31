import BlueBox from "./BlueBox";

const ProgramListing = () => {
	// FB event link.
	// https://www.facebook.com/events/1608058446328637
	return (
		<BlueBox>
			<div className="flex flex-col justify-between w-full gap-5 items-center md:items-stretch">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						FORELØPIG PROGRAM
					</h2>
				</div>
				<div className="flex md:flex-row flex-col md:justify-between w-[80vw] md:w-[95vw] lg:w-auto text-center">
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Torsdag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							Flaggheising på Steinkjer Rådhus
						</p>
					</div>
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Fredag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							BARNE-DISCO
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							UNG PRIDE
						</p>
					</div>
					<div className="flex flex-col leading-none">
						<p className="text-[#39393A] text-[24px] pt-6 flex-[3] font-bold">
							Lørdag
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							PRIDE PARADE
						</p>
						<p className="text-[#39393A] text-[18px] pt-5 flex-[1]">
							PRIDEAFTEN
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:w-[430px] pt-12">
					<h2 className="text-[#666] font-bold text-2xl flex-1">
						Facebook event:
					</h2>
					<a
						href="https://www.facebook.com/events/1608058446328637"
						className="text-blue-400 underline"
					>
					Steinkjer Pride 2023 - Vi feirer fem år! 
					</a>
				</div>
			</div>
		</BlueBox>
	);
};

export default ProgramListing;
