import React, {Component} from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import DetailsCard from './DetailsCard';

const api = axios.create({
  baseURL: `https://api.spacexdata.com/v4/launches`
})

class Details extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
        error: null,
        isLoaded: false,
        url: props.location.pathname,
        details: []
    }
  }
  componentDidMount() {
    api.get(`${this.state.url}`)
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            details: res.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, details } = this.state;
        if (error) 
        return <div>Error: {error.message}</div>;
        else if (!isLoaded) 
        return <div>Loading...</div>;
        else{
          return (
            <>
            <DetailsCard details={details} />
            </>
          )
        }
        
    }

}

export default withRouter(Details);