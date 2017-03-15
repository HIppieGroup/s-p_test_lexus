export function videoEnabled(id) {
  return { type: 'VIDEO_ENABLED', payload: id }
}

export function videoDisabled(id) {
  return { type: 'VIDEO_DISABLED', payload: id }
}

export function videoInit(id, e) {
   return { type: 'VIDEO_INIT', payload: {id, offsetLeft: e} }
}