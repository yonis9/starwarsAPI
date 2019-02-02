import React from 'react';

const Card = ({ type, info }) => {
	const head = (type!=="films")? info.name : info.title
	return (
		<div className='tc bg-washed-blue dib br4 pa3 ma2 grow bw2 shadow-5 ba b--green'>
			<h1 className='navy'>{head}</h1>
			<p className='b blue f5'>∙{type}∙</p>
			{Object.entries(info).map((value, i)=> {
				let str = value[0].toUpperCase() +': ' + value[1];
				if(str.length > 25) {str=null};
				const smallInf = (<p key={i} className='b'>{str} </p>)
				return smallInf;
			})}
		</div>
		)
}

export default Card;