export default function(state='',action){
  if (action.type === 'CAR_CHANGE') {
    return action.payload
  }
  return state;
}