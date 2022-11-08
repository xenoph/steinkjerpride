import BlueBox from "./BlueBox";

const Finished = () => {
    return (
        <BlueBox>
            <div className="flex flex-col justify-between w-full gap-5 items-center md:items-stretch">
                <div className="flex flex-col lg:w-[430px]">
                    <h2 className="text-[#666] font-bold text-4xl flex-1">
                        TAKK FOR I ÅR!
                    </h2>
                </div>
                <div className="flex md:flex-row flex-col md:justify-between w-[80vw] md:w-[95vw] lg:w-auto text-center">
                    Steinkjer Pride 2022 er over - men fortvil ikke for vi
                    kommer tilbake i 2023!
                </div>
                <div className="flex flex-col lg:w-[430px] pt-12">
                    <h2 className="text-[#666] font-bold text-2xl flex-1">
                        For mere info se her:
                    </h2>
                    <a
                        href="https://www.facebook.com/SteinkjerPride"
                        className="text-blue-400 underline"
                    >
                        Steinkjer Pride Facebook
                    </a>
                </div>
            </div>
        </BlueBox>
    );
};

export default Finished;
