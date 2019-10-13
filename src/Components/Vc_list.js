import React from 'react';
import styled from 'styled-components';
import Vc_item from './Vc_item';

const Vc_list_block = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	color:red;
	`;

const Vc_sample = {
	opening_price: 'null',
	closing_price: 'null',
};

const Vc_list = () =>{
	return(
		<Vc_list_block>
			<Vc_item vcData = {Vc_sample} />
			<Vc_item vcData = {Vc_sample} />
			<Vc_item vcData = {Vc_sample} />
		</Vc_list_block>
		);
};

export default Vc_list;

