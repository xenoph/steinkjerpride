import Layout from "../components/layout";
import Intro from "../components/intro";
import NewsListing from "../components/NewsListing";
import AboutUs from "../components/AboutUs";
import SupporterListing from "../components/SupporterListing";
import { createClient } from "contentful";

export default function Home({ supporters, posts }) {
	return (
		<Layout>
			<Intro />
			<NewsListing newsPosts={posts} />
			<AboutUs />
			<SupporterListing supporters={supporters} />
		</Layout>
	);
}

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const supps = await client.getEntries({ content_type: "supporter" });
	const posts = await client.getEntries({ content_type: "newsPost" });

	return {
		props: {
			supporters: supps.items,
			posts: posts.items,
		},
	};
};
