import Flashcard from "./Flashcard";

const flascards = [
	{
		number: 1,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 2,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 3,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 4,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 5,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 6,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 7,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		number: 8,
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
];

function Deck(props) {
	const { addIcon, changeCount, count, countSuccess, success } = props;
	return (
		<main>
			{flascards.map(({ number, question, answer }) => (
				<>
					<Flashcard
						countSuccess={countSuccess}
						success={success}
						count={count}
						changeCount={changeCount}
						addIcon={addIcon}
						key={number}
						number={number}
						question={question}
						answer={answer}
					/>
				</>
			))}
		</main>
	);
}

export default Deck;
