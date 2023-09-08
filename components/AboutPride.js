import Image from "next/image";
import PinkBox from "./PinkBox";

const AboutPride = () => {
	return (
		<PinkBox>
			<div className="flex flex-col md:flex-row justify-between w-full gap-5">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#39393A] font-bold text-4xl flex-1">
						OM STEINKJER PRIDE
					</h2>
					<p className="text-[#39393A] text-[18px] pt-6 flex-[3]">
						Steinkjer Pride ble arrangert for første gang i 2019 og
						vokser seg større for hvert år. Gjennom de siste årene
						har vi knyttet til oss trofaste sponsorer og partnere.
						Viktigst av alt er likevel de frivillige. Steinkjer
						Pride er et initiativ fra Rød Tråd, men hadde ikke vært
						mulig uten de mange timene med frivillig innsats som
						ligger bak.
						<br />
						<br />
						Steinkjer Pride skal være tilgjengelig for alle. Vi har
						derfor gjort det til et poeng å ha gratis arrangement
						for barn og et eget pride-arrangement for ungdom 13-18
						år. Paraden er prides viktigste arrangement der vi
						samles med paroler, slagord, dans, glede og musikk.
						Pride Aften er en helaften der man får god mat, i herlig
						selskap og et forrykende show med ekte pridestemning!
						<br />
						<br />
						Vi sees på pride!
					</p>
				</div>
				<div className="pt-[60px] pb-[60px] flex flex-col md:flex-row gap-5">
					<Image
						src="/images/SteinkjerPride_logo_2023.jpg"
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
