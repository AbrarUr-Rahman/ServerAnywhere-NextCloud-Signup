import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";

function PricingRDP() {
	const [data, setData] = useState([]);

	useEffect(() => {
		// Axios.get("103.191.240.74/api/minecraftcategory/");
		Axios.get("http://localhost:3000/api/minecraftcategory/")
			.then((res) => {
				console.log("getting data from fake api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(apiData);
	const arr = data.map((data, index) => {
		return (
			<div className="col-lg-3 col-md-4 col-sm-6 offset-sm-0 col-8 offset-2 pb-5">
				<Card>
					<Card.Body>
						{/* <Card.Title>{data.id}</Card.Title> */}
						<Card.Title>{data.processor}</Card.Title>
						<Card.Text>{data.RAM}</Card.Text>
						<Card.Text>{data.OS}</Card.Text>
						<Card.Text>{data.diskspace}</Card.Text>
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

export default PricingRDP;
