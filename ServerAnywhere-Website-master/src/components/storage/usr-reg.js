import React from "react";
import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useState } from "react";
// import ".././Login.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function UserReg() {
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [quota, setQuota] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	// console.log({ name, email, quota, password });

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handleQuota = (e) => {
		setQuota(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleApi = (e) => {
		e.preventDefault();
		var username = "abrar";
		var password01 = "abrar123";

		const token = `${username}:${password01}`;
		const encodedToken = Buffer.from(token).toString("base64");

		console.log({ name, email, quota, password });
		let axiosConfig = {
			headers: {
				Authorization: "Basic " + encodedToken,
				// Authorization: "Basic " + token,
				"OCS-APIRequest": true,
			},
		};
		axios
			// .post(
			// 	"http://localhost:3000/api/clouduser/signup/",
			// 	{
			// .post("http://103.191.240.74/api/user/signup", {
			.post(
				"http://103.191.240.104/ocs/v1.php/cloud/users",
				{
					name: name,
					email: email,
					quota: quota,
					password: password,
				},
				axiosConfig
			)
			.then((result) => {
				console.log(result.data);
				result.save();
				// const { token } = result.data;
				// localStorage.setItem("token", token);
				// navigate("/login");
				alert("sign up success");
				navigate(
					"http://103.191.240.104/index.php/login?redirect_url=/index.php/apps/dashboard/"
				);
			})
			.catch((error) => {
				alert("service error");
				console.log(error);
			});
	};

	return (
		<div id="banner" style={{ paddingTop: "60px" }}>
			<div class="container mt-5 about-style" id="serviceid">
				<div class="row justify-content-center">
					<div class="col-md-10 col-12-mx-auto">
						<h1 class="text-center section-title">Sign Up For Next Cloud!! </h1>
						<p class="text-center section-text-title m-3">
							We'll be Happy to Help you
						</p>
						<div class="row">
							<div class="col-md-6 col-12 mx-auto">
								{/* <form>
									<div class="form-group mb-4">
										<label
											for="exampleInputPassword1"
											className="text-white mb-2"
										>
											NAME
										</label>
										<input
											type="text"
											class="form-control"
											// id="exampleInputPassword1"
											value={name}
											onChange={handleName}
											placeholder="name"
											name="name"
										/>
									</div>

									<div class="form-group mb-4">
										<label
											for="exampleInputPassword1"
											className="text-white mb-2"
										>
											EMAIL
										</label>
										<input
											type="email"
											class="form-control"
											// id="exampleInputPassword1"
											value={email}
											onChange={handleEmail}
											placeholder="email"
											name="email"
										/>
									</div>
									<div class="form-group mb-4">
										<label
											for="exampleInputPassword1"
											className="text-white mb-2"
										>
											STORAGE
										</label>
										<input
											type="text"
											class="form-control"
											// id="exampleInputPassword1"
											value={quota}
											onChange={handleQuota}
											placeholder="quota"
											name="quota"
										/>
									</div>
									<div class="form-group mb-4">
										<label for="exampleInputEmail1" className="text-white mb-2">
											PASSWORD
										</label>
										<input
											type="password"
											class="form-control"
											// id="exampleInputEmail1"
											aria-describedby="emailHelp"
											value={password}
											onChange={handlePassword}
											placeholder="password"
											name="password"
										/>
									</div>

									<button
										class="btn btn-primary"
										onClick={handleApi}
										type="submit"
									>
										Submit
									</button>
								</form> */}
								<form>
									<InputGroup>
										<InputGroup.Text
											id="basic-addon1"
											className="bg-dark border-0 text-white"
										>
											<BsPersonLinesFill />
										</InputGroup.Text>
										<Form.Control
											style={{ textTransform: "lowercase" }}
											className="inputBackground"
											autoComplete="off"
											// value={user.name}
											// onChange={handleInputs}
											value={name}
											onChange={handleName}
											placeholder="user name"
											aria-label="Username"
											type="text"
											required
											aria-describedby="basic-addon1"
											name="name"
										/>
									</InputGroup>
									<br />
									<InputGroup>
										<InputGroup.Text
											id="basic-addon1"
											className="bg-dark border-0 text-white"
										>
											<FaEnvelope />
										</InputGroup.Text>
										<Form.Control
											style={{ textTransform: "lowercase" }}
											className="inputBackground"
											autoComplete="off"
											// value={user.email}
											// onChange={handleInputs}
											value={email}
											onChange={handleEmail}
											placeholder="Email"
											aria-label="Usermail"
											type="email"
											required
											aria-describedby="basic-addon1"
											name="email"
										/>
									</InputGroup>
									<br />
									<InputGroup>
										<InputGroup.Text
											id="basic-addon1"
											className="bg-dark border-0 text-white"
										>
											{/* <FaPhoneAlt /> */}
										</InputGroup.Text>
										<Form.Control
											style={{ textTransform: "lowercase" }}
											className="inputBackground"
											autoComplete="off"
											value={quota}
											onChange={handleQuota}
											placeholder="quota"
											aria-label="Phonenumber"
											type="text"
											aria-describedby="basic-addon1"
											name="quota"
										/>
									</InputGroup>
									<br />
									<InputGroup className="mb-3">
										<InputGroup.Text className="bg-dark border-0 text-white">
											<FaLock />
										</InputGroup.Text>
										<Form.Control
											aria-label="Password"
											className="inputBackground"
											placeholder="password"
											autoComplete="off"
											// value={user.password}
											// onChange={handleInputs}
											value={password}
											onChange={handlePassword}
											type={visiblePassword ? "text" : "password"}
											required
											name="password"
										/>
										<InputGroup.Text
											className="bg-dark text-center border-0 cursor-pointer text-white"
											role="button"
											type="button"
											onClick={() => setVisiblePassword(!visiblePassword)}
										>
											{visiblePassword ? <FaEye /> : <FaEyeSlash />}
										</InputGroup.Text>
									</InputGroup>

									<Form.Group className="mb-3" controlId="formBasicCheckbox">
										<Link
											className="text-decoration-none forgetPass"
											to="/admin/forgetpassword"
										>
											<p>Forgot password?</p>
										</Link>
									</Form.Group>
									<div className="mx-auto text-center">
										<Button
											style={{ backgroundColor: "#f74545" }}
											className="button-34 ps-5 pe-5 pt-2 pb-2"
											onClick={handleApi}
											type="submit"
										>
											Sign Up
										</Button>
									</div>
									<Form.Group className="my-3" controlId="formBasicCheckbox">
										Already Have an Account?
										<Link
											className="text-decoration-none forgetPass"
											to="/login"
										>
											<p>Login</p>
										</Link>
									</Form.Group>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
