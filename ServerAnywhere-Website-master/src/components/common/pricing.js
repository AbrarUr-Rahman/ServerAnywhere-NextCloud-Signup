import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";

function Pricing() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Axios.get("https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD")
		Axios.get("http://localhost:3000/api/vpsproduct/")
			.then((res) => {
				console.log("getting data from fake api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(apiData);
	const arr = data.map((data, index) => {
		return (
			<div className="col-3 pb-5">
				<Card>
					<Card.Body>
						<Card.Title>{data.id}</Card.Title>
						<Card.Title>{data.size}</Card.Title>
						<Card.Text>{data.ram}</Card.Text>
						<Card.Text>{data.ssd}</Card.Text>
						<Card.Text>{data.bandwidth}</Card.Text>
						<Card.Text>{data.core}</Card.Text>
						<Card.Text>{data.port}</Card.Text>
						<Card.Text>{data.setup}</Card.Text>
						<Card.Text>{data.vm}</Card.Text>
						<Card.Text className="price">
							<span>{data.price}</span>/ per month
						</Card.Text>
						<div className="d-grid gap-2 mx-4">
							<Button size="lg">Order</Button>
						</div>
					</Card.Body>
				</Card>
			</div>
		);
	});

	return (
		<div id="pricing">
			<div className="container">
				<div className="row">
					<div className="section-title pb-5">plans and pricing</div>
				</div>
				<div className="row">{arr}</div>
			</div>
		</div>
	);
}

export default Pricing;
