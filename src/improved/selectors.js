const getItems = state => state.items;

export const getItemIds = state => getItems(state).allIds;

export const getItem = (state,id) => getItems(state).byId[id];