import AsyncStorage from "@react-native-async-storage/async-storage"

const usersReducer = (state = {token: null, name: null, url: null, userId: null, countries: []}, action) => {
    switch(action.type) {

    
                case "SIGNIN_INTO_SISTEM":
                    AsyncStorage.setItem("token", action.payload.token);
                    AsyncStorage.setItem("name", action.payload.name);
                    AsyncStorage.setItem("url", action.payload.url);
                    AsyncStorage.setItem("userId", action.payload.userId);
                    return {
                    token: action.payload.token,
                    name: action.payload.name,
                    url: action.payload.url,
                    userId: action.payload.userId,
                    };
            
                case "LOG_OUT":
                    AsyncStorage.removeItem("token");
                    AsyncStorage.removeItem("name");
                    AsyncStorage.removeItem("url");
                    AsyncStorage.removeItem("userId");
                    return {
                    token: null,
                    name: null,
                    url: null,
                    userId: null,
                    };


        case 'GET_COUNTRIES':
            return {
                ...state,
                countries: action.payload,
            }


        default:
            return state
    }
}

export default usersReducer