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
  REGISTER_FAIL,
  FETCH_USER_ARTICLES_START,
  FETCH_USER_ARTICLES_SUCCESSFUL,
  FETCH_USER_ARTICLES_FAIL,
  FETCH_USER_ATTRIBUTES_START,
  FETCH_USER_ATTRIBUTES_SUCCESSFUL,
  FETCH_USER_ATTRIBUTES_FAIL,
  FETCH_USERS_START,
  FETCH_USERS_SUCCESSFUL,
  FETCH_USERS_FAIL
} from "../actions";

const initialstate = {
  articals: [],
  users: [],
  userdata: {},
  userid: null,
  isLoggingIn: false,
  isLoggedIn: false,
  isRegistering: false,
  isFetchingUsers: false,
  isFetchingArticals: false,
  isFetchingAttributes: false,
  addingArticals: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  token: localStorage.getItem("TOKEN")
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, error: null };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        token: action.payload.token,
        userid: action.payload.id
      };
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

    case FETCH_USER_ARTICLES_START:
      return { ...state, isFetchingArticals: true, error: null };
    case FETCH_USER_ARTICLES_SUCCESSFUL:
      return { ...state, isFetchingArticals: false, articles: action.payload };
    case FETCH_USER_ARTICLES_FAIL:
      return { ...state, isFetchingArticals: false, error: action.payload };

    case FETCH_USER_ATTRIBUTES_START:
      return { ...state, isFetchingAttributes: true, error: null };
    case FETCH_USER_ATTRIBUTES_SUCCESSFUL:
      return {
        ...state,
        isFetchingAttributes: false,
        userdata: { ...action.payload }
      };
    case FETCH_USER_ATTRIBUTES_FAIL:
      return { ...state, isFetchingAttributes: false, error: action.payload };

    case FETCH_USERS_START:
      return { ...state, isFetchingUsers: true, error: null };
    case FETCH_USERS_SUCCESSFUL:
      return {
        ...state,
        isFetchingUsers: false,
        users: action.payload
      };
    case FETCH_USERS_FAIL:
      return { ...state, isFetchingUsers: false, error: action.payload };
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
