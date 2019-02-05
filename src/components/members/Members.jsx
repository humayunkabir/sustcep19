import React, { Component } from 'react';
import { members as data } from '../../db.json';
import Member from './Member.jsx';
import Loader from '../common/Loader.jsx';
import Alert from '../common/Alert.jsx';

class Members extends Component {
  state = { data: null, error: null, loading: true }
  componentDidMount = () => {
    setTimeout(() => this.setState({ data, loading: false }), 1000);
  }
  
  render() { 
    const { data, error, loading } = this.state;
    if (loading) return <Loader />;
    if (error) return <Alert alert={error} />;
    return (
      <div className="card-deck">
        {data.map(d => <Member member={d} key={d.id}/>)}
      </div>
    );
  }
}
 
export default Members;