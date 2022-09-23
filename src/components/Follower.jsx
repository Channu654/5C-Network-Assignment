import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getfollowersData } from '../Redux/Action';

const Followers = () => {
  const state = useSelector((state) => state.followers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // getting data back from local storage without calling api
  const followersRepo = JSON.parse(localStorage.getItem('followerRepo'));

  // handling followers repo
  const handleFollowerRepo = (item) => {
    localStorage.setItem('followersrepo', JSON.stringify(item.repos_url));
    localStorage.setItem('followerName', JSON.stringify(item.login));
    navigate('/');
  };

  useEffect(() => {
    dispatch(getfollowersData(followersRepo));
  }, [followersRepo, dispatch]);

  return (
    <div className='followers-container'>
      <h1>followers</h1>
      {state?.map((item, index) => {
        const { avatar_url, login } = item;
        return (
          <div key={index}>
            <div>
              <img src={avatar_url} className='followers-Img' alt='' />
              <p
                className='followers-Repo'
                onClick={() => handleFollowerRepo(item)}>
                {login}
              </p>
            </div>

            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
