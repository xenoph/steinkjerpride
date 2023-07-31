import Layout from "../components/Layout";
import Intro from "../components/Intro";
import AboutUs from "../components/AboutUs";
import SupporterListing from "../components/SupporterListing";
import { createClient } from "contentful";
import AboutPride from "../components/AboutPride";
import Skamlos from "../components/Skamlos";
import ProgramListing from "../components/ProgramListing";
import Finished from "../components/Finished";

export default function Home({ supporters, posts }) {
    return (
        <Layout>
            <Intro />
            <ProgramListing />
            <AboutPride />
            <AboutUs />
            <Skamlos />
        </Layout>
    );
}

            //<SupporterListing supporters={supporters} />

export const getStaticProps = async () => {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    const supps = await client.getEntries({
        content_type: "supporter",
    });
    const posts = await client.getEntries({ content_type: "newsPost" });

    return {
        props: {
            supporters: supps.items,
            posts: posts.items,
        },
        revalidate: 300,
    };
};
