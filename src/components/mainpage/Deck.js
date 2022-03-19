import Flashcard from "./Flashcard";

function Deck(props) {
	const {
		addIcon,
		changeCount,
		count,
		countSuccess,
		success,
		sortedFlashcards,
	} = props;
	return (
		<main>
			{sortedFlashcards.map((flashcard, index) => (
				<>
					<Flashcard
						countSuccess={countSuccess}
						success={success}
						count={count}
						changeCount={changeCount}
						addIcon={addIcon}
						key={index + 1}
						number={index + 1}
						question={flashcard.question}
						answer={flashcard.answer}
					/>
				</>
			))}
		</main>
	);
}

export default Deck;
