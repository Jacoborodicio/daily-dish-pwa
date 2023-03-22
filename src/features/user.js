import { createSlice } from "@reduxjs/toolkit";

const defaultUser = {
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    token: "",
    updatedAt: "",
    createdAt: "",
    userType: "",
};
export const userSlice = createSlice({
    name: "user",
    initialState: {...defaultUser},
    reducers: {
        login: (state, action) => {

            state.value = action.payload;
        },
        logout: (state, action) => {state.value = initialStateValue}
    }
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

