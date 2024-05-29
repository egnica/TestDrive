import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<>
			<div className='footer-contain'>
				<footer className='container'>
					<div className='foot'>
						<div className='social' id='footer'>
							<ul>
								<li style={{marginRight: "20px"}}>
									<a
										href='https://www.linkedin.com/company/barlow-research-associates-inc-'
										target='_blank'
										rel='noreferrer'
									>
										<FontAwesomeIcon icon={faLinkedin} />
									</a>
								</li>
							</ul>
						</div>
						<div className='about'>
							<ul>
								<li>
									<a href='https://barlowresearch.com/careers.php'>Careers</a>
								</li>
								<li>
									<a href='https://barlowresearch.com/privacy.php'>Privacy</a>
								</li>
								<li>
									<a href='https://barlowresearch.com/terms-conditions.php'>
										Terms &amp; Conditions
									</a>
								</li>
								<li>
									<a href='https://barlowresearch.com/contact.php' id='cntct'>
										Contact Us
									</a>
								</li>
							</ul>
							<p className='survey'>
								Survey Respondent?{" "}
								<a href='https://barlowresearch.com/survey-respondents.php'>
									View our full list of&nbsp;FAQs
								</a>
							</p>
							<div className='address'>
								<h4>Barlow Research Associates, INC.</h4>
								<p>917 Lilac Drive North</p>
								<p>Minneapolis, MN 55422</p>
								<p>Tel: 763-253-1800 Fax: 763-253-1879</p>
							</div>
						</div>
						<div className='newsletter'>
							<div className='letter'>
								<img src='../../images/newsletter.png' alt='Newsletter' />
							</div>
							<div className='signup'>
								<h4>Newsletter Signup</h4>
								<p>
									Receive the weekly newsletter and have full access to all
									Analyst&apos;s Journal column articles for 12&nbsp;months
								</p>
								<a href='https://barlowresearch.com/newsletter.php'>
									Sign up now
								</a>
							</div>
							<div
								className='copyright'
								style={{padding: "10px 0 0 0", float: "right"}}
							>
								<p style={{float: "left", textAlign: "left"}}>
									{" "}
									Copyright&nbsp;2024;
									&nbsp;All&nbsp;Rights&nbsp;Reserved&nbsp;&nbsp;&nbsp;&nbsp;
								</p>
								<script
									type='text/javascript'
									src='https://seal-minnesota.bbb.org/inc/legacy.js'
								></script>
								<a
									href='https://www.bbb.org/us/mn/minneapolis/profile/market-research/barlow-research-associates-inc-0704-96020604/#sealclick'
									id='bbblink'
									className='ruvtbam'
									target='_blank'
									rel='nofollow noreferrer'
									style={{marginTop: "-40px;"}}
								>
									<img
										src='https://seal-minnesota.bbb.org/logo/ruvtbam/bbb-96020604.png'
										style={{border: "0;"}}
										alt='Barlow Research Associates, Inc. BBB Business Review'
									/>
								</a>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};
export default Footer;
