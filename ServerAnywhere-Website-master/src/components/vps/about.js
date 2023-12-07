import React from "react";

export default function VPSAbout() {
	return (
		<div>
			<div className="row">
				<div className="col-lg-5 col-md-5 col-sm-12 col-12 order-md-1 order-sm-3 about_img">
					<img
						src="/images/vps/webhosting.gif"
						alt="error"
						loading="lazy"
						width="100%"
						className="pt-5"
					/>
				</div>
				<div className="col-lg-1 d-lg-block d-md-none order-md-2 order-sm-2"></div>
				<div className="col-lg-6 col-md-7 col-sm-12 col-12 order-md-3 order-sm-1">
					<div className="section-title pb-5">About VPS servers</div>
					<div className="section-text text-white">
						<p>
							<b>Virtual Private Server (VPS)</b> hosting is where multiple
							websites use the same server but have their individual resource
							limits on RAM, bandwidth, and various other components. It also
							uses a hypervisor, which is a specialist software, to borrow
							resources from sites on the server if your site is maxed out while
							other sites aren&apos;t using their full available allocation.
						</p>
						<p className="py-3">
							Generally, VPS hosting is suited perfectly for small business
							websites or large personal sites that require decent resource
							limits. No one wants to have slow loading speeds, or even worse,
							have their site constantly crashing. This is the reason why VPS
							hosting works well- it&apos;s able to handle surges of traffic by
							remaining flexible and isn&apos;t too expensive to run.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
