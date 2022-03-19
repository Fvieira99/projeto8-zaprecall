import Logo from "../Logo";
import { useState } from "react";
import MainPage from "../mainpage/MainPage";

function Home() {
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

	const sortedFlashcards = [...flashcards.sort(comparador)];
	const [page, setPage] = useState("Home");

	function comparador() {
		return Math.random() - 0.5;
	}

	function restartGame(page) {
		setPage(page);
	}

	return (
		<>
			{page === "Home" ? (
				<div className="home">
					<Logo classname="home-logo" />
					<button className="home-button" onClick={() => setPage("MainPage")}>
						Começar Recall!
					</button>
				</div>
			) : (
				<MainPage
					restartGame={restartGame}
					sortedFlashcards={sortedFlashcards}
				/>
			)}
		</>
	);
}
export default Home;
