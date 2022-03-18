import { useState } from "react";

function FlashcardAnswer(props) {
	const { answer, number, count, changeCount, addIcon, countSuccess, success } =
		props;

	const [flashcardState, setFlashcardState] = useState("notAnswered");

	if (flashcardState === "notAnswered") {
		return (
			<div className="flashcard-visible">
				<span>{answer}</span>
				<div className="answer-buttons">
					<button
						className="tryAgain"
						onClick={() => {
							setFlashcardState("wrongAnswer");
							changeCount(count);
							addIcon("close-circle");
						}}
					>
						Não lembrei!
					</button>
					<button
						className="almost"
						onClick={() => {
							setFlashcardState("almost");
							changeCount(count);
							addIcon("help-circle");
							countSuccess(success);
						}}
					>
						Quase não lembrei!
					</button>
					<button
						className="zap"
						onClick={() => {
							setFlashcardState("zap");
							changeCount(count);
							addIcon("checkmark-circle");
							countSuccess(success);
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
					<div className="close-circle">
						<ion-icon name="close-circle"></ion-icon>
					</div>
				</div>
			);
		} else if (flashcardState === "almost") {
			return (
				<div className="flashcard">
					<h3 className="orange">Pergunta {number}</h3>
					<div className="help-circle">
						<ion-icon name="help-circle"></ion-icon>
					</div>
				</div>
			);
		} else {
			return (
				<div className="flashcard">
					<h3 className="green">Pergunta {number}</h3>
					<div className="checkmark-circle">
						<ion-icon name="checkmark-circle"></ion-icon>
					</div>
				</div>
			);
		}
	}
}

export default FlashcardAnswer;
