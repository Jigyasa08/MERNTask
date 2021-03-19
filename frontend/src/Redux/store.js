import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { dataReducer } from "../Components/Dashboard/DashboardRedux/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

//Redux Store
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
