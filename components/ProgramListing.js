import BlueBox from "./BlueBox";

const ProgramListing = () => {
	return (
		<BlueBox>
			<div className="flex flex-col md:flex-row justify-between w-full gap-5">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						PROGRAM
					</h2>
					<p className="text-[#39393A] text-[18px] pt-6 flex-[3]">
						Fredag
					</p>
				</div>
				<div className="pt-[60px] pb-[60px] flex flex-col md:flex-row gap-5">
					<p className="text-[#39393A] text-[18px] pt-6 flex-[3]">
						Lørdag
					</p>
				</div>
			</div>
		</BlueBox>
	);
};

export default ProgramListing;
