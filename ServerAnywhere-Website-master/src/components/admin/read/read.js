import React, { useEffect, useState } from "react";
import { Button, Table } from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Read() {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		// axios.get(`http://103.191.240.74/api/vpsproduct`).then((getData) => {
		axios.get(`http://localhost:3000/api/vpsproduct`).then((getData) => {
			setApiData(getData.data);
		});
	}, []);
	const setData = (id, catagory, processor, RAM, OS, diskspace, price) => {
		// console.log(id);
		localStorage.setItem("ID", id);
		localStorage.setItem("Catagory", catagory);
		localStorage.setItem("CPU", processor);
		localStorage.setItem("RAM", RAM);
		localStorage.setItem("OS", OS);
		localStorage.setItem("Storage", diskspace);
		localStorage.setItem("Price", price);
	};
	const getData = () => {
		// axios.get(`http://103.191.240.74/api/vpsproduct`).then((getData) => {
		axios.get(`http://localhost:3000/api/vpsproduct`).then((getData) => {
			setApiData(getData.data);
		});
	};

	const onDelete = (id) => {
		// axios.delete(`http://103.191.240.74/api/vpsproduct/${id}`).then(() => {
		axios.delete(`http://localhost:3000/api/vpsproduct/${id}`).then(() => {
			getData();
		});
	};

	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>ID</Table.HeaderCell>
						<Table.HeaderCell>Catagory</Table.HeaderCell>
						<Table.HeaderCell>CPU</Table.HeaderCell>
						<Table.HeaderCell>RAM</Table.HeaderCell>
						<Table.HeaderCell>OS</Table.HeaderCell>
						<Table.HeaderCell>Storage</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Update</Table.HeaderCell>
						<Table.HeaderCell>Delete</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{apiData.map((data) => {
						return (
							<Table.Row>
								<Table.Cell>{data._id}</Table.Cell>
								<Table.Cell>{data.category}</Table.Cell>
								<Table.Cell>{data.processor}</Table.Cell>
								<Table.Cell>{data.RAM}</Table.Cell>
								<Table.Cell>{data.OS}</Table.Cell>
								<Table.Cell>{data.diskspace}</Table.Cell>
								<Table.Cell>{data.price}</Table.Cell>
								<Table.Cell>
									<Link to="/admin/update">
										<Button
											color="green"
											onClick={() =>
												setData(
													data._id,
													data.catagory,
													data.processor,
													data.RAM,
													data.OS,
													data.diskspace,
													data.price
												)
											}
										>
											Update
										</Button>
									</Link>
								</Table.Cell>
								<Table.Cell>
									<Link to="/admin">
										<Button color="red" onClick={() => onDelete(data._id)}>
											Delete
										</Button>
									</Link>
								</Table.Cell>
							</Table.Row>
						);
					})}
				</Table.Body>
			</Table>
		</div>
	);
}
