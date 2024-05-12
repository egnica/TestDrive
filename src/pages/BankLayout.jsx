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
	const [styleChange, setStyleChange] = useState([]);

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

	const revealHandler = (index) => {
		styleChange == "" ? setStyleChange(["block", index]) : setStyleChange([]);
	};
	console.log(styleChange);
	return (
		<>
			<div id='setScreen'></div>
			<h1 style={{textAlign: "center"}}>Banks</h1>

			<div id='bank-nav' className='bank-contain'>
				{bankObject.map((item, index) => {
					let bankLogo = `../../images/svg-bank-logo/${item.short_name}.svg`;
					return (
						<>
							<div className='outer_bank_shell'>
								<img width={"70px"} className='bank-icon' src={bankLogo}></img>
								<div
									className='bank-item hover-zoom'
									key={index}
									onClick={() => {
										document.querySelector(".info-contain").style.animation =
											"fadeIn 1s";
										setBank(item.bank_name);
										setCatagory(item.categorys);
										doubleClickBank(item.bank_name);
										setVideoUrl("");
									}}
								>
									<p>{item.bank_name}</p>
								</div>
							</div>
						</>
					);
				})}
			</div>

			<div className='contain'>
				<div className='info-contain'>
					<h2>{bank}</h2>
					{bank !== "" && (
						<div className='catagory-score-contain title'>
							<p>Catagory</p>
							<p className='points'>Score</p>
						</div>
					)}

					{catagory.map((item, index) => {
						return (
							<div className='catagory-line' key={index}>
								<div
									onClick={() => revealHandler(index)}
									style={{float: "right", width: "0px"}}
								>
									{item.winner ? (
										<div className='test1'>
											<img
												className='winner-img'
												src='../../images/winner.png'
											/>
											<div
												style={{
													display: styleChange[1] == index && styleChange[0],
												}}
												className='best-feature-text'
											>
												{item.winner}
											</div>
										</div>
									) : null}
								</div>
								<div
									onClick={() => {
										setKeyCategory(item.name);
										doubleClickCategory(item.name);
										setVideoUrl("");
									}}
									className='catagory-score-contain'
								>
									<p className='cata'>{item.name} </p>

									<p className='points'>{item.score}</p>
								</div>

								{keyCategory == item.name &&
									item.features.map((feat, num) => {
										return (
											<>
												<div className='feature' key={num}>
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
													<p className='feat-name'>{feat.name}</p>

													{keyObject[0].categorys[index].features[num].points ==
													feat.points ? (
														<img
															className='check'
															src='../../../../images/check.png'
														/>
													) : (
														<div className='no-check'></div>
													)}

													<p className='feat-score'>{feat.points}</p>
												</div>

												{videoUrl != "" && feat.video == videoUrl && (
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
											</>
										);
									})}
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default BankLayout;