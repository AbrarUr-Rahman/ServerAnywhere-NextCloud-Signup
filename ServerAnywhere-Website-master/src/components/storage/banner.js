import React from "react";
import Button from "react-bootstrap/Button";

export default function Banner() {
	return (
		<div id="banner" style={{ paddingTop: "120px", paddingBottom: "0" }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-sm-3 order-3">
						<div className="section-title pb-4">
							We will help you to grow your business
						</div>
						<div className="section-text-title text-white">
							<p>We are the Team of Professional Developers</p>
						</div>
						<div className="mt-4">
							<a href="/vps">
								<Button variant="primary" size="lg" className="text-uppercase">
									Read more
								</Button>
							</a>
						</div>
					</div>
					<div className="col-lg-2 col-md-1 order-md-2 order-sm-2 order-2"></div>
					<div className="col-lg-5 col-md-6 col-sm-12 col-12 order-md-4 order-sm-1 order-1 banner_img">
						<img
							src="/images/store/growth.svg"
							alt="error"
							loading="lazy"
							width="100%"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
