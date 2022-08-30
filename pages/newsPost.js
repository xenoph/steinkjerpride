import React from "react";

const NewsPost = ({ post }) => {
	return (
		<div>
			<div>
				<p>{post.fields.title}</p>
			</div>
		</div>
	);
};

export default NewsPost;
