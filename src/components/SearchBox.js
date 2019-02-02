import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange, catChange,  responsiveSearch }) => {
	return (
		<div className= 'search-area flex flex-wrap items-center ml4 mt1 z-1'
		id="searchbox" style={responsiveSearch}>
			
				<select className='tc text-black br2 bw1 b--solid b--gold pv2 mr2'
						onChange={catChange}>
  					<option value="all">All</option>
  					<option value="people">People</option>
  					<option value="planets">Planets</option>
  					<option value="starships">Starships</option>
  					<option value="species">Species</option>
  					<option value="vehicles">Vehicles</option>	
  					<option value="films">Films</option>	
				</select>	
				<div>
					<input 
					className='tc text-black br2 bw1 b--solid b--gold pv2' 
					style={responsiveSearch}
					type='search'
					placeholder='search' 
					onChange={searchChange}
					/>
				</div>
	</div>
		)
}

export default SearchBox;