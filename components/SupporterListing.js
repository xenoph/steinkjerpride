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
					<h2 className="text-[#666] uppercase text-4xl text-center pb-7 font-bold">
						Stolt sponsor
					</h2>
					<div className="flex flex-row justify-start">
						{supporters &&
							supporters.map((supporter) => {
								if (
									supporter.fields.sponsortype.fields.name !==
									"sponsor"
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
				</PinkBox>
			</section>
			<section className="py-8">
				<BlueBox>
					<h2 className="text-[#666] uppercase text-4xl text-center pb-7 font-bold">
						Stolt støttespiller
					</h2>
					<div className="flex flex-row justify-start">
						{supporters &&
							supporters.map((supporter) => {
								if (
									supporter.fields.sponsortype.fields.name !==
									"stottespiller"
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
											width={150}
											height={150}
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
		</>
	);
};

export default SupporterListing;
