import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import SignInScreen from "../screens/SignInScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";

export default function AppContent() {
    let { appState } = useContext(AppContext);

    const screens = {
        signInScreen: <SignInScreen />,
        accountDetailsScreen: <AccountDetailsScreen />
    };

    return screens[appState.screen] || <SignInScreen />;
}