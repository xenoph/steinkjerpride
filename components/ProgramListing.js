import BlueBox from "./BlueBox";
import EventBox from "./EventBox";
import styles from "../styles/ProgramListing.module.css";

const ProgramListing = () => {
	// FB event link.
	// https://www.facebook.com/events/1608058446328637
	return (
		<BlueBox>
			<div className="flex flex-col justify-between w-full gap-5 items-center md:items-stretch">
				<div className="flex flex-col lg:w-[430px]">
					<h2 className="text-[#666] font-bold text-4xl flex-1">
						PROGRAM
					</h2>
				</div>
				<div className="gap-3 flex md:flex-row flex-col md:justify-between w-[100%] md:w-[100vw] lg:w-auto text-center">
					<div className="gap-3 flex flex-col md:flex-row md:flex-wrap leading-none">
						<EventBox day="Lørdag" time="12:30" event="Pride parade" link="https://fb.me/e/9peYQtVHl" />
						<EventBox day="Lørdag" time="18:00" event="Pride aften" link="https://fb.me/e/3ucdoyrdM" />
					</div>
				</div>
				<div className="flex flex-col lg:w-[430px] pt-12">
					<h2 className="text-[#666] font-bold text-2xl flex-1">
						Facebook event:
					</h2>
					<a
						href="https://www.facebook.com/events/645279171494374"
						className="text-blue-400 underline"
					>
					Steinkjer Pride 2025 
					</a>
				</div>
			</div>
		</BlueBox>
	);
};

export default ProgramListing;
