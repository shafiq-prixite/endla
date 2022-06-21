import { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import EditUserSection from '../components/Smart/EditUserSection';
import ChangePasswordField from '../components/Smart/ChangePasswordField';
import '../styles/_account.scss';
import PropType from 'prop-types';

// FRONTEND ONLY CODING CHALLENGE FILE

const users = [
	{
		fields: {
			first_name: 'Olive',
			last_name: 'Yew',
			email: 'yew@endla.com',
		},
	},
	{
		fields: {
			first_name: 'Aida',
			last_name: 'Bugg',
			email: 'bugg@endla.com',
		},
	},
];

const user = {
	first_name: 'Sam',
	last_name: 'Smith',
	username: 'sam@endla',
	email: 'sam@endla.com',
	permission_list: {
		'Permission 1': 'enabled',
		'Permission 2': 'disabled',
	},
	id: 1,
};

// eslint-disable-next-line react/function-component-definition
const AccountSettings = ({ passwordUpdateSuccess }) => {
	const [current, setCurrent] = useState(false);
	const [password, setPassword] = useState(false);
	const [password2, setPassword2] = useState(false);

	const fieldStateChanged = (field) => (state) => {
		if (field === 'password') {
			setPassword(state.errors.length === 0);
		} else {
			setPassword2(state.errors.length === 0);
		}
	};

	const currentChanged = (e) => {
		if (e.target.value && e.target.value.length > 0) {
			setCurrent(true);
		} else {
			setCurrent(false);
		}
	};

	const passwordChanged = fieldStateChanged('password');
	const password2Changed = fieldStateChanged('password2');

	const onSubmit = (e) => {
		e.preventDefault();
		props.changePassword(
			e.target.current.value,
			e.target.password.value,
			e.target.password2.value,
		);
	};

	const formValidated = current && password && password2;

	const removeUser = (e) => {
		alert('Remove User');
		// console.log(e);
	};

	return (
		// eslint-disable-next-line react/jsx-filename-extension
		<>
			<div className="container-fluid mb-3 pb-3 pt-5">
				<div className="row">
					<div className="col-md-12 head-content">
						<h1 className="acc-settings-h1">Account Settings</h1>
						<p className="acc-settings-p">
							We always appreciate feedback - if you have chance leave us some,
							it helps us continue to improve.
						</p>
					</div>
				</div>
			</div>

			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row className="acc-settings-sidebar-content">
					<Col sm={2} className="acc-settings-sidebar">
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link className="nav-bar-non-active" eventKey="first">
									<svg
										style={{ marginRight: '5px' }}
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										className="bi bi-gear"
										viewBox="0 0 16 16"
									>
										<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
										<path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
									</svg>
									General Settings
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="nav-bar-non-active" eventKey="second">
									<svg
										style={{ marginRight: '5px' }}
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										fill="currentColor"
										className="bi bi-columns-gap"
										viewBox="0 0 16 16"
									>
										<path d="M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
									</svg>
									Features
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="nav-bar-non-active" eventKey="third">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										style={{ marginRight: '5px' }}
										width="18"
										height="18"
										fill="currentColor"
										className="bi bi-file-earmark-lock"
										viewBox="0 0 16 16"
									>
										<path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0zM7 7v1h2V7a1 1 0 0 0-2 0zM6 9.3v2.4c0 .042.02.107.105.175A.637.637 0 0 0 6.5 12h3a.64.64 0 0 0 .395-.125c.085-.068.105-.133.105-.175V9.3c0-.042-.02-.107-.105-.175A.637.637 0 0 0 9.5 9h-3a.637.637 0 0 0-.395.125C6.02 9.193 6 9.258 6 9.3z" />
										<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
									</svg>
									Change Password
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="nav-bar-non-active" eventKey="fourth">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										style={{ marginRight: '5px' }}
										width="18"
										height="18"
										fill="currentColor"
										className="bi bi-person-check"
										viewBox="0 0 16 16"
									>
										<path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										<path
											fillRule="evenodd"
											d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
										/>
									</svg>
									Edit User
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9} className="square rounded-3 acc-settings-main-content">
						<Tab.Content className="acc-settings-main-tab-content">
							<Tab.Pane eventKey="first">
								<div className="col-md-6 ">
									<div className="card-body">
										<div className="row mb-4 ">
											<div className="col">
												<label
													htmlFor="inputZip"
													className="form-label acc-settings-main-tab-panel1"
												>
													Name:
												</label>
											</div>
											<div className="col text-start acc-settings-main-tab-panel1-content">
												{user.first_name} {user.last_name}
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												// eslint-disable-next-line
												jsx-a11y/label-has-associated-control
												<label
													htmlFor="inputZip"
													className="form-label acc-settings-main-tab-panel1"
												>
													Email:
												</label>
											</div>
											<div className="col text-start acc-settings-main-tab-panel1-content">
												{user.email}
											</div>
										</div>
										<div className="row mb-4">
											<div className="col">
												<label
													htmlFor="inputZip"
													className="form-label acc-settings-main-tab-panel1"
												>
													Username:
												</label>
											</div>
											<div className="col text-start acc-settings-main-tab-panel1-content">
												{' '}
												{user.username}
											</div>
										</div>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<div className="col-md-6 ">
									{Object.keys(user.permission_list).map((permission) => (
										<div
											className="row mb-2 acc-settings-main-tab-panel2-key"
											key={user.id}
										>
											<div className="col">
												<label
													htmlFor="inputZip"
													className="form-label acc-settings-main-tab-panel2-form-head"
												>
													{permission}
												</label>
											</div>
											<div className="col">
												<input
													type="checkbox"
													id="topping"
													name="topping"
													value="Paneer"
													className="acc-settings-main-tab-panel2-form-content"
													checked={
														user.permission_list[permission] === 'enabled'
													}
												/>
											</div>
										</div>
									))}
								</div>
							</Tab.Pane>
							<Tab.Pane
								eventKey="third"
								className="acc-settings-main-tab-panel3"
							>
								<div className="container">
									<div className="row">
										<div className="col-md-8">
											<form onSubmit={onSubmit} className=" px-1 pb-2">
												<div className="form-group">
													<label htmlFor="inputZip" className="form-label ">
														Current Password
													</label>
													<input
														name="current"
														type="password"
														id="current"
														className="form-control"
														placeholder="Enter current password"
														onChange={currentChanged}
														required
													/>
												</div>
												<ChangePasswordField
													label="New Password"
													onPasswordChanged={passwordChanged}
													onPassword2Changed={password2Changed}
												/>

												<div className="form-group row mt-4">
													<div className="col-md-auto">
														<button
															className="btn btn-sm btn-lg btn-block custom-button"
															type="submit"
															disabled={!formValidated}
														>
															Save Changes
														</button>
													</div>
													{passwordUpdateSuccess &&
														'Password successfully updated.'}
												</div>
											</form>
										</div>
									</div>
								</div>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<EditUserSection users={users} removeUser={removeUser} />
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</>
	);
};

AccountSettings.propTypes = {
	changePassword: PropType.func.isRequired,
	passwordUpdateSuccess: PropType.bool.isRequired,
};

export default AccountSettings;
