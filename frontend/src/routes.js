import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Loadable from './components/Loadable';
import SearchListing from './pages/SearchListing';

const AdminDashboard = Loadable(lazy(() => import('./admin/Dashboard')));
const SubscriptionCost = Loadable(lazy(() => import('./admin/SubscriptionCost')));
const AdminLayout = Loadable(lazy(() => import('./admin/AdminLayout')));

const Users = Loadable(lazy(() => import('./admin/Users')));
const Companies = Loadable(lazy(() => import('./admin/Companies')));
const SMEs = Loadable(lazy(() => import('./admin/SMEs')));
const Banks = Loadable(lazy(() => import('./admin/Banks')));
const PrivateCompanies = Loadable(lazy(() => import('./admin/PrivateCompanies')));
const DevelopmentPartners = Loadable(lazy(() => import('./admin/DevelopmentPartners')));
const Governments = Loadable(lazy(() => import('./admin/Governments')));

const Subscriptions = Loadable(lazy(() => import('./admin/Subscriptions')));
const ActiveSubscriptions = Loadable(lazy(() => import('./admin/ActiveSubscriptions')));
const InactiveSubscriptions = Loadable(lazy(() => import('./admin/InactiveSubscriptions')));
const NewSubscription = Loadable(lazy(() => import('./admin/NewSubscription')));
const EditSubscription = Loadable(lazy(() => import('./admin/EditSubscription')));

const AllBillboards = Loadable(lazy(() => import('./admin/BillboardRequests')));
const PendingBillboardRequests = Loadable(lazy(() => import('./admin/PendingBillboardRequests')));
const ApprovedBillboardRequests = Loadable(lazy(() => import('./admin/ApprovedBillboardRequests')));
const RejectedBillboardRequests = Loadable(lazy(() => import('./admin/RejectedBillboardRequests')));
const BillboardRequestDetails = Loadable(lazy(() => import('./admin/BillboardRequestDetails')));

const UserLayout = Loadable(lazy(() => import('./user/UserLayout')));
const UserDashboard = Loadable(lazy(() => import('./user/Dashboard')));
const UserSubscriptions = Loadable(lazy(() => import('./user/Subscriptions')));
const EditDetails = Loadable(lazy(() => import('./user/EditDetails')));
const BillBoards = Loadable(lazy(() => import('./user/BillBoards')));
const BillboardRequests = Loadable(lazy(() => import('./user/BillboardRequests')));

const Login = Loadable(lazy(() => import('./auth/Login')));
const ForgotPassword = Loadable(lazy(() => import('./auth/ForgotPassword')));
const ResetPassword = Loadable(lazy(() => import('./auth/ResetPassword')));
const Logout = Loadable(lazy(() => import('./auth/Logout')));
const Register = Loadable(lazy(() => import('./auth/Register')));
const HomePage = Loadable(lazy(() => import('./pages/HomePage')));
const MinimalLayout = Loadable(lazy(() => import('./layout/MinimalLayout')));
const PublicLayout = Loadable(lazy(() => import('./layout/PublicLayout')));

const CompanyListing = Loadable(lazy(() => import('./pages/CompanyListing')));
const RegionListing = Loadable(lazy(() => import('./pages/RegionListing')));
const SMEDetails = Loadable(lazy(() => import('./pages/SMEDetails')));
const BankDetails = Loadable(lazy(() => import('./pages/BankDetails')));
const GovernmentDetails = Loadable(lazy(() => import('./pages/GovernmentDetails')));
const DevelopmentPartnerDetails = Loadable(lazy(() => import('./pages/DevelopmentPartnerDetails')));
const PrivateCompanyDetails = Loadable(lazy(() => import('./pages/PrivateCompanyDetails')));

export default function ThemeRoutes() {
    return useRoutes([{
        path: '',
        element: <MinimalLayout />,
        children: [
            {
                path: '',
                element: <PublicLayout />,
                children: [
                    {
                        path: '',
                        element: <HomePage />
                    },
                    {
                        path: 'company/:company',
                        element: <CompanyListing />
                    },
                    {
                        path: 'sme/:id',
                        element: <SMEDetails />
                    },
                    {
                        path: 'bank/:id',
                        element: <BankDetails />
                    },
                    {
                        path: 'government/:id',
                        element: <GovernmentDetails />
                    },
                    {
                        path: 'development-partner/:id',
                        element: <DevelopmentPartnerDetails />
                    },
                    {
                        path: 'private-company/:id',
                        element: <PrivateCompanyDetails />
                    },
                    {
                        path: 'region/:region',
                        element: <RegionListing />
                    },
                    {
                        path: 'search',
                        element: <SearchListing />
                    }
                ],
            },
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    {
                        path: "",
                        element: <AdminDashboard />
                    },
                    {
                        path: "subscription-cost",
                        element: <SubscriptionCost />
                    },
                    {
                        path: "users",
                        element: <Users />
                    },
                    {
                        path: "companies",
                        element: <Companies />
                    },
                    {
                        path: "companies/sme",
                        element: <SMEs />
                    },
                    {
                        path: "companies/bank",
                        element: <Banks />
                    },
                    {
                        path: "companies/private-company",
                        element: <PrivateCompanies />
                    },
                    {
                        path: "companies/development-partner",
                        element: <DevelopmentPartners />
                    },
                    {
                        path: "companies/government",
                        element: <Governments />
                    },
                    {
                        path: "companies/:id/subscribe",
                        element: <NewSubscription />
                    },
                    {
                        path: "subscriptions",
                        element: <Subscriptions />
                    },
                    {
                        path: "subscriptions/active",
                        element: <ActiveSubscriptions />
                    },
                    {
                        path: "subscriptions/inactive",
                        element: <InactiveSubscriptions />
                    },
                    {
                        path: "subscriptions/:id/edit",
                        element: <EditSubscription />
                    },
                    {
                        path: "billboards",
                        element: <AllBillboards />
                    },
                    {
                        path: "billboards/pending",
                        element: <PendingBillboardRequests />
                    },
                    {
                        path: "billboards/approved",
                        element: <ApprovedBillboardRequests />
                    },
                    {
                        path: "billboards/rejected",
                        element: <RejectedBillboardRequests />
                    },
                    {
                        path: "billboards/:id",
                        element: <BillboardRequestDetails />
                    },
                ],
            },
            {
                path: "dashboard",
                element: <UserLayout />,
                children: [
                    {
                        path: "",
                        element: <UserDashboard />
                    },
                    {
                        path: "subscriptions",
                        element: <UserSubscriptions />
                    },
                    {
                        path: "details",
                        element: <EditDetails />
                    },
                    {
                        path: "billboards",
                        element: <BillBoards />
                    },
                    {
                        path: "billboard/requests",
                        element: <BillboardRequests />
                    },
                ],
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/reset-password/:code',
                element: <ResetPassword />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/logout',
                element: <Logout />
            },
        ]
    }]);
}
