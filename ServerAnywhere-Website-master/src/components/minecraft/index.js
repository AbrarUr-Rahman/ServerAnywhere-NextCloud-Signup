import React from "react";
import Catagory from "../common/catagory";
import Footer from "../common/footer";
import Header from "../common/header";
import Pricing from "./pricing";
import Banner from "./banner";

export default function Minecraft() {
	return (
		<div>
			<Header />
			<Banner />
			<Pricing />
			<Catagory />
			<Footer />
		</div>
	);
}
