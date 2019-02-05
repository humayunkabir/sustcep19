import React from 'react';

const Member = ({ member }) => {
  return (
    <div className="card" style={{ maxWidth: '24rem' }}>
      <div className="card-body">
        <h4 className="card-title">{member.name}</h4>
        <p className="lead">{member.reg}</p>
        {member.current_job && (
          <React.Fragment>
            <h6>{member.current_job.job_title}</h6>
            <p>{member.current_job.institution}</p>
            <p>{member.current_job.job_location}</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}
 
export default Member;
