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
						About bank view. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Integer sit amet consequat velit.
					</p>
					<a href='#setScreen'>
						<div onClick={() => setViewCompare("bank")} className='four-button'>
							<img
								width={"40%"}
								height={"auto"}
								src='./images/Change_View.svg'
							/>
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Category&nbsp;View</h2>
					<p>
						About Catagory view. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Integer sit amet consequat velit.
					</p>
					<a href='#setScreen2'>
						<div
							onClick={() => setViewCompare("category")}
							className='four-button'
						>
							<img
								width={"40%"}
								height={"auto"}
								src='./images/Change_View.svg'
							/>
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Compare&nbsp;Banks</h2>
					<p>
						About Compare Banks. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Integer sit amet consequat velit.
					</p>
					<a href='#setScreen3'>
						<div
							onClick={() => setViewCompare("compare")}
							className='four-button'
						>
							<img
								width={"40%"}
								height={"auto"}
								src='./images/Compare_Banks.svg'
							/>
						</div>
					</a>
				</div>

				<div className='four-button-border'>
					<h2>Download&nbsp;Road</h2>
					<p>
						About Road Map. Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Integer sit amet consequat velit.
					</p>
					<div className='four-button'>
						<img
							width={"40%"}
							height={"auto"}
							src='./images/Download_Icon.svg'
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default FourButtons;
