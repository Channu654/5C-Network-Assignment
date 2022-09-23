import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRepoData } from '../Redux/Action';

const Home = () => {
  const [username, setUsername] = useState(followerName || '');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.repository);
  // console.log('state:', state);

  var followerName = JSON.parse(localStorage.getItem('followerName'));

  const followersUrl = state[0]?.owner.followers_url;

  const handleSearch = () => {
    if (state[0]?.owner.login !== username) {
      dispatch(getRepoData(username));
      localStorage.setItem('username', JSON.stringify(username));
    }
  };

  const handleRepo = (item) => {
    localStorage.setItem('id', JSON.stringify(item.id));
    navigate('/repodetail');
  };
  const handleFollower = () => {
    localStorage.setItem('followerRepo', JSON.stringify(followersUrl));
    navigate('/followers');
  };

  useEffect(() => {
    if (followerName !== null) {
      dispatch(getRepoData(followerName));
    }
  }, [dispatch, followerName]);

  return (
    <div>
      <div className='searchbox'>
        <h3>Search github repository by typing userName </h3>
        <input
          type='text'
          placeholder='Search username here...'
          className='input'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <button className='Button' onClick={handleSearch}>
          Search
        </button>
      </div>
      {state.length > 0 && (
        <div className='Container'>
          {state.length > 0 ? (
            <div className='profie'>
              <img src={state[0]?.owner.avatar_url} alt='' />
              <div>
                <h4>{state[0]?.owner.login}</h4>
              </div>
              <div>
                <button className='followers' onClick={handleFollower}>
                  Followers
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className='mainContainer'>
            {state?.map((item, index) => {
              return (
                <div key={index}>
                  <div className='singleRepo'>
                    <div>
                      <img
                        src={item.owner.avatar_url}
                        alt='avatar'
                        className='Image'
                      />
                    </div>
                    <div className='descrepo'>
                      <p
                        className='descrepo-child'
                        onClick={() => handleRepo(item)}>
                        {item?.name}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
