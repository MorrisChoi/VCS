import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import $ from 'jquery';
import styled from 'styled-components';
import {IoIosWallet} from 'react-icons/io';

const Vc_list_block = styled.div`
	.banner { position: absolute; font-size: 8pt; top: 5px; right: 0; z-index: 10; background:#BDBDBD; padding:5px; border:1px solid #CCCCCC; text-align:center;}
	.banner > span {margin-bottom: 10px;}
	.Info {
		text-align:left;
		font-size: 14pt;
		  }
	.Info:hover {
		color: #A00C71;
		  }
	.wallet{
		size: 14px;
	}

`;


const Book_Login = () =>{
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userID, setuserID] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [picture, setPicture] = useState('');

	let FB_Contend;

	$(window).scroll(function() { 
		$('.banner').animate({top:$(window).scrollTop()+"px" },{queue: false, duration: 500});
	});



	const responseFacebook = (response) =>{
		try{
			setIsLoggedIn(true);
			setuserID(response.userID);
			setName(response.name);
			setEmail(response.email);
			setPicture(response.picture.data.url);
		}catch(e){
			console.log(e);
			setIsLoggedIn(false);
		}
	}


	const componentClicked = () =>{
		console.log(name);
	}


	if(isLoggedIn){
		try{
			FB_Contend = (
				<div className = "banner">
				<img src = {picture} alt = {name} />
				<h2>User: {name}</h2>
				<span className = "Info">Info</span> <IoIosWallet /> <span className = "Info">Wallet></span>
				</div>
			);
		}catch (e){console.log(e);}

	}else
		{
			FB_Contend = (
			<FacebookLogin
    		appId="769991200102738"
    		autoLoad={false}
    		fields="name,email,picture"
    		onClick={componentClicked}
    		callback={responseFacebook} />);
		}
			

		return(<div><Vc_list_block>{FB_Contend}</Vc_list_block></div>);

}

export default Book_Login;
