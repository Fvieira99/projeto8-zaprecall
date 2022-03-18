import { useState } from "react";
import FlashcardAnswer from "./FlashcardAnswer";
import FlashcardQuestion from "./FlashcardQuestion";

function Flashcard(props) {
	const {
		number,
		question,
		answer,
		addIcon,
		changeCount,
		count,
		countSuccess,
		success,
	} = props;

	const [flashcard, setFlashcard] = useState("hidden");

	function setFlashcardState(flashcard) {
		setFlashcard(flashcard);
	}

	if (flashcard === "hidden") {
		return (
			<div className="flashcard">
				<h3>Pergunta {number}</h3>
				<ion-icon
					name="play-outline"
					onClick={() => {
						setFlashcard("question");
					}}
				></ion-icon>
			</div>
		);
	} else if (flashcard === "question") {
		return (
			<FlashcardQuestion
				question={question}
				setFlashcardState={setFlashcardState}
			/>
		);
	} else {
		return (
			<FlashcardAnswer
				countSuccess={countSuccess}
				success={success}
				addIcon={addIcon}
				answer={answer}
				number={number}
				count={count}
				changeCount={changeCount}
			/>
		);
	}
}
export default Flashcard;
