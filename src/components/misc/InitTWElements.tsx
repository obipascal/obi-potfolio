import React from "react"
import { Carousel, Input, Ripple, initTE } from "tw-elements"

export default function InitTWElements() {
	React.useEffect(() => {
		initTE({ Carousel, Input, Ripple })
	})
	return null
}
