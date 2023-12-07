import React from "react";
import "./common.css";
// import { IoMdArrowDropdown } from "react-icons/io";
import { RiQuestionnaireLine } from "react-icons/ri";
import { RiUserShared2Line } from "react-icons/ri";
import { GoNote } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// function BasicExample() {
// 	return (
// 		<Navbar style={{ background: "#1d002f" }} expand="lg">
// 			<Container className="header-width">
// 				<Navbar.Brand className="me-5">
// 					<Link to="/">
// 						<img
// 							src="/images/brand/new-main-logo.png"
// 							width="145"
// 							height="50"
// 							className="d-inline-block align-top"
// 							alt="React Bootstrap logo"
// 						/>
// 					</Link>
// 				</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="basic-navbar-nav" />
// 				<Navbar.Collapse id="basic-navbar-nav">
// 					<Nav className="me-auto text-uppercase">
// 						<NavDropdown
// 							title="Minecraft"
// 							id="basic-nav-dropdown"
// 							className="me-4"
// 						>
// 							<NavDropdown.Item>Action</NavDropdown.Item>
// 							<NavDropdown.Item>Another action</NavDropdown.Item>
// 							<NavDropdown.Item>Something</NavDropdown.Item>
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item>Separated link</NavDropdown.Item>
// 						</NavDropdown>
// 						<NavDropdown
// 							title="Minecraft"
// 							id="basic-nav-dropdown"
// 							className="me-4"
// 						>
// 							<NavDropdown.Item>Action</NavDropdown.Item>
// 							<NavDropdown.Item>Another action</NavDropdown.Item>
// 							<NavDropdown.Item>Something</NavDropdown.Item>
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item>Separated link</NavDropdown.Item>
// 						</NavDropdown>
// 						<NavDropdown
// 							title="Minecraft"
// 							id="basic-nav-dropdown"
// 							className="me-4"
// 						>
// 							<NavDropdown.Item>Action</NavDropdown.Item>
// 							<NavDropdown.Item>Another action</NavDropdown.Item>
// 							<NavDropdown.Item>Something</NavDropdown.Item>
// 							<NavDropdown.Divider />
// 							<NavDropdown.Item>Separated link</NavDropdown.Item>
// 						</NavDropdown>
// 						<div style={{ background: "red" }}>
// 							<Nav.Link>
// 								<Link to="/vps">
// 									<div className="control-panel-icon">
// 										<RiQuestionnaireLine />
// 										<NavDropdown
// 											title="Support"
// 											id="basic-nav-dropdown"
// 											className="me-4 control-panel-text"
// 										>
// 											<NavDropdown.Item>Action</NavDropdown.Item>
// 											<NavDropdown.Item>Another action</NavDropdown.Item>
// 											<NavDropdown.Item>Something</NavDropdown.Item>
// 											<NavDropdown.Divider />
// 											<NavDropdown.Item>Separated link</NavDropdown.Item>
// 										</NavDropdown>
// 									</div>
// 								</Link>
// 							</Nav.Link>
// 						</div>
// 					</Nav>
// 				</Navbar.Collapse>
// 			</Container>
// 		</Navbar>
// 	);
// }

// export default BasicExample;

