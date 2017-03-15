import initialState from './initialState';


export default function(state=initialState,action) {
  switch (action.type){
    case 'ENABLED_TOUR':
      return [
        ...state.map(item => {
          if (item.id === action.payload){
            return {...item, ...{isEnabled: true}}
          } else {
            return {...item, ...{isEnabled: false}}
          }
        })
      ]

    case 'ENABLED_SUB_TOUR':
      return [
        ...state.map(item => {
          if (item.id === action.payload.id){
            return {...item, ...{iner: item.iner.map(sub => {
              if (sub.id === action.payload.subId) {
                return { ...sub, ...{isEnabled: true}}
              } else {
                return { ...sub, ...{isEnabled: false} }
              }
            }) } //инер
          }

          } else {
            return {...item, ...{isEnabled: false}}
          }
        })
      ]
  }
  return state;
}
