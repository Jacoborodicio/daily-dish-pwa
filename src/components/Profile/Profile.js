import {useSelector} from "react-redux";
import Button from "../Buttons/Button";
import {logout} from "../../features/user";
import {changeTheme} from "../../features/theme";
import {useDispatch} from "react-redux";
import dayjs from "dayjs";
import {useEffect} from "react";
import axios from "axios";
import {api} from "../../helpers/constants";

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    const theme = useSelector((state) => state.theme.value);

    const getDemoAsync = async () => {
        try {
            const response = await axios.get(api.dishes);
            console.log('%c response: ', 'color: orange; font-style: italic;', response)
        } catch (error) {
            console.log('%c error in dishes: ', 'color: orange; font-style: italic;', error)
        }
    }
    useEffect(() => {
            const demoResponse = getDemoAsync();
            console.log('%c demoResponse: ', 'color: orange; font-style: italic;', demoResponse)
    }, [])
    return (
        <div style={theme.currentTheme === "LIGHT" ? {backgroundColor: 'red'} : {}}>
            <h1>Profile page</h1>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <p>Active since: {dayjs(user.created_at.toString()).format('dd.mm.YYYY')}</p>

            <Button link={'/login'} onClick={() => dispatch(logout())}>
                Logout
            </Button>
            <Button onClick={() => dispatch(changeTheme(theme.currentTheme === "dark" ? {currentTheme: 'light'} : {currentTheme: "dark"}))}>
                Change Theme
            </Button>
        </div>
    )
}

export default Profile;
