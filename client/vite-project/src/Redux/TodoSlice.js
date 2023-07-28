import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

// export const getTodos=createAsyncThunk({
//     'get todos data',
    
// })


export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    todoList:(state,actions)=>{
        return {...state.todos, todos:actions.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const {todoList} = todoSlice.actions

export default todoSlice.reducer