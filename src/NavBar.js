import React from 'react';

function NavBar() {
	const navList = [
		"Home",
		"About",
		"Contact"
	]

	const outPut = navList.map((navList) =>
		<li>{navList}</li>
	)

	return (
		<>
			{outPut}
		</>
	);
}

export default NavBar;