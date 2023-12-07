import "./admin.css";
import Create from "./create/create";
import Read from "./read/read";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Admin_page = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/login");
		}
	}, []);

	return (
		<div>
			<div>
				<div className="main">
					<div>
						<Button
							onClick={() => {
								localStorage.removeItem("token");
								window.location.reload(false);
							}}
						>
							Logout
						</Button>
					</div>
					<h1>Welcome to Admin Panel</h1>
				</div>
				<div style={{ width: 400, marginLeft: 200, marginTop: 20 }}>
					{/* <h3>Catagory</h3> */}
					{/* <Dropdown
            placeholder="Select Catarory"
            fluid
            selection           
            options={category}
          /> */}

					{/* <label>
            Category
            <select value={value} onChange={handleChange}>
              {category.map((option) => (
                <option value={option._id}>{option.name}</option>
              ))}
            </select>
          </label> */}
				</div>
			</div>
			<div style={{ width: 400, marginLeft: 200, marginTop: 20 }}>
				<h3>Add a Package</h3>
				<Create />
			</div>
			<div style={{ marginTop: 20 }}>
				<Read />
			</div>
		</div>
	);
};
export default Admin_page;
