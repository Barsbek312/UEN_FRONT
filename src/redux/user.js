import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { userAPI } from "../API/API";

export const verifyUser = createAsyncThunk('user/verify-user', async (_, thunkAPI) => {
    try {
        const res = await userAPI.verify();

        if (res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
    try {
        const { dispatch } = thunkAPI;
        const checkIsHasUser = await dispatch(verifyUser());
        if (checkIsHasUser.type === "user/verify-user/fulfilled") {
            const res = await userAPI.getMe();

            if (res.status === 200) {
                const res3 = await dispatch(getModeratorList());

                if (res3.type === 'user/get-moderator-list/fulfilled') {
                    const userUrl = res?.data?.url || null;
                    res3?.payload?.data && res3?.payload?.data.forEach(element => {
                        if (element?.user === userUrl) {
                            dispatch(changeIsModerator(true));
                        }
                    });
                }
                return res;
            } else {
                const error = await res.text();
                return thunkAPI.rejectWithValue(error);
            }
        } else {
            const error = await checkIsHasUser.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});


export const createUser = createAsyncThunk("user/register", async (data, thunkAPI) => {
    const body = JSON.stringify(data);
    console.log(body);

    try {
        const res = await userAPI.signup(body);

        console.log(res);

        if (res.status === 201) {
            const token = res.data.access_token;
            document.cookie = `token=${token}; max-age=${2 * 24 * 60 * 60}; path=/`;

            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }

});

export const verifyEmail = createAsyncThunk("user/verify", async (data, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await userAPI.verifyEmail(body);
        if (res.status === 204) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const getModeratorList = createAsyncThunk('user/get-moderator-list', async (_, thunkAPI) => {
    try {
        const res = await userAPI.getModeratorList();

        if (res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const login = createAsyncThunk("user/login", async (data, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await userAPI.login(body);

        if (res.status === 200) {
            const access_token = res.data.access;
            document.cookie = `uen_access_token=${access_token}; max-age=${2 * 24 * 60 * 60}; path=/`;

            const { dispatch } = thunkAPI;

            const res2 = await dispatch(getUser());

            return res2;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

export const getAnotherUser = createAsyncThunk('user/get-another-user', async (url, thunkAPI) => {
    try {
        const res = await userAPI.getAnotherUser(url);

        if (res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

export const getAllUsers = createAsyncThunk('user/get-user-list', async (_, thunkAPI) => {
    try {
        const res = await userAPI.getUserList();

        if (res.status === 200) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const addModerator = createAsyncThunk('user/add-moderator', async (data, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await userAPI.addModerator(body);

        if (res.status === 201) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

export const deleteModerator = createAsyncThunk('user/delete-moderator', async (mod_id, thunkAPI) => {
    try {
        const res = await userAPI.deleteModerator(mod_id);

        if (res.status === 204) {
            return res;
        } else {
            const error = await res.text();
            return thunkAPI.rejectWithValue(error);
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
})

let initialState = {
    user: null,
    loadingUser: false,
    registered: false,
    activated: false,
    isAuth: null,
    status: null,
    isModerator: false,
    moderatorList: null,
    anotherUser: null,
    userListForAdmin: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetRegistered: state => {
            state.registered = false;
        },
        logout: state => {
            document.cookie = 'uen_access_token=; Max-Age=0; path=/';
            state.isAuth = false;
            state.user = null;
            state.isModerator = false;
        },
        changeIsModerator: (state, action) => {
            state.isModerator = action.payload;
        }
    },

    extraReducers: builder => {
        builder
            .addCase(createUser.pending, state => {
                state.loadingUser = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.registered = true;
            })
            .addCase(createUser.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(verifyEmail.pending, state => {
                state.loadingUser = true;
            })
            .addCase(verifyEmail.fulfilled, state => {
                state.loadingUser = false;
            })
            .addCase(verifyEmail.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(login.pending, state => {
                state.loadingUser = true;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.isAuth = true;
            })
            .addCase(login.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(verifyUser.pending, state => {
                state.loadingUser = true;
            })
            .addCase(verifyUser.fulfilled, (state, action) => {
                state.loadingUser = false;
            })
            .addCase(verifyUser.rejected, state => {
                state.loadingUser = false;
                state.isAuth = false;
                state.user = false;
            })
            .addCase(getUser.pending, state => {
                state.loadingUser = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.user = action?.payload?.data;
                state.isAuth = true;
            })
            .addCase(getUser.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(getModeratorList.pending, state => {
                state.loadingUser = true;
            })
            .addCase(getModeratorList.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.moderatorList = action.payload.data;
            })
            .addCase(getModeratorList.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(getAnotherUser.pending, state => {
                state.loadingUser = true;
            })
            .addCase(getAnotherUser.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.anotherUser = action.payload.data;
            })
            .addCase(getAnotherUser.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(getAllUsers.pending, state => {
                state.loadingUser = true;
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loadingUser = false;
                state.userListForAdmin = action.payload.data;
            })
            .addCase(getAllUsers.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(addModerator.pending, state => {
                state.loadingUser = true;
            })
            .addCase(addModerator.fulfilled, (state, action) => {
                state.loadingUser = false;
            })
            .addCase(addModerator.rejected, state => {
                state.loadingUser = false;
            })
            .addCase(deleteModerator.pending, state => {
                state.loadingUser = true;
            })
            .addCase(deleteModerator.fulfilled, (state, action) => {
                state.loadingUser = false;
            })
            .addCase(deleteModerator.rejected, state => {
                state.loadingUser = false;
            })

    }

})

export const { resetRegistered, logout, changeIsModerator } = userSlice.actions;
export default userSlice.reducer;