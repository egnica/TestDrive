import {useState} from "react";

const FourButtons = (props) => {
	const [viewCompare, setViewCompare] = useState(true);

	// eslint-disable-next-line react/prop-types
	props.transferCompare(viewCompare);

	// const rotateViewHandler = () => {
	// 	setToggle((toggle) => !toggle);
	// 	setViewCompare(true);
	// };

	return (
		<>
			<div className='four-button-contain'>
				<div className='four-button-border'>
					<h2>Bank View</h2>
					<p>
						View Test Drive features and results by category for a specific
						bank.
					</p>
					<a href='#setScreen'>
						<div onClick={() => setViewCompare("bank")} className='four-button'>
							<img
								width={"100px"}
								height={"auto"}
								src='./images/Bank_View.svg'
							/>
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Category&nbsp;View</h2>
					<p>
						View Test Drive features and results by bank for a specific feature
						category.
					</p>
					<a href='#setScreen2'>
						<div
							onClick={() => setViewCompare("category")}
							className='four-button'
						>
							<img
								width={"100px"}
								height={"auto"}
								src='./images/Category_View.svg'
							/>
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Compare&nbsp;Banks</h2>
					<p>
						View a summary of results by category across multiple banks at once.
					</p>
					<a href='#setScreen3'>
						<div
							onClick={() => setViewCompare("compare")}
							className='four-button'
						>
							<img
								width={"100px"}
								height={"auto"}
								src='./images/Compare_Banks.svg'
							/>
						</div>
					</a>
				</div>

				<div className='four-button-border'>
					<h2>Download Road Map</h2>
					<p>
						View a detailed summary of all Test Drive results by bank and
						category.
					</p>
					<a href='./roadmap/ROAD_MAP.pdf' target='_blank'>
						<div className='four-button'>
							<img
								style={{paddingTop: "10px"}}
								width={"60px"}
								height={"auto"}
								src='./images/Download_Icon.svg'
							/>
						</div>
					</a>
				</div>
			</div>
			<p style={{textAlign: "center"}}>
				This data is representative of platforms as of March 2024.
			</p>
		</>
	);
};
export default FourButtons;
