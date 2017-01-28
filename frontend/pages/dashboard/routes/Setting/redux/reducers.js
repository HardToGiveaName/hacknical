import { handleActions } from 'redux-actions';
import objectAssign from 'object-assign';
import dateHelper from 'UTILS/date';

const initialState = {
  loading: true,
  updateTime: null
};

const reducers = handleActions({
  TOGGLE_SETTING_LOADING(state, action) {
    return ({
      ...state,
      loading: action.payload
    });
  },

  SET_UPDATE_TIME(state, action) {
    const updateRawTime = action.payload;
    const updateTime = updateRawTime ? dateHelper.relative.secondsBefore(updateRawTime) : state.updateTime;
    return ({
      ...state,
      updateTime,
      loading: false
    });
  }
}, initialState)

export default reducers;
