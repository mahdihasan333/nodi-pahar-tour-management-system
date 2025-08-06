import { Outlet } from "react-router";

export default function AdminLayout() {
    return (
        <div>
            <h1>This is AdminLayout Components</h1>
            <Outlet />
        </div>
    );
};

