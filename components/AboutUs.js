import Image from "next/image";
import BlueBox from "./BlueBox";

const AboutUs = () => {
	return (
		<BlueBox>
			<div className="flex flex-col md:flex-row justify-between w-full gap-5">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						OM RØD TRÅD
					</h2>
					<p className="text-[#39393A] text-[18px] pt-6 flex-[3]">
						Rød Tråd skal fremme samfunnsengasjement (for unge
						voksne), og skape sosiale arenaer hvor vi samles til
						diskusjon, engasjement og debatt. Vi ønsker flere våkne
						hoder som bryr seg om det som angår oss alle, med vekt
						på likestilling, kjønn, og annen relevant tematikk.
					</p>
				</div>
				<div className="pt-[60px] pb-[60px] flex flex-col md:flex-row gap-5">
					<Image
						src="/images/rodtrad.png"
						alt="Rød Tråd logo"
						width={436}
						height={433}
					/>
				</div>
			</div>
		</BlueBox>
	);
};

export default AboutUs;
