import React from "react";
import { TbMessageDots } from "react-icons/tb";
import { BiUserPin } from "react-icons/bi";
import { VscSettingsGear } from "react-icons/vsc";

export default function Support() {
	return (
		<div id="support">
			<div className="container">
				<div className="row">
					<div className="section-title pb-3">
						Friendly and professional support
					</div>
					<div className="section-text">
						<p>
							Our VPS server experts are around 24/7 for providing any help you
							need with your VPS servers. Whilst our VPS servers are unmanaged,
							we can help you with any questions and point you in the right
							direction for any questions you may have.
						</p>
					</div>
				</div>
				<div className="row pt-5">
					<div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-3">
						<div className="message pb-3">
							<TbMessageDots />
						</div>
						<div className="section-text-title pb-3">24/7/365 SUPPORT</div>
						<div className="section-text">
							<p>
								We offer support every day, every hour of the year. With an
								average response time of only 20 minutes, rest assured that you
								can get help with your servers no matter what.
							</p>
						</div>
					</div>
					{/* <div className="col-1"></div> */}
					<div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-3">
						<div className="message pb-3">
							<BiUserPin />
						</div>
						<div className="section-text-title pb-3">24/7/365 SUPPORT</div>
						<div className="section-text">
							<p>
								Our support team has a variety of backgrounds covering pretty
								much everything from OS quirks to installing different software,
								we are always on hand to help you out.
							</p>
						</div>
					</div>
					{/* <div className="col-1"></div> */}
					<div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-3">
						<div className="message pb-3">
							<VscSettingsGear />
						</div>
						<div className="section-text-title pb-3">24/7/365 SUPPORT</div>
						<div className="section-text">
							<p>
								No one likes bots (Sorry if you are one), our staff are 100%
								human and on hand ready to help you out with any questions
								regarding your servers with us.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
