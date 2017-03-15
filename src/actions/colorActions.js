export function colorChange(id){
  return { type: 'COLOR_CHANGE', payload: id}
}

export function carChange(direction){
  return { type: 'CAR_CHANGE', payload: direction }
}