import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Header from "../common/header";
import Footer from "../common/footer";
import { FaUserAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { FaFolder } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { MdShortcut } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { FaCube } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { RiQuestionnaireLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Client() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}
	}, []);

	return (
		<div>
			<Header />
			<div>
				<Button
					onClick={() => {
						localStorage.removeItem("token");
						window.location.reload(false);
					}}
				>
					Logout
				</Button>
				{/* <button onClick={() => window.location.reload(false)}>
					Click to reload!
				</button> */}
			</div>
			<section id="client">
				<div className="container px-0 pt-5 client-text">
					<div className="row">
						<div className="col-3">
							<Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen>
								<Accordion.Item eventKey="0">
									<Accordion.Header>
										<FaUserAlt className="me-3 mb-1" />
										User Info
									</Accordion.Header>
									<Accordion.Body>
										<div className="row">
											<div className="col-6">Name:</div>
											<div className="col-6">Towhid</div>
										</div>
										<div className="row">
											<div className="col-6">Customer ID:</div>
											<div className="col-6">165654</div>
										</div>
										<div className="row">
											<div className="col-6">User ID:</div>
											<div className="col-6">towhid954</div>
										</div>
										<div className="row">
											<div className="col-6">Account Status:</div>
											<div className="col-6">Active</div>
										</div>
										<div className="row">
											<div className="col-6">Expiry Date:</div>
											<div className="col-6">Jan 1, 2023</div>
										</div>
										<div className="row">
											<div className="col-6">Package:</div>
											<div className="col-6">Gold(40Mbps)</div>
										</div>
										<div className="row">
											<div className="col-6">Monthly Plan:</div>
											<div className="col-6">1000tk</div>
										</div>
										<div className="row">
											<div className="col-6">Contact:</div>
											<div className="col-6">099216512</div>
										</div>
										<div className="row">
											<div className="col-6">Address:</div>
											<div className="col-6">Mirpur, Dhaka</div>
										</div>
									</Accordion.Body>
									<div
										className="d-grid px-4 py-3"
										style={{ background: "#f4e4ff" }}
									>
										<Button size="lg" className="client-btn p-0">
											<FiEdit className="me-3 mb-1" />
											Update
										</Button>
									</div>
								</Accordion.Item>
								<br />
								<Accordion.Item eventKey="1">
									<Accordion.Header>
										<FaFolder className="me-3 mb-1" />
										Contacts
									</Accordion.Header>
									<Accordion.Body>No contact found.</Accordion.Body>
									<div
										className="d-grid px-4 py-3"
										style={{ background: "#f4e4ff" }}
									>
										<Button size="lg" className="client-btn p-0">
											<AiOutlinePlus className="me-3 mb-1" />
											Create New Contacts
										</Button>
									</div>
								</Accordion.Item>
								<br />
								<Accordion.Item eventKey="2">
									<Accordion.Header>
										<MdShortcut className="me-3 mb-1" />
										Shortcuts
									</Accordion.Header>
									<Accordion.Body className="p-0">
										<div className="row mx-0 p-2">
											<div className="col-10">Order New Services</div>
											<div className="col">
												<FaShoppingCart />
											</div>
										</div>
										<hr />
										<div className="row mx-0 p-2">
											<div className="col-10">Register a New Domain</div>
											<div className="col">
												<BsGlobe />
											</div>
										</div>
										<hr />
										<div className="row mx-0 p-2">
											<div className="col-10">Logout</div>
											<div className="col">
												<BiArrowBack />
											</div>
										</div>
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
						<div className="col">
							<div className="row">
								<ul className="client-services">
									<li>
										<h2>0</h2>
										Server
										<div className="bg-img">
											<FaCube />
										</div>
										<hr style={{ color: "#eb210c" }} />
									</li>
									<li>
										<h2>0</h2>
										Game
										<div className="bg-img">
											<FaGlobe />
										</div>
										<hr style={{ color: "#b3ad00" }} />
									</li>
									<li>
										<h2>0</h2>
										Ticket
										<div className="bg-img">
											<SiWechat />
										</div>
										<hr style={{ color: "#ef00ff" }} />
									</li>
									<li>
										<h2>0</h2>
										Invoices
										<div className="bg-img">
											<FaMoneyBillWaveAlt />
										</div>
										<hr style={{ color: "#001fff" }} />
									</li>
								</ul>
							</div>
							<div className="row mx-0 mt-3">
								<div className="col-6 ps-0">
									<div className="row mx-0">
										<Card className="remove-design px-0">
											<Card.Header className="movetext">
												<span>Available Credit</span>
												<Button variant="primary" className="client-btn">
													<AiOutlinePlus />
													Add Funds
												</Button>
											</Card.Header>
											<Card.Body>
												<Card.Title>TK 0.00 BDT</Card.Title>
												{/* <Card.Text></Card.Text> */}
											</Card.Body>
											<Card.Footer className="text-end">
												<Button variant="primary" className="client-btn">
													View All <AiOutlinePlus />
												</Button>
											</Card.Footer>
										</Card>
									</div>
									<div className="row mx-0 mt-4">
										<Card className="remove-design px-0">
											<Card.Header className="movetext">
												<span>Support Tickets</span>
												<Button variant="primary" className="client-btn">
													<AiOutlinePlus />
													New Ticket
												</Button>
											</Card.Header>
											<Card.Body>
												<div className="text-start border-bottom mb-2 pb-2">
													#846546- name server issue{" "}
													<span
														className="bg-secondary"
														style={{ fontSize: "10px", padding: "1px" }}
													>
														closed
													</span>
													<p>Last Updated: 01.02.2022 (10.30)</p>
												</div>
												<div className="text-start border-bottom mb-2 pb-2">
													#846546- name server issue{" "}
													<span
														className="bg-secondary"
														style={{ fontSize: "10px", padding: "1px" }}
													>
														closed
													</span>
													<p>Last Updated: 01.02.2022 (10.30)</p>
												</div>
												<div className="text-start border-bottom mb-2 pb-2">
													#846546- name server issue{" "}
													<span
														className="bg-secondary"
														style={{ fontSize: "10px", padding: "1px" }}
													>
														closed
													</span>
													<p>Last Updated: 01.02.2022 (10.30)</p>
												</div>
											</Card.Body>
											<Card.Footer className="text-end"></Card.Footer>
										</Card>
									</div>
								</div>
								<div className="col-6 pe-0">
									<div className="row mx-0">
										<Card className="remove-design px-0">
											<Card.Header className="movetext">
												<span>Refer A Friend</span>
												<Button variant="primary" className="client-btn">
													<FaRegCopy />
													Copy Link
												</Button>
											</Card.Header>
											<Card.Body>
												{/* <Card.Title>TK 0.00 BDT</Card.Title> */}
												<div className="row">
													<div className=" col border border-secondary py-1 px-1 ">
														Click <br /> 0
													</div>
													<div className="col-1"></div>
													<div className=" col border border-secondary py-1 px-1 ">
														Sign up <br /> 0
													</div>
													<div className="col-1"></div>
													<div className=" col border border-secondary py-1 px-1">
														Earned <br /> 0
													</div>
												</div>
												<Card.Text className="text-dark">
													Earned TK 561.00 BDT Credit!
												</Card.Text>
												<Link to="/">https://mui.com/</Link>
											</Card.Body>
											<Card.Footer className="text-end"></Card.Footer>
										</Card>
									</div>
									<div className="row mx-0 mt-4">
										<Card className="remove-design px-0">
											<Card.Header className="movetext">
												<span>Recent News</span>
												<Button variant="primary" className="client-btn">
													<FaRegCopy />
													Copy Link
												</Button>
											</Card.Header>
											<Card.Body>
												<div className="text-start border-bottom mb-2 pb-2">
													#846546- name server issue{" "}
													<span
														className="bg-secondary"
														style={{ fontSize: "10px", padding: "1px" }}
													>
														closed
													</span>
													<p>Last Updated: 01.02.2022 (10.30)</p>
												</div>
											</Card.Body>
											<Card.Footer className="text-end"></Card.Footer>
										</Card>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}
