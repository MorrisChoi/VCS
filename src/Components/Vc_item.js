import React, { useState } from 'react';
import styled from 'styled-components';
import Line from './Line';

const Vc_list_block = styled.div`
		display: flex;

	    .mainWrapper{
	        width: 800px;
	        margin: 0 auto; /*가운데 정렬*/
	        color: black;
	   	}

	    .mainWrapper > ul > li:first-child {
	        text-align: center;
	        font-size:30pt;
	        height:35px;
	        vertical-align:middle;
	        line-height:30px;
	        color: black;
		}

		.ulTable {margin-top:10px;}
    

	    .ulTable > li:first-child > ul > li {
	        background-color:#CCF5A8;
	        font-weight:bold;
	        text-align:center;
		}

		.ulTable > li > ul > li {
	        background-color:white;
	        font-weight:bold;
	        text-align:center;
		}

		.ulTable > li:not(:first-child):hover > ul > li {
	        background-color:#DCC1C1;
	        font-weight:bold;
		}


	    .ulTable > li > ul {
	        clear:both;
	        padding:0px auto;
	        position:relative;
	        min-width:40px;
		}
	    .ulTable > li > ul > li { 
	        float:left;
	        font-size:12pt;
	        border-bottom:1px solid silver;
	        vertical-align:baseline;
		}

	    .ulTable > li > ul > li:first-child               {width:11%;} /*coin name*/
	    .ulTable > li > ul > li:first-child +li           {width:45%;} /*price*/
	    .ulTable > li > ul > li:first-child +li+li        {width:20%;} /*fluctate*/

	    .left {
	        text-align : left;
		}

		ul{
	   		list-style:none;
	   }

	   .block{
	   	background-color: red;
	   }

	`;

const Vc_item = ({vcData}) =>{
		
	const [jug, setJug] = useState([{vc_name:"",}]);
	const [item_checked, setItem_checked] = useState({checked: false});
	const vc_name = Object.keys(vcData);
/*  const vc_info_list = vc_name.map((name, index) =>(<div>{index}</div>));*/	
/*BTC, ETH, XRP, BCH, LTC, EOS, BSV, XLM */
	
	return(
		<Vc_list_block>
			<div className = "mainWrapper" >
				<ul className ="ulTable">
                    <li>
                        <ul>
                            <li>CoinName</li>
                            <li>CoinPrice</li>
                            <li>fluctate(24H)</li>
                        </ul>
                    </li>
                    {vc_name.map((name, index) =>{
                    	if(name !== "date"){
                    		return (
                    			<li>
	                        		<ul key = {index} className = "block" onClick = {() => {   
    	                        		setJug({vc_name: name});
    	                        		setItem_checked({checked: !item_checked.checked});
    		                        	}}>
    		                            <li className = "left">{name}</li>
    		                            <li className = "price">{vcData[name].closing_price}</li>
    		                            <li className = "fluctate" style={{color: vcData[name].fluctate_rate_24H > 0 ? "blue" : "red"}}>
                                                        {vcData[name].fluctate_24H}<span>({vcData[name].fluctate_rate_24H}%)</span></li>
	                        		</ul>
	                        		<br />
	                        			{(() =>{
	                        				if(jug.vc_name === name && item_checked.checked === true) {return (<Line />);}
	                        				else return;
	                        				})()
	                        			}
                   				</li>

                   				)
                    	}else {
                    		return null
                    	}
                    })}            
                </ul>
			</div>
				

		</Vc_list_block>
		);
};

export default Vc_item;