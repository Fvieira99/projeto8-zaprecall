import { useState } from "react";
import party from "../../assets/party.png";

function Win(props) {
	const { icons, restartGame } = props;
	const [gameState, setGameState] = useState("win");
	return (
		<>
			{gameState === "win" ? (
				<footer className="final-footer">
					<div className="congratulations">
						<img src={party} alt="Party Emoji"></img>
						<span>PARABÉNS!</span>
					</div>
					<span className="final-message">
						Você não esqueceu nenhum flashcard!
					</span>
					<div className="icons-container">
						{icons.map((icon, index) => (
							<div key={index} className={icon}>
								<ion-icon name={icon}></ion-icon>
							</div>
						))}
					</div>
					<button
						onClick={() => {
							setGameState("restart");
							restartGame("Home");
						}}
					>
						Reiniciar Recall
					</button>
				</footer>
			) : (
				<></>
			)}
		</>
	);
}

export default Win;
