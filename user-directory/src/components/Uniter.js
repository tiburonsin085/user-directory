import React, { Component } from 'react';
import Header from './Header'
import Card from './Card'
import Nav from './Nav'
import data from '../data'



class Uniter extends Component {

    constructor(props){
        super(props)
        this.state = {
            info: data,
            n:0
        }
    }

    // componentDidMount() {
    //     this.setState({info: data})
    // }

    next = ( ) => {
        const {n,info} = this.state
        let  value = n+1
        if (value < 0){
            return this.setState({n:0})
        }
        if (value > (info.length-1)){
            return this.setState ({n: info.length-1})
        }
        
        return this.setState({n: value})

    }

    previus = () =>{
        const {n,info} = this.state
        let  value = n-1
        if (value < 0){
            return this.setState({n:0})
        }
        if (value > (info.length-1)){
            return this.setState ({n: info.length-1})
        }
        
        return this.setState({n: value})
    }

    render() {
        console.log(this.state.n)

        console.log(this.state.info.length)
        return (
            <div className = 'uniter'>
                <Header />
                <Card info = {this.state.info}
                n={this.state.n}
                />
                <Nav
                previus = {this.previus}
                next = {this.next}
                />

                
            </div>
        );
    }
}

export default Uniter;