import React from "react";
import Header from "../common/header";
import MinecraftPlan from "./plan";
import Footer from "../common/footer";
import Catagory from "../common/catagory";

export default function Plan() {
	return (
		<div>
			<Header />
			<MinecraftPlan />
			<Catagory />
			<Footer />
		</div>
	);
}
