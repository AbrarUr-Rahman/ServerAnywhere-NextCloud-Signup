import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import LinearProgress from "@mui/material/LinearProgress";
const Progress = ({ done }) => {
	const [style, setStyle] = React.useState({});

	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`,
		};

		setStyle(newStyle);
	}, 1000);

	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	);
};

export default function VPSCompare() {
	return (
		<div id="compair">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-5 col-sm-12 col-12 px-0">
						<div className="small-title pb-4">DEDICATED GAME SERVERS</div>
						<div className="row mx-0">
							<div className="col-lg-5 col-md-5 col-sm-6 col-6">
								<div className="row mx-0 py-2">
									<div className="col-5 text-white">PERFORMANCE</div>
								</div>
								<div className="row mx-0 py-2">
									<div className="col-5 text-white">CUSTOMIZATION</div>
								</div>
								<div className="row mx-0 py-2">
									<div className="col-5 text-white">PRICE</div>
								</div>
							</div>
							<div className="col-lg-1 col-md-1 d-md-block d-sm-none d-none px-0"></div>
							<div className="col-lg-6 col-md-6 col-sm-5 col-6">
								<div className="row py-1 mx-0">
									<div className="col">
										<Progress done="60" />
									</div>
								</div>
								<div className="row py-1 mx-0">
									<div className="col">
										<Progress style={{ color: "red" }} done="80" />
									</div>
								</div>
								<div className="row py-1 mx-0">
									<div className="col">
										<Progress done="30" />
									</div>
								</div>
							</div>
						</div>
						<div className="row mx-0">
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">
									DEDICATED SERVER HARDWARE
								</div>
								<div className="section-text">
									<p>
										You have full control over all the hardware in the system
										ensuring all the resources can be used towards the services
										and games you are running. You can run anythin from web
										servers to control panels to any game server software you
										want.
									</p>
								</div>
							</div>
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">
									LARGER STORAGE CAPACITY
								</div>
								<div className="section-text">
									<p>
										Our dedicated servers come with a much larger storage
										capacity than VPS servers, these include ultra fast NVMe
										SSDs along with larger capacity HDDs.
									</p>
								</div>
							</div>
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">CUSTOMIZATION</div>
								<div className="section-text">
									<p>
										With the flexibility of options we provide for Dedicated
										servers, you can choose the configuration and setup you
										want, from being able to choose your own OS along with
										different CPU, RAM and Storage options.
									</p>
								</div>
							</div>
							<div>
								<a href="/vps">choose package</a>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-2 d-md-block d-sm-none d-none text-center">
						<div className="big-title">VS</div>
					</div>
					<div className="col-lg-5 col-md-5 col-sm-12 col-12 px-0">
						<div className="small-title pb-4">VPS SERVERS</div>
						<div className="row mx-0">
							<div className="col-lg-5 col-md-5 col-sm-6 col-6">
								<div className="row mx-0 py-1">
									<div className="col-5 text-white">PERFORMANCE</div>
								</div>
								<div className="row mx-0 py-1">
									<div className="col-5 text-white">CUSTOMIZATION</div>
								</div>
								<div className="row mx-0 py-1">
									<div className="col-5 text-white">PRICE</div>
								</div>
							</div>
							<div className="col-lg-1 col-md-1 d-md-block d-sm-none d-none px-0"></div>
							<div className="col-lg-6 col-md-6 col-sm-5 col-6">
								<div className="row py-1 px-0 mx-0">
									<div className="col">
										<Progress done="60" />
									</div>
								</div>
								<div className="row py-1 px-0 mx-0">
									<div className="col">
										<Progress style={{ color: "red" }} done="80" />
									</div>
								</div>
								<div className="row py-1 px-0 mx-0">
									<div className="col">
										<Progress done="30" />
									</div>
								</div>
							</div>
						</div>
						<div className="row mx-0">
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">
									CENTRAL US LOCATION
								</div>
								<div className="section-text">
									<p>
										Our VPS servers are hosted in Dallas, TX, meaning you have
										great latency to all the US and even Europe.
									</p>
								</div>
							</div>
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">
									VIRTUALIZOR CONTROL PANEL
								</div>
								<div className="section-text">
									<p>
										Our fully featured control panel allows you to control all
										aspects of your server along with full root SSH/SFTP access!
										You have full control over your servers setup and
										configuration but with this the easy to use control panel
										for reinstalling your OS or installing additional software
										with one click.
									</p>
								</div>
							</div>
							<div className="compair-text py-3">
								<div className="section-text-title pb-2">DAILY BACKUPS</div>
								<div className="section-text">
									<p>
										All of our VPS servers are automatically backed up every
										day, ensuring any bad configuration change or issue that
										could happen you are always able to keep your data secure.
									</p>
								</div>
							</div>
							<div>
								<a href="/vps">choose package</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
