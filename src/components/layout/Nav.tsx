import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTheme, setTheme } from "redux/reducers/appSlice"
import IconSunFill from "../icons/IconSunFill"
import IconMoonSharp from "../icons/IconMoonSharp"

export default function Nav() {
	const theme = useSelector(getTheme)

	const dispatcher = useDispatch()

	const toggleDarkmode = () => dispatcher(setTheme("dark"))
	const toggleLightmode = () => dispatcher(setTheme("light"))

	React.useEffect(() => {
		if (localStorage?.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			dispatcher(setTheme("dark"))
		} else {
			if (localStorage?.theme) {
				dispatcher(setTheme(localStorage.getItem("theme")))
			}
		}

		switch (theme) {
			case "dark":
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("light")
				break

			case "light":
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("dark")
				break
			default:
				document.documentElement.classList.add(theme)
				document.documentElement.classList.remove("dark")
		}
	}, [theme])

	return (
		<nav className={"sticky shadow-sm top-0 left-0 right-0 backdrop-blur w-full  p-2 z-50 bg-slate-50/50 dark:bg-slate-900/75"}>
			<div className="flex item-center justify-center">
				<div className="p-1">
					<h1 className="p-2 flex items-center text-slate-900 dark:text-slate-50">
						{theme === "dark" && (
							<>
								<IconSunFill width={"2em"} height={"2em"} onClick={toggleLightmode} className="mr-1" />
								Light
							</>
						)}

						{theme === "light" && (
							<>
								<IconMoonSharp width={"2em"} height={"2em"} onClick={toggleDarkmode} className="mr-1" />
								Dark
							</>
						)}
					</h1>
				</div>
			</div>
		</nav>
	)
}
