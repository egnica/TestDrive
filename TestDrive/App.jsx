import "./app.css";
import {CompareLayout} from "./pages/CompareLayout";
import BankLayout from "./pages/BankLayout";
import CategoryLayout from "./pages/CategoryLayout";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import FourButtons from "./assets/fourButtons";
import {useState} from "react";
import {useEffect} from "react";

function App() {
	const [compareView, setCopmareView] = useState("");

	const compareHandler = (data) => {
		setCopmareView(data);
	};
	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);
	return (
		<>
			<Header />
			<FourButtons transferCompare={compareHandler} />

			{compareView == "bank" ? (
				<BankLayout />
			) : compareView == "category" ? (
				<CategoryLayout />
			) : compareView == "compare" ? (
				<CompareLayout />
			) : null}
			<Footer />
		</>
	);
}

export default App;
