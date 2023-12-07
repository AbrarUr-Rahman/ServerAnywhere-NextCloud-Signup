import { Button } from "@mui/material";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useState } from "react";
import ".././Login.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import axios from "axios";
// import swal from "sweetalert";
// import { AdminContext } from "../../context/AdminContext";
// import { useContext, useEffect, useState } from "react";

const Login = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	// const [allEntry, setAllEntry] = useState([]);

	// const submitForm = (e) => {
	// 	e.preventDefault();

	// 	const newEntry = { email: email, password: password };

	// 	setAllEntry([...allEntry, newEntry]);
	// 	console.log(allEntry);
	// };
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleApi = (e) => {
		e.preventDefault();
		// console.log({ email, password });
		axios
			// .post("http://103.191.240.74/api/user/signin", {
			.post("http://localhost:3000/api/user/signin", {
				email: email,
				password: password,
			})
			.then((result) => {
				console.log(result.data);
				const { token } = result.data;
				//console.log(result.data.token);
				localStorage.setItem("token", token);
				const role = result.data.user.role;
				// console.log(role);
				// console.log(result.data.user._id);
				if (role === "admin") {
					navigate("/admin");
				} else {
					navigate("/client");
				}

				//navigate("/admin");

				//navigate("/client");
				// alert("success");
			})
			.catch((error) => {
				alert("service error");
				console.log(error);
			});
	};

	return (
		<div>
			<div className="handleTheLoginBody">
				<div className="container mx-auto">
					<div className="pt-5 forCard  w-50 p-5 rounded mx-auto">
						<div className="mx-auto text-center">
							<img
								src="./images/brand/new-main-logo.jpg"
								className="handleLogoLogin rounded-pill"
								alt="logo"
							/>
						</div>
						<hr />
						<div className="mt-4 pt-2">
							{/* <form onSubmit={submitForm}> */}
							<form>
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
										value={email}
										onChange={handleEmail}
										// onChange={(e) => setEmail(e.target.value)}
										placeholder="Email"
										aria-label="Usermail"
										type="email"
										required
										aria-describedby="basic-addon1"
										name="email"
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
										value={password}
										onChange={handlePassword}
										// onChange={(e) => setPassword(e.target.value)}
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
										Login
									</Button>
								</div>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Link
										className="text-decoration-none forgetPass"
										to="/signup"
									>
										<p>Sign Up?</p>
									</Link>
								</Form.Group>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
