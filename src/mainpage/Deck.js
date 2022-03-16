import Flashcard from "./Flashcard";

const deck = [1, 2, 3, 4, 5, 6, 7, 8];

function Deck() {
	return (
		<main>
			{deck.map((flascard) => (
				<Flashcard numero={flascard} />
			))}
		</main>
	);
}

export default Deck;
