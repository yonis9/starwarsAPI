import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';
import SearchBox from './components/SearchBox';
import NavBar from './components/NavBar';
import gitlog from './github-logo.svg';

const style = {
  background: '#fff',
  padding: '1rem',
  width: '100%',
  margin: '0',
  zIndex: '1',
  borderRadius: '5px'
}

const responsiveSearch = {
  width: '100%',
  marginBottom: '0.5rem',
  padding: '0.5rem'
}


class App extends Component {
	constructor() {
		super()
		this.state = {
			data: [],
			searchfield: '',
			category: 'all',
			loading: true,
			winWidth: window.innerWidth
		}
	}

	componentDidMount() {
		//***** Promise.all fetching ********************************
		// const array = ['planets', 'people', 'starships'];
		// const arr = [];
		// Promise.all(array.map(type=> {
		// 	return fetch(`https://swapi.co/api/${type}/?format=json`)
		// 	.then(resp=> resp.json())
		// })).then(res => { res.forEach(cat=> {
		// 	cat.results.forEach(data=> {
		// 		arr.push(data)
		//	})	
		// })
		// this.setState({data : arr , loading : false })});
		// ********************************************************
		this.getAll();
		window.addEventListener('resize', () => {
        	this.setState({ winWidth: window.innerWidth })
       });
	}

	componentDidUpdate(prevProps, prevState) {
  		 if (this.state.category !== prevState.category && this.state.category ==='all') {
  		 	this.setState({ loading: true });
			this.getAll();
		}
  			else if (this.state.category !== prevState.category) {
  				this.setState({ loading: true });
  				const arr = [];
   				 fetch(`https://swapi.co/api/${this.state.category}/?format=json`)
				.then(response=>  response.json())
				.then(users => {
					users.results.forEach(item=> {
						arr.push([this.state.category, item])
					})
					this.setState({data : arr , loading : false })

				} );
				window.scroll(0,0);
  			}
	}

	getAll = async () => {
		const array = ['planets', 'people', 'starships', 'species', 'vehicles', 'films'];
		const arr = [];
		const arrayOfPromises = array.map(type=>fetch(`https://swapi.co/api/${type}/?format=json`));
		for await (let request of arrayOfPromises) {
			const data = await request.json();
			let i=0;
			for (let element of data.results) {
				i = Math.floor(arr.length/10);
				await arr.push([array[i], element])
			}
		}
		this.setState({ data : arr , loading : false });
		window.scroll(0,0);
	}



	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	onCatChange = (event) => {
		this.setState({ category: event.target.value })
	}


	render() {
		const filterData = this.state.data.filter(item => {
			return (
				item[1].hasOwnProperty('title') ? 
				item[1].title.toLowerCase().includes(this.state.searchfield.toLowerCase()) :
				item[1].name.toLowerCase().includes(this.state.searchfield.toLowerCase())
			)
		});
		console.log(filterData.length)

		return (
		<div className='tc'>
			<NavBar winWidth={this.state.winWidth} searchChange={this.onSearchChange} catChange={this.onCatChange}/>
			
			<div className="flex flex-wrap justify-center mv7">
				{this.state.winWidth < 760 ?
				<div style={style}>
			 		<SearchBox searchChange={this.onSearchChange} catChange={this.onCatChange}  responsiveSearch={responsiveSearch} />
			 	</div> :
      			
      			null}
				

				{
				this.state.loading ||!this.state.data.length ?
				 <h1 className= 'white'>Loading...</h1> : 
				 filterData.length === 0 ?
				 <h1 className= 'white'>No items found</h1> :
				 <div>
					 <CardList data = { filterData } style={{zIndex: '5', marginTop: '500px'}}/>
				</div>
				}
			</div>
			<footer className="w-100 h4 flex items-center justify-center white bg-near-black z-2">
          <a href="https://github.com/zero-to-mastery/ZtM-Job-Board" title="Repository">
           <img src={gitlog} alt='Github repo' height='40px' width='40px'/>
          </a>
        </footer>
		</div>
		)
	}
}


export default App;