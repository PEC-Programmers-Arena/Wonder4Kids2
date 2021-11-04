import React from 'react';
// import { Box, Link, Stack, Text } from '@chakra-ui/react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
// import TabScrollButton from '@mui/material/TabScrollButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';


function Footer(){
	return(
		<>
			<div className="grid">
				<div class="githubinfo">
				<span className="ProjectInfoMobile">
				&nbsp;Want to Contribute? &nbsp;
				</span>
				<span className="ProjectInfoDesktop">
				This is an Open Source Project &nbsp;
				</span>
				<span className="githubico">
				<IconButton color="primary">
				<a href="https://github.com/PEC-Programmers-Arena/Wonder4Kids2" text-decoration="none"><GitHubIcon fontSize="large" className="footerIcon"/>&nbsp;GitHub</a>
				</IconButton>
				</span>
				{/* </center> */}
				</div>
				<div className="Contacts">
					<center>Contact Us</center>
				
					<div className="groupContacts">
						<IconButton>	
							<InstagramIcon color="primary" fontSize="large"/>
						</IconButton>
						<IconButton>
							<FacebookIcon color="primary" fontSize="large"/>
						</IconButton>
						<IconButton>
							<EmailIcon color="primary" fontSize="large"/>
						</IconButton>
						

						{/* <IconButton color="primary">
							<TabScrollButton orientation="vertical" direction="left"/>
						</IconButton> */}
					</div>
				</div>
			</div>

		</>
	)
};

export default Footer;
