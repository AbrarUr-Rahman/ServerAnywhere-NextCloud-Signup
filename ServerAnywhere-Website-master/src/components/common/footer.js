import React from "react";
import { FiTwitter } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";
import { SiTiktok } from "react-icons/si";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
	return (
		<div id="footer">
			<div className="container header-width">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-md-6 col-sm-8 col-9 payment-method">
						<div className="container">
							{/* footer logo start */}
							<div className="row mb-5 logo justify-content-center">
								<div className="text-center px-0">
									<img
										src="/images/brand/new-main-logo.png"
										width="250px"
										height="85px"
										alt="error"
									/>
								</div>
							</div>
							{/* footer logo end */}

							{/* payment method start */}
							<div className="row text-center">
								<div className="col me-2 ">
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/visa.webp"
												width="100%"
												height="80%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/paypal.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/discover.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/apple_pay.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/bitcoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/usdcoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/mastercard.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/american.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/g_pay.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/paysafe.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/dogecoin.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
									<div className="row mb-2 payment">
										<div className="col px-0">
											<img
												src="/images/footer/eternic.webp"
												width="100%"
												alt="error"
											/>
										</div>
									</div>
								</div>
							</div>
							{/* payment method end */}
						</div>
					</div>
					<div className="col-lg-1"></div>

					<div className="col-lg-8 footer-links">
						<div className="row me-0 text-uppercase">
							{/* company link start */}
							{/* <div className="col-lg-3 col-md-4 col-sm-12 text-white">
								<ul className="footer-dropdown">
									<li className="footer-title">
										<span> COMPANY</span>
										<ul className="footer-item">
											<li>
												<a href="/">about us</a>
											</li>
											<li>
												<a href="/">faq</a>
											</li>
											<li>
												<a href="/">why serveranywhere</a>
											</li>
											<li>
												<a href="/">partners</a>
											</li>
											<li>
												<a href="/">jobs</a>
											</li>
											<li>
												<a href="/">blog</a>
											</li>
											<li>
												<a href="/">privacy policy</a>
											</li>
											<li>
												<a href="/">tos</a>
											</li>
										</ul>
									</li>
								</ul>
							</div> */}
							<div className="col-md-3 col-sm-12 text-white">
								<span
									class="footer-title"
									data-bs-toggle="collapse"
									href="#collapse1"
									aria-expanded="false"
									aria-controls="collapse1"
								>
									COMPANY
								</span>
								<div class="collapse" id="collapse1">
									<div class="card-body">
										<ul className="footer-item">
											<li>
												<a href="/">about us</a>
											</li>
											<li>
												<a href="/">faq</a>
											</li>
											<li>
												<a href="/">why serveranywhere</a>
											</li>
											<li>
												<a href="/">partners</a>
											</li>
											<li>
												<a href="/">jobs</a>
											</li>
											<li>
												<a href="/">blog</a>
											</li>
											<li>
												<a href="/">privacy policy</a>
											</li>
											<li>
												<a href="/">tos</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-12 text-white">
								<span
									class="footer-title"
									data-bs-toggle="collapse"
									href="#collapse2"
									aria-expanded="false"
									aria-controls="collapse2"
								>
									Services
								</span>
								<div class="collapse" id="collapse2">
									<div class="card-body">
										<ul className="footer-item">
											<li>
												<a href="/">Minecraft</a>
											</li>
											<li>
												<a href="/">Game Server</a>
											</li>
											<li>
												<a href="/">Dedicated</a>
											</li>
											<li>
												<a href="/">Web Server</a>
											</li>
											<li>
												<a href="/">Mobile Hosting</a>
											</li>
											<li>
												<a href="/">Discord BOT</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-md-3 col-sm-12 text-white">
								<span
									class="footer-title"
									data-bs-toggle="collapse"
									href="#collapse3"
									aria-expanded="false"
									aria-controls="collapse3"
								>
									Customers
								</span>
								<div class="collapse" id="collapse3">
									<div class="card-body">
										<ul className="footer-item">
											<li>
												<a href="/">Client Area</a>
											</li>
											<li>
												<a href="/">Knowledgebase</a>
											</li>
											<li>
												<a href="/">Get 24/7 Support</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* company link end */}

							{/* social link start */}
							<div className="col-md-3 col-sm-12 text-white">
								{/* <ul className="footer-dropdown">
									<li className="footer-title">
										<span>Social</span>
										<ul className="footer-social">
											<li>
												<a href="/">
													<FiTwitter />
												</a>
											</li>
											<li>
												<a href="/">
													<TbBrandDiscord />
												</a>
											</li>
											<li>
												<a href="/">
													<SiTiktok />
												</a>
											</li>
											<li>
												<a href="/">
													<FiYoutube />
												</a>
											</li>
											<li>
												<a href="/">
													<FiInstagram />
												</a>
											</li>
											<li>
												<a href="/">
													<FiFacebook />
												</a>
											</li>
										</ul>
									</li>
								</ul> */}
								<span
									class="footer-title"
									data-bs-toggle="collapse"
									href="#collapse4"
									aria-expanded="false"
									aria-controls="collapse4"
								>
									Social
								</span>
								<div class="collapse" id="collapse4">
									<div class="card-body">
										<ul className="footer-social">
											<li>
												<a href="/">
													<FiTwitter />
												</a>
											</li>
											<li>
												<a href="/">
													<TbBrandDiscord />
												</a>
											</li>
											<li>
												<a href="/">
													<SiTiktok />
												</a>
											</li>
											<li>
												<a href="/">
													<FiYoutube />
												</a>
											</li>
											<li>
												<a href="/">
													<FiInstagram />
												</a>
											</li>
											<li>
												<a href="/">
													<FiFacebook />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							{/* social link end */}
						</div>
					</div>
				</div>
				<div className="row mx-0">
					<div className="col copyright">
						<footer className="py-5 text-center">
							Copyright 2022 &copy; ServerAnywhere.com. All rights reserved.
						</footer>
					</div>
				</div>
			</div>
		</div>
	);
}
