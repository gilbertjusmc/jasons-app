import React from 'react';

function NavBar(props) {
	return (
		<>
			<h1>Jason Gilbert</h1>
			<ul>
				<li>Home</li>
				<li>About {props.name}</li>
				<li>Contact {props.name}</li>
			</ul>
		</>
	);
}

export default NavBar;