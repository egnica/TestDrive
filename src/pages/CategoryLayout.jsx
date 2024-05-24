import {useState, useEffect} from "react";

import "./category-layout.css";
import "../App.css";
import banksData from "../../banks.json";

function CategoryLayout() {
	const [CatagoryTitles] = useState(banksData.key_Data);
	const [bankObject] = useState(banksData.bank_layout);
	const [catagoryName, setcatagoryName] = useState("");
	const [bankName, setBank] = useState("");
	const [cateIndex, setCateIndex] = useState("");
	const [videoUrl, setVideoUrl] = useState("");
	const [features, setFeatures] = useState([]);
	const [featuresKey, setFeaturesKey] = useState([]);
	const [selected, setSelected] = useState([{setInd: null, number: 0}]);
	const [styleChange, setStyleChange] = useState([]);

	const doubleClickCanel = (item) => {
		if (catagoryName == item.name) {
			setcatagoryName("");
			setBank("");
			setFeatures([]);
			setBank("");
		}
	};

	const selectedSec = (ind) => {
		if (ind == selected.setInd && selected.number == 0) {
			return {backgroundColor: "#5dc0f9", color: "white"};
		}
	};

	const revealHandler = (index) => {
		styleChange == "" ? setStyleChange(["block", index]) : setStyleChange([]);
	};

	const selectFeatures = (bankName) => {
		bankObject.forEach((item) => {
			if (item.bank_name == bankName) {
				item.categorys.forEach((elem) => {
					if (catagoryName == elem.name) {
						setFeatures(elem.features);
					}
				});
			}
		});
	};
	const FeaturesKeyHandler = () => {
		CatagoryTitles.forEach((item) => {
			item.categorys.forEach((elem) => {
				if (elem.name == catagoryName) {
					setFeaturesKey(elem.features);
				}
			});
		});
	};

	const cateClickClear = (bank, ind) => {
		if (bank == bankName && ind == cateIndex) {
			setFeatures([]);
			setBank("");
		}
	};
	useEffect(() => {
		selectFeatures(bankName);
		FeaturesKeyHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [catagoryName]);

	return (
		<>
			<div id='setScreen2'></div>
			<h1 className='cat-h1'>Categories</h1>
			<p style={{paddingLeft: "3%"}}>
				Select one of the categories below to see how each bank scored in regard
				to that topic
			</p>

			<div className='contain'>
				<div className='category-contain'>
					{CatagoryTitles[0].categorys.map((item, index) => {
						let cataLogo = `${item.icon}`;
						return (
							<div key={index}>
								<a href='#setScreen2'>
									<div
										style={selectedSec(index)}
										className='contain-two hover-zoom'
										onClick={() => {
											document.querySelector(".info-contain").style.animation =
												"fadeIn 1s";
											setcatagoryName(item.name);
											doubleClickCanel(item);
											setSelected({setInd: index, number: 0});
										}}
									>
										<img width={"25%"} height={"auto"} src={cataLogo} />

										<p>{item.name}</p>
									</div>
								</a>
							</div>
						);
					})}
				</div>
				<div className='contain2 table-width'>
					<div style={{display: "block", width: "120%"}}>
						<div style={{display: "flex"}}>
							<h2 className='cat-h2'>{catagoryName} </h2>

							{catagoryName != "" && (
								<>
									<img
										style={{padding: "20px 0 0 20px"}}
										height={"40px"}
										width={"40px"}
										src='./images/winner.png'
									/>
									<p style={{padding: "18px 0 0 5px", fontSize: "14px"}}>
										= indicates category winner
									</p>
								</>
							)}
						</div>
						<div style={{margin: "25px"}} className='info-contain'>
							{catagoryName != "" && (
								<div className='catagory-score-contain title table-width'>
									<p>Banks</p>
									<p className='points'>Score</p>
								</div>
							)}
							{catagoryName != "" &&
								bankObject.map((bank, index) => {
									return (
										<>
											{bank.categorys.map((item, index) => {
												return (
													catagoryName == item.name &&
													item.winner && (
														<div
															onClick={() => revealHandler(index)}
															style={{float: "right", width: "0px"}}
															key={index}
														>
															<div className='test1'>
																<img
																	style={{marginLeft: "40px"}}
																	className='winner-img'
																	src='./images/winner.png'
																/>
																<div
																	style={{
																		display:
																			styleChange[1] == index && styleChange[0],
																	}}
																	className='best-feature-text'
																>
																	{item.winner}
																</div>
															</div>
														</div>
													)
												);
											})}

											<div
												className='catagory-score-contain table-width hover'
												key={index}
												onClick={() => {
													selectFeatures(bank.bank_name);
													FeaturesKeyHandler();
													setCateIndex(index);
													setBank(bank.bank_name);
													cateClickClear(bank.bank_name, index);
												}}
											>
												<p className='cata'> {bank.bank_name}</p>
												{bank.categorys.map((test, index) => {
													return (
														catagoryName == test.name && (
															<>
																<p key={index} className='points'>
																	{test.score}
																</p>
															</>
														)
													);
												})}
											</div>

											{features.map((feat, numInd) => {
												return (
													<div key={numInd}>
														{cateIndex == index && (
															<>
																<div className='feature table-width'>
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

																	{featuresKey[numInd].points == feat.points ? (
																		<img
																			className='check'
																			src='./images/check.png'
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
														)}
													</div>
												);
											})}
										</>
									);
								})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default CategoryLayout;
