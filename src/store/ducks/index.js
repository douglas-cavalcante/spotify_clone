import { combineReducers } from "redux";

import { reducer as podcasts } from "./podcasts";

export default combineReducers({
    // Remova essa linha depois de adicionar seus ducks
    podcasts
});
