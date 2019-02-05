import {
  FETCH_ARTICALS_START,
  FETCH_ARTICALS_SUCCESSFUL,
  FETCH_ARTICALS_FAIL,
  // ADD_ARTICALS_START,
  // ADD_ARTICALS_SUCCESSFUL,
  // ADD_ARTICALS_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "../actions";

const initialstate = {
  articals: [],
  isLoggingIn: false,
  isLoggedIn: false,
  isRegistering: false,
  fetchingArticals: false,
  addingArticals: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, isLoggedIn: true };
    case LOGIN_FAIL:
      return { ...state, isLoggingIn: false, error: action.payload };

    case REGISTER_REQUEST:
      return { ...state, isRegistering: true, error: null };
    case REGISTER_SUCCESS:
      return { ...state, isRegistering: false };
    case REGISTER_FAIL:
      return { ...state, isRegistering: false, error: action.payload };

    case FETCH_ARTICALS_START:
      return { ...state, fetchingSmurfs: true, error: null };

    case FETCH_ARTICALS_SUCCESSFUL:
      return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    case FETCH_ARTICALS_FAIL:
      return { ...state, fetchingSmurfs: false, error: action.payload };

    // case ADD_ARTICALS_START:
    //   return { ...state, addingSmurf: true, error: null };

    // case ADD_ARTICALS_SUCCESSFUL:
    //   return { ...state, smurfs: action.payload, fetchingSmurfs: false };

    // case ADD_ARTICALS_FAIL:
    //   return { ...state, fetchingSmurfs: false, error: action.payload };
    default:
      return state;
  }
};
