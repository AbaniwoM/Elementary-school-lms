import UsersService from '../../../services/usersService';
import actions from './usersAction';

export const loadUserAsync = () => (dispatch:any) => {
    dispatch(actions.usersLoadStart());

    UsersService.getAllUsers()
       .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
       .catch((error) => dispatch(actions.usersLoadError(error.message)));
};