import React from "react";
import Header from "../common/header";
// import Store from "./store";
import Footer from "../common/footer";
import Banner from "./banner";
import About from "./about";
import Pricing from "./pricing";
import UserReg from "./usr-reg";
import Catagory from "../common/catagory";

export default function Storage() {
	return (
		<div>
			<Header />
			<Banner />
			<About />
			<Pricing />
			<UserReg />
			<Catagory />
			<Footer />
		</div>
	);
}
