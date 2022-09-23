import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RepoDetails = () => {
  const navigate = useNavigate();
  var id = JSON.parse(localStorage.getItem('id'));

  const repo = useSelector((state) => state.repository);
  console.log('repo:', repo);

  console.log('repo:', repo);

  const details = repo.find((x) => x.id === id);

  const handelback = () => {
    navigate('/');
  };

  return (
    <div className='repo-Inner'>
      <div>
        <img
          src={details.owner.avatar_url}
          alt='avatar'
          className='detailImage'
        />
      </div>
      <div>
        <h3>{details.name}</h3>
        <p>{details.description}</p>
        <button onClick={handelback} className='followers-back'>
          Back
        </button>
      </div>
    </div>
  );
};

export default RepoDetails;
