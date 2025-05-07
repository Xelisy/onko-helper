import React, {createContext, useContext, useReducer, useCallback, useMemo, useState} from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => {
            const newTheme = prev === 'light' ? 'venom' : 'light';
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme() должен быть использован внутри ThemeProvider');
    }
    return context;
}