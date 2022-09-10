import Image from "next/image";
import BlueBox from "./BlueBox";
import PinkBox from "./PinkBox";

const SupporterListing = ({ supporters }) => {
	return (
		<>
			{/* . 
			<section className="py-8">
				<BlueBox>
					<h2 className="text-[#666] uppercase text-4xl text-center pb-7 font-bold">
						Stolt hovedsponsor
					</h2>
					<div className="flex flex-row justify-start">
						{supporters &&
							supporters.map((supporter) => {
								if (
									supporter.fields.sponsortype.fields.name !==
									"hovedsponsor"
								) {
									return null;
								}

								return (
									<div key="supporter.fields.name">
										<Image
											src={
												"https:" +
												supporter.fields.logo.fields
													.file.url
											}
											alt={`Logo for ${supporter.fields.name}`}
											width={300}
											height={300}
										/>
										<p className="text-center">
											{supporter.fields.name}
										</p>
									</div>
								);
							})}
					</div>
				
				</BlueBox>
			</section>
				
				*/}
			<section className="py-8">
				<PinkBox>
					<h2 className="text-[#666] uppercase text-4xl text-center font-bold pb-6 lg:pb-0">
						Stolt sponsor
					</h2>
					<div className="flex flex-col md:flex-row justify-around flex-wrap gap-6">
						{supporters &&
							supporters.map((supporter) => {
								if (
									supporter.fields.sponsortype.fields.name !==
									"sponsor"
								) {
									return null;
								}

								return (
									<div
										key="supporter.fields.name"
										className="p-3 min-w-[125px] md:flex-[0_1_30%] flex-1"
									>
										<div className="relative lg:h-52 lg:max-h-52 max-h-40 h-40">
											<Image
												src={
													"https:" +
													supporter.fields.logo.fields
														.file.url
												}
												alt={`Logo for ${supporter.fields.name}`}
												layout="fill"
												objectFit={"contain"}
											/>
										</div>
									</div>
								);
							})}
					</div>
				</PinkBox>
			</section>
			<section className="py-8">
				<BlueBox>
					<h2 className="text-[#666] uppercase text-4xl text-center pb-7 font-bold">
						Stolt støttespiller
					</h2>
					<div className="flex flex-row flex-wrap justify-center">
						{supporters &&
							supporters.map((supporter) => {
								if (
									supporter.fields.sponsortype.fields.name !==
									"stottespiller"
								) {
									return null;
								}

								return (
									<div
										key="supporter.fields.name"
										className="p-4 flex-[0_1_50%] md:flex-[0_1_25%] justify-center items-center text-center"
									>
										<div className="relative lg:max-h-40 lg:h-40 max-h-32 h-32">
											<Image
												src={
													"https:" +
													supporter.fields.logo.fields
														.file.url
												}
												alt={`Logo for ${supporter.fields.name}`}
												layout="fill"
												objectFit={"contain"}
											/>
										</div>
									</div>
								);
							})}
					</div>
				</BlueBox>
			</section>
		</>
	);
};

export default SupporterListing;
