import { lazy } from "react";
import { Navigate } from "react-router-dom";
import { isAdmin, isUser } from "../auth/AuthProvider";
import Loadable from "../components/Loadable";
import menuItems from "../menu-items";
import UserLayout from "../user/UserLayout";

const MainLayout = Loadable(lazy(() => import("../layout/MainLayout")));

const AdminLayout = () => isAdmin() ? (
    <MainLayout menuItems={menuItems} />
) : isUser() ? (
    <UserLayout />
) : (
    <Navigate to="/login" />
)

export default AdminLayout