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
							<img src='../../../images/rotate.png' />
							Banks
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Category&nbsp;View</h2>
					<p>
						About Catagory view. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Integer sit amet consequat velit.
					</p>
					<a href='#setScreen'>
						<div
							onClick={() => setViewCompare("category")}
							className='four-button'
						>
							<img src='../../../images/rotate.png' />
							Categories
						</div>
					</a>
				</div>
				<div className='four-button-border'>
					<h2>Compare&nbsp;Banks</h2>
					<p>
						About Compare Banks. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Integer sit amet consequat velit.
					</p>
					<a href='#setScreen'>
						<div
							onClick={() => setViewCompare("compare")}
							className='four-button'
						>
							<img src='../../../images/compare-banks.png' />
							Compare Banks
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
						<img src='../../../images/download.png' />
						Download
					</div>
				</div>
			</div>
		</>
	);
};
export default FourButtons;
