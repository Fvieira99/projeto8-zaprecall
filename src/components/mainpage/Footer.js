function Footer(props) {
	const { count, icons } = props;
	console.log(icons);
	return (
		<footer>
			<div className="count-container">
				<h3 className="count">{count}/8</h3>
				<h3 className="done">Concluídos</h3>
			</div>
			<div className="icons-container">
				{icons.map((icon) => (
					<ion-icon className={icon} name={icon}></ion-icon>
				))}
			</div>
		</footer>
	);
}

export default Footer;
