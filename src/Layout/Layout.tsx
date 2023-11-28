import { Outlet } from 'react-router';
import React from 'react';

const Layout = () => {
    return (
        <>
            {/* header or smth */}
            <Outlet />
        </>
    );
};

export default Layout;
