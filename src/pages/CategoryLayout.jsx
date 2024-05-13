import {useState} from "react";

import "./category-layout.css";
import "../App.css";
import banksData from "../../banks.json";

function CategoryLayout() {
	const [CatagoryTitles] = useState(banksData.key_Data);
	const [bankObject] = useState(banksData.bank_layout);
	const [catagoryName, setcatagoryName] = useState("");
	const [bankName, setBank] = useState("");
	const [features, setFeatures] = useState([]);
	const [videoUrl, setVideoUrl] = useState("");
	const [featuresKey, setFeaturesKey] = useState("");

	const doubleClickCanel = (item) => {
		catagoryName == item.name && setcatagoryName("");
		catagoryName == item.name && setBank("");
		bankName == item && setBank("");
		bankName == item && setVideoUrl("");
	};

	const setObject = (item) => {
		item.categorys.forEach((item) => {
			item.name == catagoryName && setFeatures(item.features);
		});
	};
	const FeaturesKeyHandler = () => {
		CatagoryTitles.forEach((item, index) => {
			item.categorys == setFeaturesKey(item.categorys[index].features);
		});
	};

	return (
		<>
			<h1 className='cat-h1'>Catagories</h1>

			<div className='contain'>
				<div className='category-contain'>
					{CatagoryTitles[0].categorys.map((item, index) => {
						{
							/* let cataLogo = `../../images/category-icons/${item.name}.svg`; */
						}
						let cataLogo = `../../images/category-icons/Managing Paper.svg`;
						return (
							<div
								key={index}
								className='contain-two hover-zoom'
								onClick={() => {
									setcatagoryName(item.name);
									doubleClickCanel(item);
								}}
							>
								<img src={cataLogo} />

								<p>{item.name}</p>
							</div>
						);
					})}
				</div>

				<div className='contain2 table-width'>
					<div style={{display: "block", width: "120%"}}>
						<h2 className='cat-h2'>{catagoryName}</h2>
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
															style={{float: "right", width: "0px"}}
															key={index}
														>
															<div className='test1'>
																<img
																	style={{marginLeft: "40px"}}
																	className='winner-img'
																	src='../../images/winner.png'
																/>
																<div className='best-feature-text'>
																	{item.winner}
																</div>
															</div>
														</div>
													)
												);
											})}
											<div
												className='catagory-score-contain table-width hover'
												onClick={() => {
													setBank(bank.bank_name);
													setObject(bank);
													FeaturesKeyHandler();
													doubleClickCanel(bank.bank_name);
												}}
												key={index}
											>
												<p className='cata'>{bank.bank_name}</p>
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

											{bankName == bank.bank_name &&
												features.map((item, num) => {
													return (
														<>
															<div key={num} className='feature table-width'>
																{item.video != "" ? (
																	<button
																		onClick={() => setVideoUrl(item.video)}
																		className='video-button'
																	>
																		Watch Video
																	</button>
																) : (
																	<div className='filler'></div>
																)}
																<p className='feat-name'>{item.name}</p>
																{featuresKey[num].points == item.points ? (
																	<img
																		className='check'
																		src='../../../../images/check.png'
																	/>
																) : (
																	<div className='no-check'></div>
																)}
																{/* {CatagoryTitles[0].categorys[index].features[
																	num
																].points == item.points ? (
																	<img
																		className='check'
																		src='../../../../images/check.png'
																	/>
																) : (
																	<div className='no-check'></div>
																)} */}

																<p className='feat-score'>{item.points}</p>
															</div>

															{videoUrl != "" && item.video == videoUrl && (
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
