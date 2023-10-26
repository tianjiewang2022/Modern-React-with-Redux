import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";



function UsersList() {
    const dispatch = useDispatch();
    const { if (condition) {

    } else {

    }
} useSelector((state) => {
    return state.users;
})

useEffect(() => {
    dispatch(fetchUsers());

}, [dispatch]);
return 'Users List';
}

export default UsersList;