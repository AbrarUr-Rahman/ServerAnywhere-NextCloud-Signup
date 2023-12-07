import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function VPSSlider() {
	return (
		<div>
			<div className="row">
				<div className="section-title pb-3">Easy to manage</div>
				<div className="section-text">
					<p>
						With our different options for control panels that can be installed
						on your VPS, along with the Virtualizor Control panel, you will be
						able to get your server up and running with ease. With prices
						starting at just $4/month, hosting a VPS has never been easier!
					</p>
				</div>
			</div>
			<div className="row justify-content-center pt-5">
				<div className="col-lg-9 col-sm-12 col-12 text-center">
					<div className="screenshot">
						<Carousel>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/vps/dribbble.gif"
									alt="First slide"
									height="500"
								/>
								<Carousel.Caption>
									<h3>First slide label</h3>
									<p>
										Nulla vitae elit libero, a pharetra augue mollis interdum.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/vps/wordpress.gif"
									alt="Second slide"
									height="500"
								/>

								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src="/images/vps/Animation.gif"
									alt="Third slide"
									height="500"
								/>

								<Carousel.Caption>
									<h3>Third slide label</h3>
									<p>
										Praesent commodo cursus magna, vel scelerisque nisl
										consectetur.
									</p>
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}
