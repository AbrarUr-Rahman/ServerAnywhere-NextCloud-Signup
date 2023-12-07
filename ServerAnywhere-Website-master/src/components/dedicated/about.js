import React from "react";

export default function AboutDedicated() {
	return (
		<div>
			<div className="row">
				<div className="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-sm-3 about_img">
					<img
						src="/images/vps/server.gif"
						alt="error"
						loading="lazy"
						width="100%"
						className="pt-5"
					/>
				</div>
				<div className="col-lg-1 d-lg-block d-md-none order-md-2 order-sm-2"></div>
				<div className="col-lg-6 col-md-7 col-sm-12 col-12 order-md-3 order-sm-1">
					<div className="section-title pb-5">About dedicated servers</div>
					<div className="section-text text-white">
						<p>
							Dedicated server hosting is where your website or server
							operations have their own private server to function on. You
							choose your own resource limits such as bandwidth and RAM,
							assuring that you will have enough resources to make your site run
							smoothly.
						</p>
						<p className="py-3">
							You&apos;re in total control of your server and its resource
							limits from the start! Dedicated server hosting tends to be
							allocated for medium to big business sits, but if you&apos;re
							ambitious, you can save time in the long run by signing up for a
							dedicated server plan.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