export default function Header() {
	return (
		// <div id="header">
		// 	<div className="container header-width">
		// 		<div className="row">
		// 			<div className="col-xl-2 col-lg-2 pt-3">
		// 				<div className="header-logo">
		// 					<Link to="/">
		// 						<img
		// 							width="142"
		// 							height="50"
		// 							src="/images/brand/new-main-logo.png"
		// 							alt="logo-error"
		// 							loading="lazy"
		// 						/>
		// 					</Link>
		// 				</div>
		// 			</div>
		// 			<div className="col-xl-5 col-lg-5 px-0 pt-2">
		// 				<nav className="main-menu py-3">
		// 					<ul className="menu ps-0">
		// 						<li className="menu-item minecraft">
		// 							<Link to="/" className="menu-link">
		// 								MINECRAFT
		// 							</Link>
		// 							<span className="menu-arrow ps-2">
		// 								<IoMdArrowDropdown />
		// 							</span>
		// 							<ul className="sub-menu p-3">
		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/" className="row py-1">
		// 										<div className="col-3">
		// 											<img
		// 												className="img-fluid"
		// 												src="/images/menu/icon-java.svg"
		// 												alt="submenu_icon"
		// 												width="18"
		// 												height="18"
		// 												loading="lazy"
		// 											/>
		// 										</div>
		// 										<div className="col">Java</div>
		// 									</Link>
		// 								</li>
		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/" className="row py-1">
		// 										<div className="col-3">
		// 											<img
		// 												className="img-fluid"
		// 												src="/images/menu/icon-bedrock.svg"
		// 												alt="submenu_icon"
		// 												width="18"
		// 												height="18"
		// 												loading="lazy"
		// 											/>
		// 										</div>
		// 										<div className="col">Bedrock</div>
		// 									</Link>
		// 								</li>
		// 							</ul>
		// 						</li>

		// 						<li className="menu-item ps-4">
		// 							<Link to="/" className="menu-link">
		// 								Dedicated
		// 							</Link>
		// 							<span className="menu-arrow ps-2">
		// 								<IoMdArrowDropdown />
		// 							</span>
		// 							<ul className="sub-menu py-3 px-4">
		// 								<li className="sub-menu-item">
		// 									<Link
		// 										aria-current="page"
		// 										to="/dedicated"
		// 										className="py-1"
		// 									>
		// 										<div className="py-1">Dedicated Servers</div>
		// 									</Link>
		// 								</li>

		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/vps" className="py-1">
		// 										<div className="py-1">VPS Servers</div>
		// 									</Link>
		// 								</li>
		// 							</ul>
		// 						</li>

		// 						<li className="menu-item ps-4">
		// 							<Link to="/" className="menu-link">
		// 								Others Servers
		// 							</Link>
		// 							<span className="menu-arrow ps-2">
		// 								<IoMdArrowDropdown />
		// 							</span>
		// 							<ul className="sub-menu py-3 px-4">
		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/" className="py-1">
		// 										<div className="py-1">Mobile Hosting</div>
		// 									</Link>
		// 								</li>

		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/web" className="py-1">
		// 										<div className="py-1">Web Hosting</div>
		// 									</Link>
		// 								</li>

		// 								<li className="sub-menu-item">
		// 									<Link aria-current="page" to="/" className="py-1">
		// 										<div className="py-1">Discord BOT</div>
		// 									</Link>
		// 								</li>
		// 							</ul>
		// 						</li>
		// 					</ul>
		// 				</nav>
		// 			</div>
		// 			<div className="col-xl-3 col-lg-3 control-panel">
		// 				<ul className="px-0">
		// 					<li className="control-panel-item ">
		// 						<Link to="/">
		// 							<div className="control-panel-icon">
		// 								<RiQuestionnaireLine />
		// 							</div>
		// 							<div className="control-panel-text">Support</div>
		// 						</Link>
		// 						<ul className="sub-control py-3 px-4 text-center text-white">
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">Knowledgebase</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">get 24/7 Support</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">sales</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">faq</div>
		// 								</Link>
		// 							</li>
		// 						</ul>
		// 					</li>
		// 					<li className="control-panel-item ">
		// 						<Link to="/">
		// 							<div className="control-panel-icon">
		// 								<GoNote />
		// 							</div>
		// 							<div className="control-panel-text">Control Panel</div>
		// 						</Link>
		// 						<ul className="sub-control py-3 px-4 text-center text-white">
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">premium minecraft</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">budget minecraft</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">minecraft bedrock</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">other games</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">web hosting</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">vps control panel</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">Discord BOT</div>
		// 								</Link>
		// 							</li>
		// 						</ul>
		// 					</li>
		// 					<li className="control-panel-item ">
		// 						<Link to="/login">
		// 							<div className="control-panel-icon">
		// 								<RiUserShared2Line />
		// 							</div>
		// 							<div className="control-panel-text">Biling</div>
		// 						</Link>
		// 					</li>
		// 					<li className="control-panel-item ">
		// 						<Link to="/">
		// 							<div className="control-panel-icon">
		// 								<BsInfoCircle />
		// 							</div>
		// 							<div className="control-panel-text">info</div>
		// 						</Link>
		// 						<ul className="sub-control py-3 px-4 text-center text-white">
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">about us</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">why us</div>
		// 								</Link>
		// 							</li>

		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">partners</div>
		// 								</Link>
		// 							</li>
		// 							<li className="sub-control-item">
		// 								<Link aria-current="page" to="/" className="py-1">
		// 									<div className="py-1">blog</div>
		// 								</Link>
		// 							</li>
		// 						</ul>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 			<div className="path section-text text-start pt-5">
		// 				<p>Home / Selector</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>

		<nav className="navbar navbar-expand-lg" style={{ background: "#1d002f" }}>
			<div className="container header-width">
				<Link className="navbar-brand ms-3 me-5" to="/">
					<img
						src="/images/brand/new-main-logo.png"
						alt=""
						width="130"
						height="40"
					/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="text-white">
						<FaBars />
					</span>
				</button>
				<div
					className="collapse navbar-collapse main-menu"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item menu-item pe-3">
							<Link aria-current="page" to="/" className="nav-link">
								<div className="">Home</div>
							</Link>
						</li>
						<li className="nav-item dropdown menu-item minecraft pe-3">
							<Link aria-current="page" to="/minecraft" className="nav-link">
								<div className="">Minecraft</div>
							</Link>
							{/* <Link
								className="nav-link "
								to="/minecraft"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Minecraft
							</Link>
							<ul className="sub-menu p-3" aria-labelledby="navbarDropdown">
								<li className="sub-menu-item">
									<Link
										aria-current="page"
										to="/"
										className="row py-1 dropdown-item"
									>
							<div className="col-3">
											<img
												className="img-fluid"
												src="/images/menu/icon-java.svg"
												alt="submenu_icon"
												width="18"
												height="18"
												loading="lazy"
											/>
										</div>
							<div className="col">Java</div>
									</Link>
								</li>
								<li className="sub-menu-item">
									<Link
										aria-current="page"
										to="/"
										className="row py-1 dropdown-item"
									>
							<div className="col-3">
											<img
												className="img-fluid"
												src="/images/menu/icon-bedrock.svg"
												alt="submenu_icon"
												width="18"
												height="18"
												loading="lazy"
											/>
										</div>
							<div className="col">Bedrock</div>
									</Link>
								</li>
							</ul>
							 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<Link className="dropdown-item" to="/">
										Action
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/">
										Another action
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
							</ul> */}
						</li>
						<li className="nav-item dropdown pe-3">
							<Link
								className="nav-link dropdown-toggle"
								to="/"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dedicated
							</Link>
							<ul
								className="sub-menu py-3 px-4"
								aria-labelledby="navbarDropdown"
							>
								<li className="sub-menu-item">
									<Link aria-current="page" to="/dedicated" className="py-1">
										<div className="py-1 dropdown-item">Dedicated Servers</div>
									</Link>
								</li>

								<li className="sub-menu-item">
									<Link aria-current="page" to="/vps" className="py-1">
										<div className="py-1 dropdown-item">VPS Servers</div>
									</Link>
								</li>
							</ul>
						</li>
						<li className="nav-item dropdown pe-5">
							<Link
								className="nav-link dropdown-toggle"
								to="/"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Oters Server
							</Link>
							<ul
								className="sub-menu py-3 px-4"
								aria-labelledby="navbarDropdown"
							>
								<li className="sub-menu-item">
									<Link aria-current="page" to="/" className="py-1">
										<div className="py-1 dropdown-item">Mobile Hosting</div>
									</Link>
								</li>

								<li className="sub-menu-item">
									<Link aria-current="page" to="/web" className="py-1">
										<div className="py-1 dropdown-item">Web Hosting</div>
									</Link>
								</li>

								<li className="sub-menu-item">
									<Link aria-current="page" to="/" className="py-1">
										<div className="py-1 dropdown-item">Discord BOT</div>
									</Link>
								</li>
							</ul>
						</li>

						<div
							className="control-panel"
							style={{ width: "300px", background: "#1c2142" }}
						>
							<li className="nav-item control-panel-item">
								<Link to="/">
									<div className="control-panel-icon">
										<RiQuestionnaireLine />
									</div>
									<div className="control-panel-text">Support</div>
								</Link>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">Knowledgebase</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">get 24/7 Support</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">sales</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">faq</div>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item control-panel-item ">
								<Link to="/">
									<div className="control-panel-icon">
										<GoNote />
									</div>
									<div className="control-panel-text">Control Panel</div>
								</Link>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">premium minecraft</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">budget minecraft</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">minecraft bedrock</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">other games</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">web hosting</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">vps control panel</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">Discord BOT</div>
										</Link>
									</li>
								</ul>
							</li>
							<li className="nav-item control-panel-item ">
								<Link to="/login">
									<div className="control-panel-icon">
										<RiUserShared2Line />
									</div>
									<div className="control-panel-text">Biling</div>
								</Link>
							</li>
							<li className="nav-item control-panel-item ">
								<Link to="/">
									<div className="control-panel-icon">
										<BsInfoCircle />
									</div>
									<div className="control-panel-text">info</div>
								</Link>
								<ul className="sub-control py-3 px-4 text-center text-white">
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">about us</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">why us</div>
										</Link>
									</li>

									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">partners</div>
										</Link>
									</li>
									<li className="sub-control-item">
										<Link aria-current="page" to="/" className="py-1">
											<div className="py-1">blog</div>
										</Link>
									</li>
								</ul>
							</li>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
}
