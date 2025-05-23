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
	{/*<EventBox day="Fredag" time="17:00" event="Barnedisco" link="https://www.facebook.com/events/1208657836932065/" />
		                                <EventBox day="Fredag" time="17:30" event="Ung Pride" link="https://www.facebook.com/events/1027676278737822/" />
						<EventBox day="Fredag" time="20:00" event="Pride Quiz" link="https://www.facebook.com/events/1042135484110232/" />
		                                <EventBox day="Fredag" time="21:00" event="Pride Karaoke" link="https://www.facebook.com/events/394631687000042/" />
		                                <EventBox day="Lørdag" time="11:00" event="Kunstutstilling" link="https://www.facebook.com/events/543851328222577" />
						<EventBox day="Lørdag" time="12:30" event="Pride parade" link="https://www.facebook.com/events/1756009101604836/" />
						<EventBox day="Lørdag" time="19:00" event="Pride aften" link="https://www.facebook.com/events/381377364986113/" />*/}
						KOMMER SNART! :) 
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
