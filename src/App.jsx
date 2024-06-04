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
	const [readMore, setReadMore] = useState(false);

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
					offers Live Test Drive sessions, available exclusively to Digital
					Business Banking program members. <br /> <br /> Email Julianna Kolb at{" "}
					<a href='mailto:jkolb@barlowresearch.com'>
						jkolb@barlowresearch.com
					</a>{" "}
					to learn more about Live Test Drive sessions and schedule a session
					for your team.
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
					{!readMore ? (
						<p className='read-more' onClick={() => setReadMore(!readMore)}>
							READ MORE
						</p>
					) : (
						<>
							<span style={{animation: "fadeIn 2.5s"}}>
								<br />
								<br />
								The analysis of the platforms is divided into eight desktop and
								eight mobile categories, each containing an array of related
								features. These online and mobile banking features were rated
								for importance via survey by small business digital banking
								users and tested online by Barlow Research analysts. First-hand
								UX capture videos are available within the Test Drive platform
								as well.
								<br />
								<br />
								Barlow Research has created a weighted scoring system for each
								of the features and functionalities that were tested, based on
								the importance scores indicated by the small business digital
								banking users in our survey. Finally, a &quot;Best Practice
								Bank&quot; was named for each chapter included in the study.
								This data is representative of platforms as of March 2024. This
								report has the power to give banks a &quot;Road Map&quot; to
								Digital Business Banking success.
							</span>
							<p
								style={{animation: "fadeIn 2.5s"}}
								className='read-more'
								onClick={() => setReadMore(!readMore)}
							>
								SHOW LESS
							</p>
						</>
					)}
				</p>
			</div>
			<Footer />
		</>
	);
}

export default App;
