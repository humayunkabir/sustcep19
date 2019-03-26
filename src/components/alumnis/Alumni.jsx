import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Alumni = ({ alumni }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="media align-items-center">
          <Link to={`alumnis/${alumni.id}`}>
            <div className="avatar avatar-5xl">
              <img
                className="rounded-circle img-thumbnail border shadow-sm"
                src={alumni.avatar.url}
                alt={alumni.name}
              />
            </div>
          </Link>

          <div className="media-body ml-3">
            <Link to={`alumnis/${alumni.id}`} className="text-dark">
              <h5 className="mb-0">{alumni.name}</h5>
            </Link>
            <p>{alumni.headline}</p>
            {alumni.email ? (
              <a
                href={`mailto:${alumni.email}`}
                className="btn btn-falcon-default btn-sm rounded-pill"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            ) : null}
            {alumni.cell ? (
              <a
                href={`tel:0${alumni.cell}`}
                className="btn btn-falcon-default btn-sm rounded-pill ml-2"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
