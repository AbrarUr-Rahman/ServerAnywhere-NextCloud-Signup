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
import { BsPersonLinesFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { FaPhoneAlt } from "react-icons/fa";

import axios from "axios";
// import swal from "sweetalert";
// import { AdminContext } from "../../context/AdminContext";
// import { useContext, useEffect, useState } from "react";

const SignupPage = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);
	// const [user, setUser] = useState({
	// 	name: "",
	// 	email: "",
	// 	password: "",
	// });
	// let name, value;
	// const handleInputs = (e) => {
	// 	e.preventDefault();
	// 	console.log(e);
	// 	name = e.target.name;
	// 	value = e.target.value;

	// 	setUser({ ...user, [name]: value });
	// };
	// useEffect(() => {
	// 	axios
	// 		.post("https://glacial-refuge-00597.herokuapp.com/api/user/signup", {
	// 			name: "any",
	// 			email: "abc@gmail.com",
	// 			password: "123456",
	// 		})
	// 		.then((res) => console.log(res.data));
	// }, []);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	console.log({ name, email, password });

	const handleName = (e) => {
		setName(e.target.value);
	};
	const handleEmail = (e) => {
		setEmail(e.target.value);
	};
	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleApi = (e) => {
		e.preventDefault();
		console.log({ name, email, password });
		axios
			// .post("http://103.191.240.74/api/user/signup", {
			.post("http://localhost:3000/api/user/signup", {
				name: name,
				email: email,
				password: password,
			})
			.then((result) => {
				console.log(result.data);
				const { token } = result.data;
				localStorage.setItem("token", token);
				navigate("/login");
				// alert("sign up success");
			})
			.catch((error) => {
				alert("service error");
				console.log(error);
			});
	};
	const handleApi1 = (e) => {
		e.preventDefault();
		var username = "admin";
		var password01 = "hAO9qAeDaudMILEwGzoRkdnCbbnxXP8p";

		const token = `${username}:${password01}`;
		const encodedToken = Buffer.from(token).toString("base64");

		console.log({ name, email, password });
		let axiosConfig = {
			headers: {
				Authorization: "Basic " + encodedToken,
				// Authorization: "Basic " + token,
				
			},
		};
		axios
			// .post(
			// 	"http://localhost:3000/api/clouduser/signup/",
			// 	{
			// .post("http://103.191.240.74/api/user/signup", {
			.post(
				"http://103.191.240.74:81/api/admin/client/create",
				{
					first_name: name,
					email: email,
					
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
							{/* <InputGroup>
								<InputGroup.Text
									id="basic-addon1"
									className="bg-dark border-0 text-white"
								>
									<FaPhoneAlt />
								</InputGroup.Text>
								<Form.Control
									style={{ textTransform: "lowercase" }}
									className="inputBackground"
									autoComplete="off"
									value={user.phone}
									onChange={handleInputs}
									placeholder="phone number"
									aria-label="Phonenumber"
									type="number"
									// required
									aria-describedby="basic-addon1"
									name="phone"
								/>
							</InputGroup>
							<br /> */}
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
								<Link className="text-decoration-none forgetPass" to="/login">
									<p>Login</p>
								</Link>
							</Form.Group>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignupPage;
