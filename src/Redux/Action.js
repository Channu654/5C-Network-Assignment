import * as types from './ActionType';
import axios from 'axios';

// getting data from given url
const getRepoData = (payload) => (dispatch) => {
  dispatch({ type: types.GIT_REPO_REQUEST });
  return axios
    .get(`https://api.github.com/users/${payload}/repos`)
    .then((res) =>
      dispatch({ type: types.GIT_REPO_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GIT_REPO_FAILURE, payload: err }));
};

// followers data

const getfollowersData = (payload) => (dispatch) => {
  dispatch({ type: types.GIT_FOLLOWERS_REQUEST });
  return axios
    .get(payload)
    .then((res) =>
      dispatch({ type: types.GIT_FOLLOWERS_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.GIT_FOLLOWERS_FAILURE, payload: err })
    );
};

export { getRepoData, getfollowersData };
