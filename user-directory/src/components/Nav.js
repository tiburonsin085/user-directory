import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className= 'nav' >
                <button 
                    onClick = {()=> this.props.previus()} >{"<"} Previous </button> 

                <button
                    onClick = {() => this.props.next()}
                >Next {'>'}</button>
            </div>
        );
    }
}

export default Nav;