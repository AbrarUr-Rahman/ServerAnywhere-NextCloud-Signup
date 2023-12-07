import React from "react";
import { useState, useEffect } from "react";
// import { Button, Form } from "semantic-ui-react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import axios from "axios";

export default function Create() {
	// const navigate = useNavigate();
	// const [Catagory, setCatagory] = useState("");
	// const [CPU, setCpu] = useState("");
	// const [RAM, setRam] = useState("");
	// const [OS, setOs] = useState("");
	// const [Storage, setStorage] = useState("");
	// const [Price, setPrice] = useState("");
	// // console.log(CPU);
	// const sendDataToAPI = () => {
	//   axios
	//     .post(`https://glacial-refuge-00597.herokuapp.com/api/vpsproduct`, {
	//       category: Catagory,
	//       processor: CPU,
	//       RAM: RAM,
	//       OS: OS,
	//       diskspace: Storage,
	//       price: Price,
	//     })
	//     .then((res) => {
	//       console.log(res.data);
	//       navigate("/admin/read");
	//     });
	// };

	const [values, setValues] = useState({
		price: "",
		categories: [],
		category: "",
		processor: "",
		RAM: "",
		OS: "",
		diskspace: "",
		formData: "",
		disabled: false,
	});

	const {
		price,
		category,
		categories,
		processor,
		RAM,
		OS,
		diskspace,
		formData,
		disabled,
	} = values;

	useEffect(() => {
		axios
			// .get("http://103.191.240.74/api/vpscategory")
			.get("http://localhost:3000/api/vpscategory")
			.then((response) => {
				setValues({
					...values,
					categories: response.data,
					formData: new FormData(),
				});
			})
			.catch((error) => {
				setValues({
					...values,
					error: "Failed to load categories!",
					formData: new FormData(),
				});
			});
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		formData.set(e.target.name, value);
		setValues({
			...values,
			[e.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setValues({
			...values,
			disabled: true,
		});
		//  const { token } = userInfo();
		axios
			// .post("http://103.191.240.74/api/vpsproduct", formData)
			.post("http://localhost:3000/api/vpsproduct", formData)
			.then((response) => {
				console.log(response.data);
				setValues({
					...values,
					price,
					category,
					processor,
					RAM,
					OS,
					diskspace,
					disabled: false,
				});
			})
			.catch((error) => {
				let errMsg = "Something went wrong!";
				if (error.response) errMsg = error.response.data;
				setValues({
					...values,
					error: errMsg,
					disabled: false,
				});
			});
	};

	return (
		<div>
			{/* <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Selected Catagory</label>
          <input
            name="category"
            onChange={(e) => setCatagory(e.target.value)}
            placeholder="catagory"
          />
        </Form.Field>
        <Form.Field>
          <label>CPU</label>
          <input
            name="processor"
            onChange={(e) => setCpu(e.target.value)}
            placeholder="CPU Name"
          />
        </Form.Field>
        <Form.Field>
          <label>RAM</label>
          <input name="RAM" onChange={(e) => setRam(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>OS</label>
          <input
            name="OS"
            onChange={(e) => setOs(e.target.value)}
            placeholder="Operating System"
          />
        </Form.Field>
        <Form.Field>
          <label>Storage</label>
          <input
            name="diskspace"
            onChange={(e) => setStorage(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input name="price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Field>
        
			<Button type="submit" onClick={sendDataToAPI}>
          Submit
        </Button>
     
      </Form> */}

			<form
				className="mb-3"
				onSubmit={handleSubmit}
				style={{ width: 400, marginLeft: 200 }}
			>
				<div className="form-group">
					<label className="text-muted">Price:</label>
					<input
						name="price"
						onChange={handleChange}
						type="number"
						className="form-control"
						value={price}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">Processor:</label>
					<textarea
						name="processor"
						onChange={handleChange}
						className="form-control"
						value={processor}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">RAM:</label>
					<input
						name="RAM"
						onChange={handleChange}
						className="form-control"
						type="text"
						value={RAM}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">OS:</label>
					<input
						name="OS"
						onChange={handleChange}
						className="form-control"
						type="text"
						value={OS}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">DiskSpace:</label>
					<input
						name="diskspace"
						onChange={handleChange}
						className="form-control"
						type="text"
						value={diskspace}
						required
					/>
				</div>
				<div className="form-group">
					<label className="text-muted">Category:</label>
					<select
						name="category"
						value={category}
						onChange={handleChange}
						className="form-control"
						required
					>
						<option value="">----Select Category----</option>
						{categories &&
							categories.map((item) => (
								<option value={item._id} key={item._id}>
									{item.name}
								</option>
							))}
					</select>
				</div>
				<button
					className="btn btn-outline-primary"
					type="submit"
					disabled={disabled}
				>
					Create Product
				</button>
			</form>
		</div>
	);
}
