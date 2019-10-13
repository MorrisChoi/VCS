import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Vc_item from './Vc_item';

const Vc_list_block = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	color:red;
	`;

const Vc_info = () =>{

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [id, setId] = useState(0);

	useEffect(() =>{

		const fetchData = async() => {
			setLoading(true);
			try{
				const response = await axios.get("https://api.bithumb.com/public/ticker/ALL",);
				setData(response.data.data);
				setId(id + 1);
				
			} catch (e){
				console.log(e);
			}
			setLoading(false);
		};
		fetchData();
		setInterval(() => fetchData(), 2000);
		
	}, []);

	

	

	if(!data){
		return null;
	}




	return(
		<>	
			<Vc_item key = {id} vcData = {data}/>
			{console.log(id)}

		</>
	);
};

export default Vc_info;