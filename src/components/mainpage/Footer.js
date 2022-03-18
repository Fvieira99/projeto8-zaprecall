import Win from "./Win";
import Lose from "./Lose";
function Footer(props) {
	const { count, icons, success } = props;
	console.log(success);
	if (count < 8) {
		return (
			<footer>
				<div className="count-container">
					<h3 className="count">{count}/8</h3>
					<h3 className="done">Concluídos</h3>
				</div>
				<div className="icons-container">
					{icons.map((icon) => (
						<div className={icon}>
							<ion-icon name={icon}></ion-icon>
						</div>
					))}
				</div>
			</footer>
		);
	} else {
		if (success === 8) {
			return <Win icons={icons} />;
		} else {
			return <Lose icons={icons} />;
		}
	}
}

export default Footer;
