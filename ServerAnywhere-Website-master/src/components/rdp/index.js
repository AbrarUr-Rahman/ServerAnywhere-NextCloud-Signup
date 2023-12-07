import React from "react";
import Catagory from "../common/catagory";
import Footer from "../common/footer";
import Header from "../common/header";
import Banner from "../common/banner";
// import Pricing from "../common/pricing";
import About from "../common/about";
// import Compair from "../common/compare";
import Slider from "../common/slider";
import Support from "../common/support";
import BannerText from "./banner_text";
// import VPSCompare from "./compare";
import AboutRDP from "./about";
import SliderRDP from "./slider";
import PricingRDP from "./vps_pricing";

export default function RDP() {
	return (
		<div>
			<Header />
			<Banner>
				<BannerText />
			</Banner>
			<PricingRDP />
			<About>
				<AboutRDP />
			</About>
			{/* <VPSCompare /> */}
			<Slider>
				<SliderRDP />
			</Slider>
			<Support />
			<Catagory />
			<Footer />
		</div>
	);
}
