import React from "react";
// import Button from "react-bootstrap/Button";

export default function Banner(props) {
	return (
		<div id="banner" style={{ paddingTop: "60px" }}>
			<div className="container">{props.children}</div>
		</div>
	);
}
