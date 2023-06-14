import React from "react"
import { useSelector } from "react-redux"
import { getTheme } from "redux/reducers/appSlice"

type XDividerProps = {
	classes?: string
}
export default function XDivider(props: XDividerProps) {
	return <hr className={`divide-y-2 ${props?.classes} border-slate-200 dark:border-slate-600`} />
}
