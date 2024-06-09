import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { volAPI } from "../API/API";

export const sendVolApplication = createAsyncThunk('vol/send-vol-application', async (data, thunkAPI) => {
    try {
        const res = await volAPI.sendVolApp(data);

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

export const getVolApplication = createAsyncThunk('vol/get-vol-application', async (_, thunkAPI) => {
    try {
        const res = await volAPI.getVolApp();

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

export const delVolApplication = createAsyncThunk('vol/delete-vol-application', async (id, thunkAPI) => {
    try {
        const res = await volAPI.delVolApp(id);
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

export const updateVolApplication = createAsyncThunk('vol/update-vol-application', async ({ data, id }, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await volAPI.updateVolApp(body, id);
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

export const getVolunteerList = createAsyncThunk('vol/get-vol-list', async (_, thunkAPI) => {
    try {
        const res = await volAPI.getVolList();
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

export const deleteVolunteer = createAsyncThunk('vol/delete-vol', async (volId, thunkAPI) => {
    try {
        const res = await volAPI.delVol(volId);

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

export const getVolunteer = createAsyncThunk('vol/get-vol', async (volId, thunkAPI) => {
    try {
        console.log(volId);
        const res = await volAPI.getVol(volId);
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

export const changeVolAva = createAsyncThunk('vol/change-vol-ava', async ({ volId, data }, thunkAPI) => {
    try {
        const res = await volAPI.changeVolAva(volId, data);

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

export const changeVol = createAsyncThunk('vol/change-vol', async ({ volId, data }, thunkAPI) => {
    try {
        const res = await volAPI.changeVol(volId, data);

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

let initialState = {
    loadingVol: false,
    volApp: null,
    volList: null,
    vol: null
}

const volSlice = createSlice({
    name: "vol",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(sendVolApplication.pending, state => {
                state.loadingVol = true;
            })
            .addCase(sendVolApplication.fulfilled, state => {
                state.loadingVol = false;
            })
            .addCase(sendVolApplication.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(getVolApplication.pending, state => {
                state.loadingVol = true;
            })
            .addCase(getVolApplication.fulfilled, (state, action) => {
                state.loadingVol = false;
                state.volApp = action.payload.data;
            })
            .addCase(getVolApplication.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(delVolApplication.pending, state => {
                state.loadingVol = true;
            })
            .addCase(delVolApplication.fulfilled, (state, action) => {
                state.loadingVol = false;
            })
            .addCase(delVolApplication.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(updateVolApplication.pending, state => {
                state.loadingVol = true;
            })
            .addCase(updateVolApplication.fulfilled, (state, action) => {
                state.loadingVol = false;
            })
            .addCase(updateVolApplication.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(getVolunteerList.pending, state => {
                state.loadingVol = true;
            })
            .addCase(getVolunteerList.fulfilled, (state, action) => {
                state.loadingVol = false;
                state.volList = action.payload.data;
            })
            .addCase(getVolunteerList.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(deleteVolunteer.pending, state => {
                state.loadingVol = true;
            })
            .addCase(deleteVolunteer.fulfilled, (state, action) => {
                state.loadingVol = false;
            })
            .addCase(deleteVolunteer.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(getVolunteer.pending, state => {
                state.loadingVol = true;
            })
            .addCase(getVolunteer.fulfilled, (state, action) => {
                state.loadingVol = false;
                state.vol = action.payload.data;
            })
            .addCase(getVolunteer.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(changeVolAva.pending, state => {
                state.loadingVol = true;
            })
            .addCase(changeVolAva.fulfilled, (state, action) => {
                state.loadingVol = false;
            })
            .addCase(changeVolAva.rejected, state => {
                state.loadingVol = false;
            })
            .addCase(changeVol.pending, state => {
                state.loadingVol = true;
            })
            .addCase(changeVol.fulfilled, (state, action) => {
                state.loadingVol = false;
            })
            .addCase(changeVol.rejected, state => {
                state.loadingVol = false;
            })
    }
})

export const { } = volSlice.actions;
export default volSlice.reducer;