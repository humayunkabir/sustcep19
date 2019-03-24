import React from 'react';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import { getAlumniQuery } from '../../graph/queries';
import { Query } from 'react-apollo';

const AlumniDetails = props => {
  return (
    <Query query={getAlumniQuery} variables={{ ...props.match.params }}>
      {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Alert alert={error} />;
        const {
          name,
          headline,
          description,
          bio,
          email,
          cell,
          avatar
        } = data.alumni;

        console.log({ name, headline, description, bio, email, cell, avatar });

        return (
          <div className="row">
            <div className="col-xxl-3 col-lg-4 col-sm-6 mb-4 mb-sm-0">
              <div className="card">
                <img
                  src={avatar.url}
                  alt={avatar.fileName}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="mb-0">{name}</h4>
                  <p className="lead">{headline}</p>
                  <ul className="list-unstyled fs--1 mb-0">
                    <p className="mb-0">
                      <strong>Cell: </strong>
                      {cell ? <a href={`tel:0${cell}`}>0{cell}</a> : null}
                    </p>
                    <p className="mb-0">
                      <strong>Email: </strong>
                      {email ? <a href={`mailto:${email}`}>{email}</a> : null}
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Details</h5>
                </div>
                <div className="card-body">
                  <p>{description}</p>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3">
              <div className="card">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Contact Info</h5>
                </div>
                <div className="card-body fs--1">
                  
                </div>
              </div>
            </div> */}
          </div>
        );
      }}
    </Query>
  );
};

export default AlumniDetails;
