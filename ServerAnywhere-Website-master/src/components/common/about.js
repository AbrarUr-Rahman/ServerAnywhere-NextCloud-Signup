import React from "react";

export default function About(Props) {
	return (
		<div id="about">
			<div className="container">{Props.children}</div>
		</div>
	);
}
