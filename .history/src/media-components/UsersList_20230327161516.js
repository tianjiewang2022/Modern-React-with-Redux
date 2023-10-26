import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";




function UsersList() {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false);
    // const [loadingUsersError, setLoadingUsersError] = useState(null);

    const [doCreateUser, isCreatingUser, creatingUserError] =
        useThunk(addUser);


    // const [isCreatingUser, setIsCreatingUser] = useState(false);
    // const [creatingUserError, setCreatingUserError] = useState(null);
    // const dispatch = useDispatch();


    const { data } = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        doFetchUsers();

        // setIsLoadingUsers(true);
        // dispatch(fetchUsers())
        //     .unwrap()
        //     // .then(() => {
        //     //     setIsLoadingUsers(false);
        //     // })
        //     .catch((err) => {
        //         setLoadingUsersError(err);
        //         // setIsLoadingUsers(false);
        //     })
        //     .finally(() => {
        //         setIsLoadingUsers(false);
        //     });
    }, [doFetchUsers]);

    const handleUserAdd = () => {
        doCreateUser();


        // setIsCreatingUser(true);
        // dispatch(addUser())
        //     .unwrap()
        //     .catch(err => setCreatingUserError(err))
        //     .finally(setIsCreatingUser(false));
    };

    if (isLoadingUsers === true) {
        // return <div>Loading...</div>;
        return <Skeleton times={6} className="h-10 w-full" />;
    }
    if (loadingUsersError) {
        return <div>Error fetching data...</div>;
    }


    const renderedUsers = data.map((user) => {
        return (
            <div key={user.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {user.name}
                </div>
            </div >
        );
    });
    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {/* {
                    isCreatingUser
                        ? 'Creating User...' */}
                <Button onClick={handleUserAdd}>
                    + Add User
                </Button>
                {/* } */}
                {creatingUserError && 'Error creating user...'}
            </div>
            {renderedUsers}
        </div>
    );
}

export default UsersList;