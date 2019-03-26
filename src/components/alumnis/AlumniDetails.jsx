import React from 'react';
import Loader from '../common/Loader';
import Alert from '../common/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
            <div className="col-xxl-3 col-lg-4 col-md-6">
              <div className="card mb-4">
                <img
                  src={avatar.url}
                  alt={avatar.fileName}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h4 className="mb-0">{name}</h4>
                  <p className="lead">{headline}</p>
                  <ul className="list-unstyled fs--1 mb-0">
                    {email ? (
                      <a
                        href={`mailto:${email}`}
                        className="btn btn-falcon-default btn-sm rounded-pill"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    ) : null}
                    {cell ? (
                      <a
                        href={`tel:0${cell}`}
                        className="btn btn-falcon-default btn-sm rounded-pill ml-2"
                      >
                        <FontAwesomeIcon icon={faPhone} />
                      </a>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Details</h5>
                </div>
                <div className="card-body">
                  <p className="mb-0">
                    {description ? description : `${name} has no details yet!`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default AlumniDetails;
