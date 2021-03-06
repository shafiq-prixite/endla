import React, { useState } from "react";
import PropType from "prop-types";
import AddUserModal from "../Shared/Modals/AddUserModal/AddUserModal";
import "../../styles/_account.scss";

function EditUserSection({ users, removeUser }) {
	const [addUserModalShow, setAddUserModalShow] = useState(false);

	const handleAddUserModal = (val) => setAddUserModalShow(val);

	return (
		<>
			<div className="row">
				<div className="col-sm-12">
					<div className="text-end content">
						<button
							className="btn btn-primary custom-button"
							onClick={() => handleAddUserModal(true)}
						>
							Add User
						</button>
					</div>
				</div>
			</div>

			<div className="col-sm-12">
				<div className="table-responsive">
					<table className="table table-bordered mt-4 table-main">
						<thead className="thead">
							<tr align="center">
								<th scope="col">First Name</th>
								<th scope="col">Last Name</th>
								<th scope="col">Email</th>
								<th scope="col">Remove</th>
							</tr>
						</thead>
						<tbody className="table-content">
							{users.map((user) => (
								<tr key={user.id} align="center">
									<td> {user.fields.first_name}</td>
									<td> {user.fields.last_name}</td>
									<td> {user.fields.email}</td>
									<td
										className="table-icon"
										onClick={() => removeUser(user.id)}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-trash"
											viewBox="0 0 16 16"
										>
											<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
											<path
												fillRule="evenodd"
												d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
											/>
										</svg>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<AddUserModal
				addUserModalShow={addUserModalShow}
				handleAddUserModal={handleAddUserModal}
			/>
		</>
	);
}

EditUserSection.propTypes = {
	users: PropType.func.isRequired,
	removeUser: PropType.bool.isRequired,
};

export default EditUserSection;
