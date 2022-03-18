import Logo from "../Logo";
import { useState } from "react";
import MainPage from "../mainpage/MainPage";

function Home() {
	const [page, setPage] = useState("Home");
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
				<MainPage />
			)}
		</>
	);
}
export default Home;
