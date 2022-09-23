import * as types from './ActionType';

const initState = {
  isLoading: false,
  isError: false,
  repository: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.GIT_REPO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GIT_REPO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        repository: payload,
      };
    case types.GIT_REPO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
