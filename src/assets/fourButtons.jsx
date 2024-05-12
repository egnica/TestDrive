import {useState} from "react";

const FourButtons = (props) => {
	const [toggle, setToggle] = useState(false);
	const [viewCompare, setViewCompare] = useState(true);

	// eslint-disable-next-line react/prop-types
	props.onTransfer(toggle);
	// eslint-disable-next-line react/prop-types
	props.transferCompare(viewCompare);

	const rotateViewHandler = () => {
		setToggle((toggle) => !toggle);
		setViewCompare(true);
	};

	return (
		<>
			<div className='four-button-contain'>
				<div onClick={rotateViewHandler} className='four-button'>
					<img src='../../../images/Picture1.svg' />
					{!toggle ? "Switch to Category View" : "Switch to Bank View"}
				</div>
				<div
					onClick={() => setViewCompare((viewCompare) => !viewCompare)}
					className='four-button'
				>
					<img src='../../../images/Picture1.svg' />
					Compare Banks
				</div>
				<div className='four-button'>
					<img src='../../../images/Picture1.svg' />
					Download Road Map
				</div>

				<div className='four-button '>
					<img src='../../../images/Picture1.svg' />
					Methodology
				</div>
			</div>
		</>
	);
};
export default FourButtons;
