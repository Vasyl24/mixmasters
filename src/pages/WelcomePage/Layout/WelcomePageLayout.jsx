import { Outlet } from "react-router-dom";
import {
	containerLayout,
	gradientContainer,
	circleContainer,
} from "./WelcomePageLayout.module";

export default function WelcomePageLayout() {
	return (
		<div className={containerLayout}>
			<div className={gradientContainer}></div>
			<div className={circleContainer}></div>
			<Outlet />
		</div>
	);
}
