import React from "react";

export default function Feature(Props) {
	return (
		<div id="feature">
			<div className="container common-width">
				<div className="row">
					<div className="section-title pb-3">Our Features</div>
				</div>
				{Props.children}
			</div>
		</div>
	);
}
