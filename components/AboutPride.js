import Image from "next/image";
import PinkBox from "./PinkBox";

const AboutPride = () => {
	return (
		<PinkBox>
			<div className="flex flex-col md:flex-row justify-between w-full gap-5">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						OM STEINKJER PRIDE
					</h2>
					<p className="text-[#39393A] text-[18px] pt-6 flex-[3]">
						Om Steinkjer Pride
					</p>
				</div>
				<div className="pt-[60px] pb-[60px] flex flex-col md:flex-row gap-5">
					<Image
						src="/images/steinkjerpride2022.png"
						alt="Steinkjer Pride 2022 Logo"
						width={436}
						height={433}
					/>
				</div>
			</div>
		</PinkBox>
	);
};

export default AboutPride;