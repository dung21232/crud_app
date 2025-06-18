import React from "react";
import { Link, Outlet } from "react-router-dom";
function Posts() {
    return (
        <div>
            <Link to="postlist">nested postlist</Link>
            <Outlet />
        </div>
    );
}

export default Posts;
