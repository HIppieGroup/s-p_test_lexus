export function tourEnabled(id) {
  return { type: 'ENABLED_TOUR', payload: id }
}

export function tourSubEnabled(id, subId) {
  return { type: 'ENABLED_SUB_TOUR', payload: { id, subId} }
}

