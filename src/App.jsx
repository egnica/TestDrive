import "./app.css";
import {CompareLayout} from "./pages/CompareLayout";
import BankLayout from "./pages/BankLayout";
import CategoryLayout from "./pages/CategoryLayout";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import FourButtons from "./assets/fourButtons";
import {useState} from "react";

function App() {
	const [toggleView, setToggleView] = useState(false);
	const [compareView, setCopmareView] = useState(true);

	const toggleHandler = (data) => {
		setToggleView(data);
	};
	const compareHandler = (data) => {
		setCopmareView(data);
	};

	return (
		<>
			<Header />
			<FourButtons
				onTransfer={toggleHandler}
				transferCompare={compareHandler}
			/>

			{!compareView ? (
				<CompareLayout />
			) : !toggleView ? (
				<BankLayout />
			) : (
				<CategoryLayout />
			)}

			<Footer />
		</>
	);
}

export default App;
