function Flashcard(props) {
	return (
		<div className="flashcard">
			<h1>Pergunta {props.numero}</h1>
			<ion-icon name="play-outline"></ion-icon>
		</div>
	);
}

export default Flashcard;
