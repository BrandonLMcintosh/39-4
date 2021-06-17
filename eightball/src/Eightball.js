import answers from "./answers";
import React, { useState } from "react";
import { getRandom } from "./helpers";
import "./Eightball.css";

const Eightball = () => {
	const [color, setColor] = useState("black");
	const [answer, setAnswer] = useState("Think of a Question");

	const style = {
		backgroundColor: color,
		color: "white",
		width: "200px",
		paddingTop: "100px",
		paddingBottom: "100px",
		borderRadius: "50%",
		textAlign: "center",
	};

	const _handleClick = () => {
		const answer = getRandom(answers);
		setColor(answer.color);
		setAnswer(answer.msg);
	};

	return (
		<div className="Eightball" onClick={_handleClick} style={style}>
			{answer}
		</div>
	);
};

export default Eightball;
