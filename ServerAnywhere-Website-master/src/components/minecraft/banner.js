import React from "react";
import { TbCloudLockOpen } from "react-icons/tb";
import { TbRocket } from "react-icons/tb";
import { RiGitBranchLine } from "react-icons/ri";
import { BsGlobe2 } from "react-icons/bs";
export default function Banner() {
	return (
		<div>
			<div id="minecraft">
				<section className="minecraft-container">
					<div className="minecraft-banner"></div>
					<div className="bg-overlay">
						<div className="container">
							<div className="row justify-content-center minecraft-text">
								<div className="col-12 ">
									<div className="text-center">
										<h4 className="section-title text-white mb-3">
											Game Hosting <br /> by <br />
											ServerAnywhere
										</h4>
										<p className="text-white-50 mx-auto mb-0">
											Quality &amp; Affordable hosting for everyone
										</p>

										<div className="mt-4">
											<a
												href="//my.forgesolutions.net/store"
												className="btn btn-primary mx-1"
											>
												Get Started
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="minecraft-card pb-5">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
								<div className="services serv-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
									<span className="h1 icon2 text-primary pb-4">
										<TbCloudLockOpen />
									</span>
									<div className="p-0 pt-4 content">
										<h5>Strong Uptime</h5>
										<p className="text-muted mb-0 pt-2">
											Hosted inside datacenters with atleast N+1 redundancy
										</p>
									</div>
									<div className="big-icon icon-right">
										<TbCloudLockOpen />
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
								<div className="services serv-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
									<span className="h1 icon2 text-primary">
										<TbRocket />
									</span>
									<div className="p-0 pt-4 content">
										<h5>Low-Latency</h5>
										<p className="text-muted mb-0 pt-2">
											Our Bangladeshi nodes are peered with BDIX &amp; AIX for
											low latency.
										</p>
									</div>
									<div className="big-icon icon-right">
										<TbRocket />
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
								<div className="services serv-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
									<span className="h1 icon2 text-primary">
										<RiGitBranchLine />
									</span>
									<div className="p-0 pt-4 content">
										<h5>Security</h5>
										<p className="text-muted mb-0 pt-2">
											Our systems are constantly monitored for potential
											threats.
										</p>
									</div>
									<div className="big-icon icon-right">
										<RiGitBranchLine />
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
								<div className="services serv-primary rounded p-4 bg-light position-relative overflow-hidden border-0">
									<span className="h1 icon2 text-primary">
										<BsGlobe2 />
									</span>
									<div className="p-0 pt-4 content">
										<h5>Multi-Location</h5>
										<p className="text-muted mb-0 pt-2">
											Servers available in Dhaka, Singapore, Mumbai &amp;
											Chicago
										</p>
									</div>
									<div className="big-icon icon-right">
										<BsGlobe2 />
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
