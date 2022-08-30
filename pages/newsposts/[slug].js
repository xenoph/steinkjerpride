import React from "react";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "../../components/Layout";
import { createClient } from "contentful";

export default function NewsPost({ post }) {
	if (!post) {
		return (
			<div>
				<p>Fant ikke nyheten</p>
			</div>
		);
	}

	return (
		<Layout>
			<div className="p-12 flex flex-col justify-center items-center">
				<Link href="/">
					<h1 className="text-4xl md:text-[64px] font-bold tracking-tighter leading-tight md:pr-8 text-[#666] mb-12 cursor-pointer">
						STEINKJER PRIDE
					</h1>
				</Link>
				{/*
				<div className="mt-8 p-12 max-w-5xl w-auto h-auto">
					<Image
						src={"https:" + post.coverImage.fields.file.url}
						alt="bilde"
						layout="fill"
					/>
				</div>
			 
			  */}
				<div className="md:pt-8 text-left w-full">
					<h2 className="font-semibold text-3xl">{post.title}</h2>
				</div>
				<div className="pt-10 text-left w-full">
					{documentToReactComponents(post.content)}
				</div>
				<div className="pt-12 w-full text-left">
					<Link href="/">
						<span className="underline cursor-pointer">Hjem</span>
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const data = await client.getEntries({
		content_type: "newsPost",
		"fields.slug[in]": params.slug,
	});

	return {
		props: {
			post: data?.items[0]?.fields ?? null,
		},
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true,
	};
}
