import { useEffect } from "react";
import BlueBox from "./BlueBox";
import Image from "next/image";

const NewsListing = ({ newsPosts }) => {
	useEffect(() => {
		//Sort the posts by date, then slice up and only show the first 3
		// eslint-disable-next-line react-hooks/exhaustive-deps
		newsPosts = newsPosts
			.sort((a, b) => a.fields.date < b.fields.date)
			.slice(0, 2);
	}, [newsPosts]);

	return (
		<BlueBox>
			<h2 className="text-[#666] font-bold text-4xl pt-14 pb-14">
				SISTE NYTT
			</h2>
			<div className="flex flex-col md:flex-row gap-8 justify-start">
				{newsPosts &&
					newsPosts.map((post) => {
						const months = [
							"Januar",
							"Februs",
							"Mars",
							"April",
							"Mai",
							"Juni",
							"Juli",
							"August",
							"September",
							"Oktober",
							"November",
							"Desember",
						];
						let dateObject = new Date(post.fields.date);
						let date =
							dateObject.getDate() +
							". " +
							months[dateObject.getMonth()] +
							" " +
							dateObject.getFullYear();
						return (
							<div key={post.fields.slug}>
								<Image
									src={
										"https:" +
										post.fields.coverImage.fields.file.url
									}
									alt="bilde"
									width={300}
									height={300}
								/>
								<h3 className="text-lg uppercase font-semibold">
									{post.fields.title}
								</h3>
								<p className="uppercase text-base">{date}</p>
								<p className="my-3">{post.fields.excerpt}</p>
								<p>Link her</p>
							</div>
						);
					})}
			</div>
		</BlueBox>
	);
};

export default NewsListing;
