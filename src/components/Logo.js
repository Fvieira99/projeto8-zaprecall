import logo from "../assets/logo.png";

function Logo({ classname }) {
	return (
		<div className={classname}>
			<img src={logo} alt="Logo ZapRecall" />
			<h3 className="title">ZapRecall</h3>
		</div>
	);
}
export default Logo;
