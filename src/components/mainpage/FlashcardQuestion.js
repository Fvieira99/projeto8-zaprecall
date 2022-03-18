function FlashcardQuestion(props) {
	const { question, setFlashcardState } = props;
	return (
		<>
			<div className="flashcard-visible">
				<span>{question}</span>
				<img
					src="assets/setinha.png"
					onClick={() => {
						setFlashcardState("answer");
					}}
				></img>
			</div>
		</>
	);
}

export default FlashcardQuestion;
