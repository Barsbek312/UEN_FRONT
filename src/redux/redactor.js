import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { redactorAPI } from "../API/API";

export const sendRedactorApp = createAsyncThunk('redactor/send-redactor-app', async (data, thunkAPI) => {
    try {
        const res = await redactorAPI.sendRedactorApp(data);

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

export const getRedactorApplication = createAsyncThunk('redactor/get-redactor-application', async (_, thunkAPI) => {
    try {
        const res = await redactorAPI.getRedactorApp();

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

export const delRedactorApplication = createAsyncThunk('redactor/delete-redactor-application', async (id, thunkAPI) => {
    try {
        const res = await redactorAPI.delRedactorApp(id);
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

export const updateRedactorApplication = createAsyncThunk('redactor/update-redactor-application', async ({ data, id }, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await redactorAPI.updateRedactorApp(body, id);
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

export const getRedactorList = createAsyncThunk('redactor/get-redactor-list', async (_, thunkAPI) => {
    try {
        const res = await redactorAPI.getRedactorList();
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

export const deleteRedactor = createAsyncThunk('redactor/delete-redactor', async (redactorId, thunkAPI) => {
    try {
        const res = await redactorAPI.delRedactor(redactorId);

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

export const changeRedactorAva = createAsyncThunk('redactor/change-redactor-ava', async ({ redactorId, data }, thunkAPI) => {
    try {
        const res = await redactorAPI.changeRedactorAva(redactorId, data);

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
export const changeRedactor = createAsyncThunk('redactor/change-redactor', async ({ redactorId, data }, thunkAPI) => {
    try {
        const res = await redactorAPI.changeRedactor(redactorId, data);

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

export const createPost = createAsyncThunk('redactor/create-post', async (data, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await redactorAPI.createPost(body);

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

export const getPostList = createAsyncThunk('redactor/get-post-list', async (_, thunkAPI) => {
    try {
        const res = await redactorAPI.getPostList();
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

export const likePost = createAsyncThunk('redactor/like-post', async (data, thunkAPI) => {
    const body = JSON.stringify(data);

    try {
        const res = await redactorAPI.likePost(body);

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

export const deletePost = createAsyncThunk('redactor/delete-post', async (postId, thunkAPI) => {
    try {
        const res = await redactorAPI.deletePost(postId);

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
    loadingRedactor: false,
    redactorApp: null,
    redactorList: null,
    postList: null
}

const redactorSlice = createSlice({
    name: 'redactor',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(sendRedactorApp.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(sendRedactorApp.fulfilled, state => {
                state.loadingRedactor = false;
            })
            .addCase(sendRedactorApp.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(getRedactorApplication.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(getRedactorApplication.fulfilled, (state, action) => {
                state.loadingRedactor = false;
                state.redactorApp = action.payload.data;
            })
            .addCase(getRedactorApplication.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(delRedactorApplication.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(delRedactorApplication.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(delRedactorApplication.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(updateRedactorApplication.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(updateRedactorApplication.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(updateRedactorApplication.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(getRedactorList.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(getRedactorList.fulfilled, (state, action) => {
                state.loadingRedactor = false;
                state.redactorList = action.payload.data;
            })
            .addCase(getRedactorList.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(deleteRedactor.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(deleteRedactor.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(deleteRedactor.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(changeRedactor.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(changeRedactor.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(changeRedactor.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(changeRedactorAva.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(changeRedactorAva.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(changeRedactorAva.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(createPost.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(createPost.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(getPostList.pending, state => {
                state.loadingRedactor = true;
            })
            .addCase(getPostList.fulfilled, (state, action) => {
                state.loadingRedactor = false;
                state.postList = action.payload.data;
            })
            .addCase(getPostList.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(likePost.pending, state => {
                state.loadingRedactor = false;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(likePost.rejected, state => {
                state.loadingRedactor = false;
            })
            .addCase(deletePost.pending, state => {
                state.loadingRedactor = false;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loadingRedactor = false;
            })
            .addCase(deletePost.rejected, state => {
                state.loadingRedactor = false;
            })
    }
})

export const { } = redactorSlice.actions;
export default redactorSlice.reducer;