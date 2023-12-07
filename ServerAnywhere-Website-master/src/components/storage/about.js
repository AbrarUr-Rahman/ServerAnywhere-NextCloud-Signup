import React from "react";
import Button from "react-bootstrap/Button";
export default function About() {
	return (
		<div id="about">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-sm-3 about_img">
						<img
							src="/images/store/about.svg"
							alt="error"
							loading="lazy"
							width="100%"
							className="pt-5"
						/>
					</div>
					<div className="col-lg-1 d-lg-block d-md-none order-md-2 order-sm-2"></div>
					<div className="col-lg-6 col-md-7 col-sm-12 col-12 order-md-3 order-sm-1">
						<div className="section-title pb-5">About ServerAnywhere</div>
						<div className="section-text-title">Grow your business with us</div>

						<div className="section-text text-white my-4">
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's
							</p>
						</div>
						<div className="">
							<a href="/vps">
								<Button variant="primary" size="lg" className="text-uppercase">
									Read more
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
