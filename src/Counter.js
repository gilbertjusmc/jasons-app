import React, { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);


	return (
		<div>
			<h2>Button was clicked {count} times</h2>
			<button onClick={() => setCount(count + 1)}>
				Click Here
			</button>
		</div>
	);
}

export default Counter;