import { combineReducers } from "redux";
import userReducer from "./quotes/users.reducer";
import userReducer2 from "../../features/userSlice";

const rootReducer = () => 
    combineReducers({
        users:userReducer,
        student: userReducer2,
    });

export default rootReducer;