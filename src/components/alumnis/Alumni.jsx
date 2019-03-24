import React from 'react';
import { Link } from 'react-router-dom';

const Alumni = ({ alumni }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="media align-items-center">
          <a href={`alumnis/${alumni.id}`} className="text-dark">
            <div className="avatar avatar-5xl">
              <img
                className="rounded-circle img-thumbnail border shadow-sm"
                src={alumni.avatar.url}
                alt={alumni.name}
              />
            </div>
          </a>

          <div className="media-body ml-3">
            <Link to={`alumnis/${alumni.id}`} className="text-dark">
              <h5 className="mb-0">{alumni.name}</h5>
            </Link>
            <p>{alumni.headline}</p>
            <a href={`mailto:${alumni.email}`}>{alumni.email}</a>
            <br />
            {alumni.cell ? (
              <div>
                <strong>Cell: </strong>
                <a href={`tel:0${alumni.cell}`}>0{alumni.cell}</a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
