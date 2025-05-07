import { useTheme } from "../../context/ThemeContext";
import Button from "../Button/button";

export default function ThemeToggleButton() {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button 
        label={theme === 'light' ? 'Включить тёмную тему' : 'Включить светлую тему'}
        usingFor={'signIn'}
        onClick={toggleTheme}
        theme={theme}
        />
    )
}