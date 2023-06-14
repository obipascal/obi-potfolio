import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { AppState } from "redux/stores"

// Type for our state
export interface AppStateProps {
	theme: "dark" | "light"
	showNavMenu: boolean
}

// Initial state
const initialState: AppStateProps = {
	theme: "light",
	showNavMenu: false
}

// Actual Slice
export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setTheme(state, action) {
			switch (action?.payload) {
				case "dark":
					localStorage.setItem("theme", action?.payload)

					state.theme = action?.payload
					break
				case "light":
					localStorage.setItem("theme", action?.payload)

					state.theme = action?.payload
					break

				default:
					localStorage.setItem("theme", "light")

					state.theme = "light"
					break
			}
		},

		toggleNavMenu(state, action) {
			localStorage.setItem("navbarMenu", action?.payload)
			state.showNavMenu = action?.payload
		},

		// Special reducer for hydrating the state. Special case for next-redux-wrapper
		extraReducers: {
			// @ts-ignore
			[HYDRATE]: (state, action) => {
				return {
					...state,
					...action.payload
				}
			}
		}
	}
})

export const { setTheme, toggleNavMenu } = appSlice.actions

export const getTheme = (state: AppState) => state?.app?.theme
export const inDarkMode = (state: AppState) => state?.app?.theme === "dark"
export const inLightMode = (state: AppState) => state?.app?.theme === "light"
export const getNavMenuState = (state: AppState) => state?.app?.showNavMenu

export default appSlice
