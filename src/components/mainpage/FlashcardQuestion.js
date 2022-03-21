import arrow from "../../assets/setinha.png";
function FlashcardQuestion(props) {
	const { question, setFlashcardState } = props;
	return (
		<>
			<div className="flashcard-visible">
				<span>{question}</span>
				<img
					src={arrow}
					alt="Arrow"
					onClick={() => {
						setFlashcardState("answer");
					}}
				></img>
			</div>
		</>
	);
}

export default FlashcardQuestion;
