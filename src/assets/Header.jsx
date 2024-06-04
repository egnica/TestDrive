import {useState, useEffect} from "react";
import TopThree from "./comps/topThree";

import topItemsJson from "../../posts.json";
import "../App.css";

const Header = () => {
	let selectedColor1, selectedColor2, selectedColor3;

	const [buttonSelected, setButtonSelected] = useState(1);
	const [clickTrue, setClickTrue] = useState(false);

	// const firstThreeObjects = topItemsJson.blogs.slice(0, 3);

	const selectedButton = (num) => {
		num == 1 ? (selectedColor1 = "#535bf2") : (selectedColor1 = "#efefef");
		num == 2 ? (selectedColor2 = "#535bf2") : (selectedColor2 = "#efefef");
		num == 3 ? (selectedColor3 = "#535bf2") : (selectedColor3 = "#efefef");
	};
	selectedButton(buttonSelected);

	useEffect(() => {
		const timer = setInterval(() => {
			setButtonSelected(2);
		}, 10000);
		const timer2 = setInterval(() => {
			setButtonSelected(3);
		}, 20000);
		const timer3 = setInterval(() => {
			setButtonSelected(1);
		}, 30000);
		if (clickTrue) {
			clearInterval(timer);
			clearInterval(timer2);
			clearInterval(timer3);
		}
		return () => {
			clearInterval(timer);
			clearInterval(timer2);
			clearInterval(timer3);
		};
	}, [clickTrue]);
	return (
		<>
			<div className='three-btn-contain'>
				<div className='button-container'>
					<button
						style={{backgroundColor: selectedColor1}}
						onClick={() => {
							setButtonSelected(1);
							setClickTrue(true);
						}}
						className='blog-button'
					></button>
					<button
						style={{backgroundColor: selectedColor2}}
						onClick={() => {
							setButtonSelected(2);
							setClickTrue(true);
						}}
						className='blog-button'
					></button>
					<button
						style={{backgroundColor: selectedColor3}}
						onClick={() => {
							setButtonSelected(3);
							setClickTrue(true);
						}}
						className='blog-button'
					></button>
				</div>
			</div>
			<div className='featured-blog'>
				{buttonSelected == 1 ? (
					<TopThree object={topItemsJson.new} num={0} />
				) : buttonSelected == 2 ? (
					<TopThree object={topItemsJson.new} num={1} />
				) : (
					<TopThree object={topItemsJson.new} num={2} />
				)}
			</div>
		</>
	);
};
export default Header;
