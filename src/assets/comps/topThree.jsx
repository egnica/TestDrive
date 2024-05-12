/* eslint-disable react/prop-types */
import "../../App.css";

const TopThree = (props) => {
	return (
		<>
			<div className='section'>
				<h1>{props.object[props.num].title} </h1>
			</div>

			<div className='section2'>
				<p>{props.object[props.num].description}</p>
			</div>
		</>
	);
};
export default TopThree;
