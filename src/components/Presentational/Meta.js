import React from "react";
import { Helmet } from "react-helmet";

function Meta({ title, preview, image, url, type = "website" }) {
	return (
		<Helmet>
			{/* Primary Meta Tags */}
			<title>{title}</title>

			{/* Open Graph / Facebook */}
			<meta name="title" property="og:title" content={title} key="title" />
			<meta property="og:type" content={type} />
			<meta name="description" property="og:description" content={preview} />
			<meta
				name="image"
				property="og:image"
				content={`http://app.endla.com${image}`}
			/>
			<meta property="og:url" content={`https://app.endla.com${url}`} />
		</Helmet>
	);
}

export default Meta;
