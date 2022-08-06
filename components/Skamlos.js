import PinkBox from "./PinkBox";

const Skamlos = () => {
	return (
		<PinkBox>
			<h2 className="text-[#666] uppercase text-4xl text-center pb-7 font-bold">
				Skamløs
			</h2>
			<div className="flex flex-col md:flex-row justify-between w-full gap-5">
				<div className="flex flex-col md:flex-row justify-evenly gap-4 w-full m-auto">
					<iframe
						width="100%"
						height="315"
						src="https://www.youtube.com/embed/h8Kop0hskPo"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<iframe
						src="https://open.spotify.com/embed/track/3yR9vf1NNmKxjXthWSBiD9?utm_source=generator"
						width="100%"
						height="315"
						frameBorder="0"
						allowFullScreen=""
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					></iframe>
				</div>
			</div>
		</PinkBox>
	);
};

export default Skamlos;
