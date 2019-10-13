import React, { useState } from 'react';
import styled from 'styled-components';

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
		
	const [id, setId] = useState(0);

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

                    <li>
                        <ul className = "block">
                            <li className = "left">BTC</li>
                            <li className = "price">{vcData.BTC.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.BTC.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.BTC.fluctate_24H} <span>({vcData.BTC.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">ETH</li>
                            <li className = "price">{vcData.ETH.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.ETH.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.ETH.fluctate_24H} <span>({vcData.ETH.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">XRP</li>
                            <li className = "price">{vcData.XRP.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.XRP.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.XRP.fluctate_24H} <span>({vcData.XRP.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">BCH</li>
                            <li className = "price">{vcData.BCH.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.BCH.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.BCH.fluctate_24H} <span>({vcData.BCH.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">LTC</li>
                            <li className = "price">{vcData.LTC.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.LTC.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.LTC.fluctate_24H} <span>({vcData.LTC.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">EOS</li>
                            <li className = "price">{vcData.EOS.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.EOS.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.EOS.fluctate_24H} <span>({vcData.EOS.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">BSV</li>
                            <li className = "price">{vcData.BSV.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.BSV.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.BSV.fluctate_24H} <span>({vcData.BSV.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                    <li>
                        <ul className = "block">
                            <li className = "left">XLM</li>
                            <li className = "price">{vcData.XLM.closing_price}</li>
                            <li className = "fluctate" style={{color: vcData.XLM.fluctate_rate_24H > 0 ? "blue" : "red"}}>{vcData.XLM.fluctate_24H} <span>({vcData.XLM.fluctate_rate_24H}%)</span></li>
                        </ul>
                    </li>

                </ul>


			</div>
				

		</Vc_list_block>
		);
};

export default Vc_item;