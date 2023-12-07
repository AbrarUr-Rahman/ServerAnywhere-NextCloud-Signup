import React from "react";
import About from "../common/about";
import Banner from "../common/banner";
import Catagory from "../common/catagory";
import Footer from "../common/footer";
import Header from "../common/header";
import Slider from "../common/slider";
import Support from "../common/support";
import AboutDedicated from "./about";
// import Pricing from "../common/pricing";
// import Button from "react-bootstrap/Button";
import BannerText from "./banner_text";
import DedicatedCompare from "./compare";
import DedicatedPricing from "./dedicated_pricing";
import DedicatedSlider from "./slider";

export default function Dedicated() {
	return (
		<div>
			<Header />
			<Banner>
				<BannerText />
			</Banner>
			<DedicatedPricing />
			<About>
				<AboutDedicated />
			</About>
			<DedicatedCompare />
			<Slider>
				<DedicatedSlider />
			</Slider>
			<Support />
			<Catagory />
			<Footer />
		</div>
	);
}
