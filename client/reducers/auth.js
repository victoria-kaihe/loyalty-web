import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions/login'
import {STATS_REQUEST, STATS_SUCCESS, STATS_FAILURE} from '../actions/stats'
import {LOGOUT} from '../actions/logout'
import {UPDATE_USER} from '../actions/index'

const initState = {
  isFetching: false,
  isAuthenticated: false,
  errorMessage: '',
  user: null,
  stats: []
}

export default function (state = initState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null
      }
    case STATS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case STATS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        stats: action.stats
      }
    case STATS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.message
      }
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
