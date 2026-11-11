import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function AppContent() {
    let { appState } = useContext(AppContext);

    return appState.screen;
}