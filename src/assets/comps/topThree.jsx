/* eslint-disable react/prop-types */
import "../../App.css";

const TopThree = (props) => {
	return (
		<>
			<div
				className='main-pic'
				style={{backgroundImage: `url(${props.object[props.num].image})`}}
			>
				<div className='h1-td'>
					<h1>DIGITAL BUSINESS BANKING TEST DRIVE</h1>
				</div>

				<div className='section'>
					<h1>{props.object[props.num].title} </h1>
				</div>

				<div className='section2'>
					<h2>{props.object[props.num].description}</h2>
					<a
						href={props.object[props.num].link}
						target='_blank'
						rel='noreferrer'
					>
						<div className='section2-btn'>
							{props.object[props.num].link_title}
						</div>
					</a>
				</div>
			</div>
		</>
	);
};
export default TopThree;
