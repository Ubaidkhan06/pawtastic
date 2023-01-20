import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    data  : {
        users : {
            firstName : '',
            lastName : '',
            phone : '',
            landLine : '',
            city : '',
            state : '',
            zip : '',
            address : ''
        },
        pet : {
            name : '',
            image : '',
            breed : '',
            birthday : '',
            gender : '',
            spayedOrNeutered : '',
            weight : [],
            petDetails : '',
            petHabits : ''
        }
    }
}


export const dataSlice = createSlice({
    name : 'data',
    initialState,
    reducers : {
        addData : (state, action) =>{
            state.data = {...state.data, }
        }
    }
})