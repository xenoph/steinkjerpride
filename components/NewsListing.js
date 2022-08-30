import { useEffect, useState } from "react";
import BlueBox from "./BlueBox";
import Image from "next/image";
import Link from "next/link";

const NewsListing = ({ newsPosts }) => {
	const [posts, setPosts] = useState();

	useEffect(() => {
		//Sort the posts by date, then slice up and only show the first 3
		// eslint-disable-next-line react-hooks/exhaustive-deps
		const sortedPosts = newsPosts
			.sort((a, b) => a.fields.date < b.fields.date)
			.slice(0, 3);
		setPosts(sortedPosts);
	}, [newsPosts]);

	return (
		<BlueBox>
			<h2 className="text-[#666] font-bold text-4xl pt-14 pb-14">
				SISTE NYTT
			</h2>
			<div className="flex flex-col md:flex-row gap-8 justify-start">
				{posts &&
					posts.map((post) => {
						const months = [
							"Januar",
							"Februar",
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
								<Link href={`/newsposts/${post.fields.slug}`}>
									<span className="underline cursor-pointer">
										Les mer
									</span>
								</Link>
							</div>
						);
					})}
			</div>
		</BlueBox>
	);
};

export default NewsListing;
