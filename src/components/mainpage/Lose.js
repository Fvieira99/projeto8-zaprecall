import { useState } from "react";
import sad from "../../assets/sad.png";

function Lose(props) {
	const { icons, restartGame } = props;
	const [gameState, setGameState] = useState("lose");
	return (
		<>
			{gameState === "lose" ? (
				<footer className="final-footer">
					<div className="try-again">
						<img src={sad} alt="Sad Emoji"></img>
						<span>Putz!</span>
					</div>
					<span className="final-message">
						Ainda faltam alguns...
						<br />
						Mas não desanime!
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

export default Lose;
