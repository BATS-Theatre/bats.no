import { LuMenu, LuX } from 'react-icons/lu'

export default function Toggle() {
	return (
		<label
			htmlFor="header-toggle"
			className="burger [grid-area:toggle] z-50 md:hidden"
		>
			<input id="header-toggle" type="checkbox" hidden />
			<div />
			<div />
			<div />
		</label>
	)
}
