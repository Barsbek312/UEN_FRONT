import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { orgAPI } from "../API/API";

export const sendOrgApp = createAsyncThunk('org/send-org-app', async (data, thunkAPI) => {
    try {
        const res = await orgAPI.sendOrgApp(data);

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

export const getOrgApplication = createAsyncThunk('org/get-org-application', async (_, thunkAPI) => {
    try {
        const res = await orgAPI.getOrgApp();

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

export const delOrgApplication = createAsyncThunk('org/delete-org-application', async (id, thunkAPI) => {
    try {
        const res = await orgAPI.delOrgApp(id);
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

export const updateOrgApplication = createAsyncThunk('org/update-org-application', async ({ data, id }, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await orgAPI.updateOrgApp(body, id);
        console.log(res);
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

export const getOrgList = createAsyncThunk('org/get-org-list', async (_, thunkAPI) => {
    try {
        const res = await orgAPI.getOrgList();
        console.log(res);

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

export const deleteOrg = createAsyncThunk('org/delete-org', async (orgId, thunkAPI) => {
    try {
        const res = await orgAPI.delOrg(orgId);

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

export const changeOrgAva = createAsyncThunk('org/change-org-ava', async ({ orgId, data }, thunkAPI) => {
    try {
        const res = await orgAPI.changeOrgAva(orgId, data);

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

export const changeOrg = createAsyncThunk('org/change-org', async ({ orgId, data }, thunkAPI) => {
    try {
        const res = await orgAPI.changeOrg(orgId, data);

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

export const getFavoriteOrg = createAsyncThunk('org/get-favorite-org', async (_, thunkAPI) => {
    try {
        const res = await orgAPI.getFavoriteOrg();

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

export const addFavoriteOrg = createAsyncThunk('org/add-fav-org', async (data, thunkAPI) => {
    const body = JSON.stringify(data);
    try {
        const res = await orgAPI.addFavoriteOrg(body);
        console.log(res);
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

export const deleteFavoriteOrg = createAsyncThunk('org/del-fav-org', async (favOrgId, thunkAPI) => {
    try {
        const res = await orgAPI.deleteFavoriteOrg(favOrgId);

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
    loadingOrg: false,
    orgApp: null,
    orgList: null,
    favOrgList: null
}

const orgSlice = createSlice({
    name: 'org',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sendOrgApp.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(sendOrgApp.fulfilled, state => {
                state.loadingOrg = false;
            })
            .addCase(sendOrgApp.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(getOrgApplication.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(getOrgApplication.fulfilled, (state, action) => {
                state.loadingOrg = false;
                state.orgApp = action.payload.data;
            })
            .addCase(getOrgApplication.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(delOrgApplication.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(delOrgApplication.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(delOrgApplication.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(updateOrgApplication.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(updateOrgApplication.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(updateOrgApplication.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(getOrgList.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(getOrgList.fulfilled, (state, action) => {
                state.loadingOrg = false;
                state.orgList = action.payload.data;
            })
            .addCase(getOrgList.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(deleteOrg.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(deleteOrg.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(deleteOrg.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(changeOrgAva.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(changeOrgAva.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(changeOrgAva.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(changeOrg.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(changeOrg.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(changeOrg.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(getFavoriteOrg.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(getFavoriteOrg.fulfilled, (state, action) => {
                state.loadingOrg = false;
                state.favOrgList = action.payload.data;
            })
            .addCase(getFavoriteOrg.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(addFavoriteOrg.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(addFavoriteOrg.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(addFavoriteOrg.rejected, state => {
                state.loadingOrg = false;
            })
            .addCase(deleteFavoriteOrg.pending, state => {
                state.loadingOrg = true;
            })
            .addCase(deleteFavoriteOrg.fulfilled, (state, action) => {
                state.loadingOrg = false;
            })
            .addCase(deleteFavoriteOrg.rejected, state => {
                state.loadingOrg = false;
            })
    }
})

export const { } = orgSlice.actions;
export default orgSlice.reducer;