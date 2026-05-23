import { FC } from "react";
import { Stage } from "../Stage";
import { ScreenType } from "./BaseScreen";

interface TownScreenProps {
	stage: () => Stage;
	setScreenType: (type: ScreenType) => void;
	isVerticalLayout: boolean;
}

export const TownScreen: FC<TownScreenProps> = ({ stage, setScreenType, isVerticalLayout }) => {
    return (
        <></>
    );
}