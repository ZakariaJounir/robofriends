import React, { Component } from "react";
import CardsList from "../components/CardsList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            robots:[],
            searchfeild:""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfeild:event.target.value})
        
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(Response => Response.json())
        .then(users => this.setState({robots:users}))
    }


    render(){
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfeild);
         })

        return(
        <div className="tc ">
            <h1 className="tc">Robot Friends</h1>
            <SearchBox searchChang = {this.onSearchChange} />
            <Scroll>
                <ErrorBoundary>
                <CardsList robots={filterRobots} />
                </ErrorBoundary>
            </Scroll>
        </div>        
        )

    }
}
export default App;