import initialState from './initialState';


export default function(state=initialState, action) {
  switch(action.type){
    case 'COLOR_CHANGE':
      return [
        ...state.map(item => {
          if (item.id == action.payload){
            return {...item, ...{isEnabled: true}}
          } else {
            return {...item, ...{isEnabled: false}}
          }
        })
      ]
  }
  return state;
}