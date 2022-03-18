import { useState } from "react";

function FlashcardAnswer(props) {
	const { answer, number, count, changeCount, addIcon } = props;

	const [flashcardState, setFlashcardState] = useState("notAnswered");

	if (flashcardState === "notAnswered") {
		return (
			<div className="flashcard-visible">
				<span>{answer}</span>
				<div className="buttons">
					<button
						className="tryAgain"
						onClick={() => {
							setFlashcardState("wrongAnswer");
							changeCount(count);
							addIcon("close-circle");
						}}
					>
						Try Again!
					</button>
					<button
						className="almost"
						onClick={() => {
							setFlashcardState("almost");
							changeCount(count);
							addIcon("help-circle");
						}}
					>
						Almost forgot it
					</button>
					<button
						className="zap"
						onClick={() => {
							setFlashcardState("zap");
							changeCount(count);
							addIcon("checkmark-circle");
						}}
					>
						Zap!
					</button>
				</div>
			</div>
		);
	} else {
		if (flashcardState === "wrongAnswer") {
			return (
				<div className="flashcard">
					<h3 className="red">Pergunta {number}</h3>
					<ion-icon className="close-circle" name="close-circle"></ion-icon>
				</div>
			);
		} else if (flashcardState === "almost") {
			return (
				<div className="flashcard">
					<h3 className="orange">Pergunta {number}</h3>
					<ion-icon className="help-circle" name="help-circle"></ion-icon>
				</div>
			);
		} else {
			return (
				<div className="flashcard">
					<h3 className="green">Pergunta {number}</h3>
					<ion-icon
						className="checkmark-circle"
						name="checkmark-circle"
					></ion-icon>
				</div>
			);
		}
	}
}

export default FlashcardAnswer;
