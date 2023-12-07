import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Axios from "axios";

function Store() {
	const [data, setData] = useState([]);

	useEffect(() => {
		Axios.get("https://6313b715a8d3f673ffcf5d61.mockapi.io/CRUD")
			.then((res) => {
				console.log("getting data from fake api :::", res.data);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}, []);
	// console.log(apiData);
	const arr = data.map((data, index) => {
		return (
			<div className="col-6 pb-5">
				<Card>
					<Card.Body className="customcard">
						{/* <Card.Title>{data.id}</Card.Title> */}
						<div className="row">
							<header className="textleft p-3">
								<span>Java-2GB-BD</span>
							</header>
							<div className="col-6 text-start">
								<strong>Minecraft Java Edition</strong>
								<Card.Title>{data.size}</Card.Title>
								<Card.Text>{data.ram}</Card.Text>
								<Card.Text>{data.ssd}</Card.Text>
								<Card.Text>{data.bandwidth}</Card.Text>
								<Card.Text>{data.core}</Card.Text>
								<Card.Text>{data.port}</Card.Text>
								<Card.Text>{data.setup}</Card.Text>
								<Card.Text>{data.vm}</Card.Text>
							</div>
							<div className="col-6">
								<Card.Text className="price">
									starting from
									<br />
									<span>{data.price}</span>/ per month
								</Card.Text>
								<div className="d-grid gap-2 mx-4">
									<Button size="lg">Order Now</Button>
								</div>
							</div>
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
					<div className="section-title pb-5">Minecraft Server Hosting</div>
				</div>

				<div className="row">{arr}</div>
			</div>
		</div>
	);
}

export default Store;
