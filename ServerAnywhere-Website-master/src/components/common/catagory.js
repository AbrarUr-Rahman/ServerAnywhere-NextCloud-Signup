import React from "react";
import { Link } from "react-router-dom";
import "../common/common.css";

export default function Catagory() {
	return (
		<div id="catagory" style={{ paddingTop: "60px" }}>
			<div className="container">
				<div className="row pb-3">
					<div className="col">
						<div className="text-center">
							<h1 className="section-title pb-5">
								Choose which server hosting do you need ?
							</h1>
						</div>
					</div>
				</div>

				<div className="row catagory-item">
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/vps" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/vps-server.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>VPS SERVERS</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/minecraft" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/minecraft.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Minecraft</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/rdp" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/rdp.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Vertual PC / RDP</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="//bonghost.com/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/web.jpeg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>WEB HOSTING</p>
						</Link>
					</div>

					{/* <div className="py-4"></div> */}

					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/storage" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/storage.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Storage</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/email.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Mail server</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/dedicated" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/dedicated.png"
								alt="logo-error"
								loading="lazy"
							/>
							<p>Dedicated Server</p>
						</Link>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center">
						<Link to="/minecraft" className="zoom">
							<img
								width="100%"
								height="138"
								src="/images/catagory/other.jpg"
								alt="logo-error"
								loading="lazy"
							/>
							<p>GAME Servers</p>
						</Link>
					</div>
				</div>
			</div>
			<div style={{ paddingTop: "60px" }}>
				<hr style={{ color: "white", margin: "0" }} />
			</div>
		</div>
	);
}
