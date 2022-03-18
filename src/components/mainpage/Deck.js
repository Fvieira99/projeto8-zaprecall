import Flashcard from "./Flashcard";

const flashcards = [
	{
		question: "O que é JSX?",
		answer: "Uma extensão de linguagem do JavaScript",
	},
	{
		question: " O React é __",
		answer: "Uma biblioteca JavaScript para construção de interfaces",
	},
	{
		question: "Componentes devem iniciar com __",
		answer: "Letra maiúscula",
	},
	{
		question: "Podemos colocar __ dentro do JSX ",
		answer: "Expressões",
	},
	{
		question: "O ReactDOM nos ajuda __",
		answer: "Interagindo com a DOM para colocar componentes React na mesma",
	},
	{
		question: "Usamos o npm para __ ",
		answer: "Gerenciar os pacotes necessários e suas dependências",
	},
	{
		question: "Usamos props para __",
		answer: "Passar diferentes informações para componentes ",
	},
	{
		question: "Usamos estado (state) para __",
		answer:
			"Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
	},
];

function comparador() {
	return Math.random() - 0.5;
}

function Deck(props) {
	const sortedFlascards = [...flashcards.sort(comparador)];
	const { addIcon, changeCount, count, countSuccess, success } = props;
	return (
		<main>
			{sortedFlascards.map((flashcard, index) => (
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
