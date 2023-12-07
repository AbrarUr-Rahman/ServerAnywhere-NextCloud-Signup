import React from "react";
import Banner from "../common/banner";
import Catagory from "../common/catagory";
import Feature from "../common/feature";
import Footer from "../common/footer";
import Header from "../common/header";
import Slider from "../common/slider";
import Support from "../common/support";
import WebBanner from "./banner";
import WebFeature from "./feature";
import WebSlider from "./slider";
import WebPricing from "./web_pricing";

export default function Web() {
	return (
		<div>
			<Header />
			<Banner>
				<WebBanner />
			</Banner>
			<Feature>
				<WebFeature />
			</Feature>
			<WebPricing />
			<Slider>
				<WebSlider />
			</Slider>
			<Support />
			<Catagory />
			<Footer />
		</div>
	);
}
