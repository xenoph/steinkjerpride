const Intro = () => {
	//TODO: This can be done better. An element can have multiple background-image, so I can use both linear-gradient AND an url in the same!
	// No point in having the <figure> probably? Just everything in the section?
	return (
		<section className="flex-col md:flex-col flex items-center md:justify-between mb-16 md:mb-12 relative bg-gradient-to-b from-[#3391E9]/50 to-[#ECC3E7]/50 h-screen">
			<figure
				className="flex-col items-center bg-[url('/images/pride2019.jpg')] bg-cover bg-no-repeat bg-center w-full h-full"
				style={{
					position: "absolute",
					top: "0",
					zIndex: "-1",
				}}
			/>
			<div className="relative flex-col items-center text-center p-11 pt-[175px]">
				<h1 className="text-6xl md:text-[200px] font-bold tracking-tighter leading-tight md:pr-8 text-white mb-12">
					STEINKJER
					<br />
					PRIDE
				</h1>
				<p className="text-white text-2xl font-bold">
					15 - 18 SEPTEMBER 2022
				</p>
			</div>
		</section>
	);
};

export default Intro;

// <ContentfulImage
//   src="/images/pride2019.jpg"
//   alt="In the moment picture capturing several participants from Steinkjer Pride 2019"
//   width="960"
//   height="720"
//   layout="fixed"
// />

/*
      For rainbow text
          style={{
            backgroundImage:
              "linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)",
            backgroundClip: "text",
            color: "transparent",
          }}
          */
