'use client';

import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const useMyContext = () => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a ContextProvider');
    }
    return context;
};

export const ContextProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    const value = {
        blogs,
        setBlogs,
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;