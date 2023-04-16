import { createSlice } from "@reduxjs/toolkit";

const newUser = {
 ID: '',
 Password: '',
 created_at: '',
 email: '',
 first_name: '',
 last_name: '',
 phone: '',
 refresh_token: '',
 token: '',
 updated_at: '',
 user_id: '',
 user_type: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState: {value: newUser},
    reducers: {
        login: (state, action) => {
            console.log('%c state: ', 'color: orange; font-style: italic;', state)
            console.log('%c action: ', 'color: orange; font-style: italic;', action)
            state.value = action.payload;
        },
logout: (state, action) => {state.value = newUser}
    }
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;