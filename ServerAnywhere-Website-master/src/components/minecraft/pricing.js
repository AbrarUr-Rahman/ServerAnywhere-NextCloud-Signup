import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Axios from "axios";

function Pricing() {
	return (
		<div id="pricing">
			<div className="container">
				<div className="row">
					<div className="section-title pb-5">plans and pricing</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-7 col-10 pb-5">
						<Card>
							<Card.Body>
								<Card.Title style={{ fontSize: "30px" }}>Minecraft</Card.Title>
								<Card.Text className="price pt-4">
									<span>৳ 300</span>/ per month
								</Card.Text>
								<div className="d-grid gap-2 mx-4 pb-5">
									<Link to="/plan">
										<Button size="lg">View Plans</Button>
									</Link>
								</div>
								<div className="plan-text">
									99.9% Uptime*
									<br />
									DDoS Protection*
									<br />
									BDIX Connectivity*
									<br />
									Web Control Panel
								</div>
							</Card.Body>
						</Card>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-7 col-10 pb-5">
						<Card>
							<Card.Body>
								<Card.Title style={{ fontSize: "30px" }}>
									Other Games
								</Card.Title>
								<Card.Text className="price pt-4">
									<span>৳ 300</span>/ per month
								</Card.Text>
								<div className="d-grid gap-2 mx-4 pb-5">
									<Link to="/plan">
										<Button size="lg">View Plans</Button>
									</Link>
								</div>
								<div className="plan-text">
									99.9% Uptime*
									<br />
									DDoS Protection*
									<br />
									BDIX Connectivity*
									<br />
									Web Control Panel
								</div>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Pricing;
