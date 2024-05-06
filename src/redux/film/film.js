import { createSlice } from '@reduxjs/toolkit'

const currentFilm = localStorage.getItem('currentFilm') ? JSON.parse(localStorage.getItem('currentFilm')) : null

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        currentFilm: currentFilm
    },
    reducers: {
        setCurrentFilm: (state, action) => {
            state.currentFilm = action.payload
            localStorage.setItem('currentFilm', JSON.stringify(state.currentFilm))
        }
    }
})

export const { setCurrentFilm } = filmsSlice.actions
export default filmsSlice.reducer