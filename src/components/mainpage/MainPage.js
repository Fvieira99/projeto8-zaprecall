import Deck from "./Deck";
import Logo from "../Logo";
import Footer from "./Footer";
import { useState } from "react";

function MainPage() {
	const [count, setCount] = useState(0);
	const [icons, setIcons] = useState([]);

	function changeCount(count) {
		setCount(count + 1);
	}

	function addIcon(icon) {
		setIcons([...icons, icon]);
	}

	return (
		<div className="main-page">
			<Logo classname="main-page-logo" />
			<Deck addIcon={addIcon} changeCount={changeCount} count={count} />
			<Footer count={count} icons={icons} />
		</div>
	);
}

export default MainPage;
