import React, { Component } from 'react';
import './NavBar.css';
import SearchBox from './SearchBox';


class NavBar extends Component {
  constructor(props) {
        super(props);
        this.state = {};
    }

    handleScroll = () => {
        this.setState({scroll: window.scrollY});
    }
  
  componentDidMount() {
        const el = document.querySelector('nav');
        this.setState({top: el.offsetTop, height: el.offsetHeight});
        window.addEventListener('scroll', this.handleScroll);
    }
  
  componentDidUpdate() {
        this.state.scroll > this.state.top ? 
            document.querySelector('nav').style.padding = '10px' :
            document.querySelector('nav').style.padding = '40px';
    }
  
  render() {
    return (
      <nav className='header-items flex flex-wrap justify-between shadow-3'>
      <img alt="starwars"
        src="https://vignette.wikia.nocookie.net/disney/images/8/8b/Starwars-logo.png/revision/latest?cb=20141129122237"
        style={{height: '40px'}}
       />
      {this.props.winWidth > 760 ?
          <div>
          <SearchBox searchChange={this.props.searchChange} catChange={this.props.catChange}  />
        </div> 
        :
      null}
      <div>
      </div>
      </nav>
    );
  }
}

export default NavBar;
