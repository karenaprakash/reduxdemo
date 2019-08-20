import React , { Component } from 'react';
import { connect } from 'react-redux';
import  { movieslist , directorslist } from '../actions';
import { bindActionCreators } from 'redux';
import Movieslist from '../components/MoviesList';

class App extends Component{

    componentWillMount(){
        //we can directly access our actions using their name only
       this.props.movieslist();
       this.props.directorslist();

    }

    
    render(){
    console.log(this.props.data)
        return(
            <div>
               <Movieslist data = {this.props.data.movies} />

            </div>
        )
    }   
}

//It returns new state to set in component 
const mapStateToProps = (state) => {
        return {
            data : state.movies
        }
}
////It returns action which we perform on component
//using bindActionCreators we can easily bind all action with our mapDispatchToProps 
const mapDispatchTOProps = (dispatch) => {
    return bindActionCreators({
        movieslist,
        directorslist
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchTOProps)(App);