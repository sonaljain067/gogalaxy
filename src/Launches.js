import React from 'react';
import axios from 'axios';
import DataTable from './DataTable'
const api = axios.create({
  baseURL: `https://api.spacexdata.com/v4/launches`
})

class Launches extends React.Component {
  constructor() {
    super();
    this.state = {
        error: null,
        isLoaded: false,
        launches: []
    }
  }
  componentDidMount() {
    api.get('/')
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            launches: res.data
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
    const { error, isLoaded, launches } = this.state;
        if (error) 
        return <div>Error: {error.message}</div>;
        else if (!isLoaded) 
        return <div>Loading...</div>;
        else{
          return (
            <>
            <DataTable launches={launches} />
            </>
          )
        }
        
    }

}

export default Launches;
