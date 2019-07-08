import { combineReducers } from "redux";

import { reducer as podcats } from "./podcats";

const reducers = combineReducers({
    // Remova essa linha depois de adicionar seus ducks
    podcats
});

export default reducers;
