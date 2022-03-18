import { useState } from "react";
import Home from "../home/Home";

function Lose(props) {
	const { icons } = props;
	const [gameState, setGameState] = useState("lose");
	return (
		<>
			{gameState === "lose" ? (
				<footer className="final-footer">
					<div className="try-again">
						<img src="assets/sad.png"></img>
						<span>Putz!</span>
					</div>
					<span className="final-message">
						Ainda faltam alguns...
						<br />
						Mas não desanime!
					</span>
					<div className="icons-container">
						{icons.map((icon) => (
							<div className={icon}>
								<ion-icon name={icon}></ion-icon>
							</div>
						))}
					</div>
					<button
						onClick={() => {
							setGameState("restart");
						}}
					>
						Reiniciar Recall
					</button>
				</footer>
			) : (
				<Home />
			)}
		</>
	);
}

export default Lose;
