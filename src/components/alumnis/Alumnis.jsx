import React, { Component } from 'react';
import Alumni from './Alumni';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import { getAlumnisQuery } from '../../graph/queries';
import { Query } from 'react-apollo';

class Members extends Component {
  render() {
    return (
      <div className="row">
        <Query query={getAlumnisQuery}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <Alert alert={error} />;
            return data.alumnis.map(alumni => (
              <div className="col-lg-6" key={alumni.id}>
                <Alumni alumni={alumni} />
              </div>
            ));
          }}
        </Query>
      </div>
    );
  }
}

export default Members;
