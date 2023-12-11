import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    objectId: 10245,
    apiData: {},
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            return { ...state, apiData: action.payload };
        },
        clearData: () => {
            return initialState;
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload };
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 };
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 };
        },
    },
});

export const { setData, clearData, incrementId, decrementId, inputId } = dataSlice.actions;

export const fetchData = () => {
    const fetchDataThunk = async (dispatch, getState) => {
        try {
            let state = getState();
            const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`);
            const rData = await response.json();
            dispatch(setData(rData));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return fetchDataThunk;
};

export const fetchRandomData = () => {
    const fetchRandomDataThunk = async (dispatch, getState) => {
        try {
            const response = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/random');
            const rData = await response.json();
            dispatch(setData(rData));
        } catch (error) {
            console.error('Error fetching random data:', error);
        }
    };
    return fetchRandomDataThunk;
};

export default dataSlice.reducer;
