import {useState} from "react";
import "../App.css";
import "./compare.css";
import banksData from "../../banks.json";

export const CompareLayout = () => {
	const [bankObject] = useState(banksData.bank_layout);
	const [bankSelectiosObjects, setBankSelectiosObjects] = useState([]);
	const [keyObject] = useState(banksData.key_Data);
	const [categorys] = useState(keyObject[0].categorys);

	const bankOnchangeHandler = (event) => {
		event.preventDefault();
		bankSelectiosObjects != [] && setBankSelectiosObjects([]);

		for (let x = 0; x < event.target.length; x++) {
			if (event.target[x].checked == true) {
				setBankSelectiosObjects((prevList) => {
					return [...prevList, bankObject[x]];
				});
				//	event.target[x].checked = false;
			}
		}
	};
	const scoreComp = (bankScore, index) => {
		if (bankScore == categorys[index].score) {
			return {backgroundColor: "lightgreen"};
		}
	};

	const percentOfPoints = (bank) => {
		let score = 0;
		const catagoryKey = keyObject[0].categorys;
		let keyScore = 0;

		bank.forEach((item) => {
			score += item.score;
		});
		catagoryKey.forEach((item) => {
			keyScore += item.score;
		});
		let percentScore = Math.round((score / keyScore) * 100);

		return percentScore;
	};

	const fadeClick = () => {
		document.querySelector(".display-cont").style.animation = "fadeIn 1s";
	};

	return (
		<>
			<form className='bank-input-boxes-cont' onSubmit={bankOnchangeHandler}>
				<div id='setScreen3'></div>
				<h2>SELECT UP TO 6 BANKS</h2>

				{bankObject.map((item, index) => {
					return (
						<div key={index}>
							<input
								className='check-box'
								type='checkbox'
								value={item.bank_name}
							/>
							<span className=''>{item.bank_name}</span>
						</div>
					);
				})}
				<button onClick={fadeClick}>Submit</button>
			</form>
			<hr />

			{bankSelectiosObjects.length > 6 ? (
				<h1 style={{textAlign: "center"}}>Please Enter 6 Selections or Less</h1>
			) : (
				bankSelectiosObjects.length > 0 && (
					<div className='display-cont'>
						<div className='category-col'>
							<h3>CATEGORY</h3>
							<p>
								<strong>Percent of Total Score</strong>
							</p>
							{categorys.map((item, index) => {
								return <p key={index}>{item.name}</p>;
							})}
						</div>

						{bankSelectiosObjects.map((item, index) => {
							return (
								<div className='bank-col' key={index}>
									<h3>{item.bank_name}</h3>

									<p>{percentOfPoints(item.categorys)}%</p>
									{item.categorys.map((catag, ind) => (
										<>
											<p style={scoreComp(catag.score, ind)} key={ind}>
												{catag.score}
											</p>
										</>
									))}
								</div>
							);
						})}
					</div>
				)
			)}
		</>
	);
};
