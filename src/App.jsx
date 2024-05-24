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
			<div className='questions'>
				<img
					style={{paddingTop: "10px"}}
					width={"150px"}
					height={"auto"}
					src='./images/Questions_Icon.svg'
				/>
				<p>
					<strong>QUESTIONS? </strong>
					<br /> Want an in-depth, personalized look at a specific digital
					banking feature, or a specific bank&apos;s digital platform? Barlow
					offers this level of access via Live Test Drive sessions, available
					exclusively to Digital Business Banking program. <br /> <br /> Reach
					out to Julianna Kolb at jkolb@barlowresearch.com to learn more about
					Live Test Drive sessions and schedule a session for your team.
				</p>
			</div>
			<div className='questions'>
				<img
					style={{paddingTop: "10px"}}
					width={"150px"}
					height={"auto"}
					src='./images/Methodology_Icon.svg'
				/>
				<p>
					<strong>METHODOLOGY</strong>
					<br />
					The Digital Business Banking Test Drive is an ongoing study conducted
					by Barlow Research Associates to look at the online and mobile banking
					platforms offered to small business customers by the top banking
					providers in the United States. Barlow Research maintains a customer
					relationship with each bank in the study through a small subsidiary
					company, having opened a small business checking and savings account
					at each institution. With these relationships established, we then
					access our accounts through each bank&apos;s small business digital
					banking platform - and we bring our clients along for the ride.
				</p>
			</div>
			<Footer />
		</>
	);
}

export default App;
