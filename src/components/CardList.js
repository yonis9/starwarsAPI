import React from 'react';
import Card from './Card';

const CardList= ( { data }) => {
	return (
		data.map((user, i) => {
			return (
				<Card 
				key ={i} 
				id={data[i].id} 
				info={data[i][1]}
				type={data[i][0]} />
				)
		})
		)
}

export default CardList;