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
import VPSPricing from "./vps_pricing";
import VPSAbout from "./about";
import VPSCompare from "./compare";
import VPSSlider from "./slider";

export default function VPS() {
	return (
		<div>
			<Header />
			<Banner>
				<BannerText />
			</Banner>
			<VPSPricing />
			<About>
				<VPSAbout />
			</About>
			<VPSCompare />
			<Slider>
				<VPSSlider />
			</Slider>
			<Support />
			<Catagory />
			<Footer />
		</div>
	);
}
