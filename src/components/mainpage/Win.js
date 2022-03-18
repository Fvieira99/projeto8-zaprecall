import { useState } from "react";
import Home from "../home/Home";

function Win(props) {
	const { icons } = props;
	const [gameState, setGameState] = useState("win");
	return (
		<>
			{gameState === "win" ? (
				<footer className="final-footer">
					<div className="congratulations">
						<img src="assets/party.png"></img>
						<span>PARABÉNS!</span>
					</div>
					<span className="final-message">
						Você não esqueceu nenhum flashcard!
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

export default Win;
