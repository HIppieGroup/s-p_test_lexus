import initialState from './initialState';

export default function(state=initialState, action){
  switch(action.type){
    case 'VIDEO_ENABLED':
      return [
        ...state.map(item => {
          if (item.id == action.payload){
            return {...item, ...{isEnabled: true}}
          } else {
            return {...item, ...{isEnabled: false}}
          }
        })
      ]

    case 'VIDEO_DISABLED':
      return [
        ...state,
        ...state.find(item => item.id === action.payload).isEnabled = false
      ]

    case 'VIDEO_INIT':
      return [
        ...state,
        ...state.find(item => item.id === action.payload.id).offsetLeft = action.payload.offsetLeft
      ]

    default:
      return state;
  }

  return state;
}