import {useState} from "react";
import "../App.css";
import banksData from "../../banks.json";

function BankLayout() {
	const [bank, setBank] = useState("");
	const [bankObject] = useState(banksData.bank_layout);
	const [keyObject] = useState(banksData.key_Data);
	const [catagory, setCatagory] = useState([]);
	const [keyCategory, setKeyCategory] = useState("");
	const [videoUrl, setVideoUrl] = useState("");

	let bankNav = document.getElementsByTagName("nav");

	const doubleClickBank = (item) => {
		bank == item && setCatagory([]);
		bank == item && setBank("");
		bank == item && setKeyCategory("");
		bank == item && setVideoUrl("");
	};
	const doubleClickCategory = (item) => {
		keyCategory == item && setKeyCategory("");
		keyCategory == item && setVideoUrl("");
	};

	const moveHover = () => {
		bankNav[0].draggable = true;
	};

	return (
		<>
			<h1 style={{textAlign: "center"}}>Banks</h1>
			<nav onPointerOver={moveHover}>
				<div
					id='bank-nav'
					className='bank-contain'
				>
					{bankObject.map((item, index) => {
						return (
							<div
								className='bank-item hover-zoom'
								key={index}
								onClick={() => {
									setBank(item.bank_name);
									setCatagory(item.categorys);
									doubleClickBank(item.bank_name);
									setVideoUrl("");
								}}
							>
								<p>{item.bank_name}</p>
							</div>
						);
					})}
				</div>
			</nav>
			<h2>{bank}</h2>

			<div className='contain'>
				<div className='info-contain'>
					{bank !== "" && (
						<div className='catagory-score-contain title'>
							<p>Catagory</p>
							<p className='points'>Score</p>
						</div>
					)}
					<div>
						{catagory.map((item, index) => {
							return (
								<div key={index}>
									<div
										className='catagory-line'
										onClick={() => {
											setKeyCategory(item.name);
											doubleClickCategory(item.name);
											setVideoUrl("");
										}}
									>
										<div className='catagory-score-contain'>
											<p className='cata'>{item.name}</p>
											<p className='points'>{item.score}</p>
										</div>
									</div>

									{keyCategory == item.name &&
										item.features.map((feat, num) => {
											return (
												<div
													className='feature'
													key={num}
												>
													{feat.video != "" ? (
														<button
															onClick={() => setVideoUrl(feat.video)}
															className='video-button'
														>
															Watch Video
														</button>
													) : (
														<div className='filler'></div>
													)}
													<p>{feat.name}</p>

													{keyObject[0].categorys[index].features[num].points ==
													feat.points ? (
														<img
															className='check'
															src='../../../../images/check.png'
														/>
													) : (
														<div className='no-check'></div>
													)}

													<p>{feat.points}</p>
												</div>
											);
										})}
								</div>
							);
						})}
					</div>
				</div>
				{videoUrl != "" && (
					<>
						<div className='video-contain'>
							<button
								onClick={() => {
									setVideoUrl("");
								}}
								className='video-button cancel-button'
							>
								X
							</button>
							<video
								autoPlay
								controls
								src={videoUrl}
								type='video/mp4'
							></video>
						</div>
					</>
				)}
			</div>
		</>
	);
}

export default BankLayout;
