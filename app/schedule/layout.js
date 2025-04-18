
import React from 'react';

function Layout({children}) {
    return (
        <div className="flex flex-col w-full h-full">
            {children}
        </div>
    );
}

export default Layout;