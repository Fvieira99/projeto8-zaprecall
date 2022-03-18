import Deck from "./Deck";
import Logo from "../Logo";
import Footer from "./Footer";
import { useState } from "react";

function MainPage() {
	const [count, setCount] = useState(0);
	const [icons, setIcons] = useState([]);
	const [success, setSuccess] = useState(0);

	function changeCount(count) {
		setCount(count + 1);
	}

	function addIcon(icon) {
		setIcons([...icons, icon]);
	}

	function countSuccess(success) {
		setSuccess(success + 1);
	}

	return (
		<div className="main-page">
			<Logo classname="main-page-logo" />
			<Deck
				addIcon={addIcon}
				changeCount={changeCount}
				count={count}
				countSuccess={countSuccess}
				success={success}
			/>
			<Footer count={count} icons={icons} success={success} />
		</div>
	);
}

export default MainPage;
