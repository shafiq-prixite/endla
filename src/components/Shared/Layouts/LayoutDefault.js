import React from "react";

import { Helmet } from "react-helmet";

import Header from "../../Presentational/Header";
import Footer from "../../Presentational/Footer";

export const siteTitle = "endla";

function LayoutDefault({ children }) {
	return (
		<>
			<Helmet>
				<link rel="icon" href="/favicon.svg" />
			</Helmet>
			<Header navPosition="right" />

			<main className="site-content">{children}</main>
			<Footer />
		</>
	);
}

export default LayoutDefault;
