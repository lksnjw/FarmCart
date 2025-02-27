import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound'
import Login from './Pages/Customer/LoginForm'
import Register from './Pages/Customer/RegisterForm'
import UserProfile from './Pages/Customer/UserProfile'
import PrivateRoute from './Components/PrivateRoute'
import VerifyEmail from './Pages/Customer/VerifyEmail'
import CheckEmail from './Pages/Customer/CheckEmail'
import ForgotPassword from './Pages/Customer/ForgotPassword'
import ResetPassword from './Pages/Customer/PasswordReset'
import UserDashboard from './Pages/Customer/UserDashboard'
import Settings from './Pages/Customer/Settings'
import OrderHistory from './Components/OrderTable'
import UserAllOrders from './Pages/Customer/UserAllOrders'
import FileUploadTest from './Pages/Temp_FileUploadTest'
import FarmerLogin from './Pages/farmer/FarmerLogin'
import Dashboard from './Pages/farmer/FarmerDashbaord'
import ProfilePage from './Pages/farmer/FarmerProfile'
import FarmerLogout from './Pages/farmer/LogOut'
import FarmerRegister from './Pages/farmer/FarmerRegistaration'
import MyShop from './Pages/farmer/Myshops'
import AddShop from './Pages/farmer/shopcreate'
import Shop from './Pages/farmer/ShopDashboard'
import ShopProfile from './Pages/farmer/shopProfile'
import Products from './Pages/farmer/products'
import AddProduct from './Pages/farmer/addProduct'
import UpdateProduct from './Pages/farmer/UpdateProduct'

import DLDriverRegistrationForm from './Pages/delivery/DLDriverRegistrationForm'
import DLApproveDriver from './Pages/delivery/DLApproveDriver' // Ensure the path is correct
import DLDriverAccept from './Pages/delivery/DLDriverAccept'
import DLImageUpload from './DLImageUpload'
import DLSendEmail from './Pages/delivery/DLSendEmail' // Import the DLSendEmail component
import DLLogin from './Pages/delivery/DLLogin' // Added DLLogin import

import DeliveryDashboard from './Pages/delivery/DLDriverDashboard';
import DLDriverProfile from './Pages/delivery/DLDriverProfile' // Import the driver profile component
import DLEditProfile from './Pages/delivery/Dleditprofile';
import DLALLdrivers from './Pages/delivery/DLALLdrivers'; // Import the DLALLdrivers component
import DLmanageDash from './Pages/delivery/DLmangeDash'; // Adjust the path if necessary
import DLViewDriver from './Pages/delivery/DLViewDriver';  // Adjust the path according to your project structure
import DLlogout from './Pages/delivery/DLlogout'; // Import the DLlogout component
import DLeditdriver from './Pages/delivery/DLeditdriver'; // Import the new DLeditdriver page
import OrderForm from './Pages/delivery/DLoooo'; // Assuming OrderForm component is in 'components' folder
import OrderTable from './Pages/delivery/DLOtable'; // Assuming you store it in the components folder
import Od from './Pages/delivery/or/orderdelete'; //
import DLAllDeliveries from './Pages/delivery/DLviewDeliveries'; // Import the DLAllDeliveries component
import DLViewDelivery from './Pages/delivery/DLviewDelivery'; // Import the


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>


             <Route index element={<HomePage />} />
             <Route path="/register-driver" element={<DLDriverRegistrationForm />} />
                <Route path="/upload-image" element={<DLImageUpload />} />
             <Route path="/manager/approve-driver" element={<DLApproveDriver />} />
             <Route path="/manager/approve-driver/:id" element={<DLDriverAccept />} />
             <Route path="/manager/approve-driver/:id/send-email" element={<DLSendEmail />} />

             <Route path="/driver/login" element={<DLLogin />} />  {/* Driver Login Route */}
             <Route path="/driver/dashboard" element={<DeliveryDashboard />} />
             <Route path="/driver/profile" element={<DLDriverProfile />} /> {/* Add profile route */}
             <Route path="/driver/profile/edit" element={<DLEditProfile />} />
             <Route path="/alldrivers" element={<DLALLdrivers />} />
             <Route path="/manager/dashboard" element={<DLmanageDash />} />
             <Route path="/manager/view-driver/:id" element={<DLViewDriver />} />
             <Route path="/driver/logout" element={<DLlogout />} />
             <Route path="/driver/edit/:id" element={<DLeditdriver />} />
             <Route path="/a" element={<OrderForm />} />
             <Route path="/b" element={<OrderTable />} />
            <Route path="/d" element={<Od/>} />
            <Route path="/DLAllDeliveries" element={<DLAllDeliveries/>} />
           <Route path="/manager/delivery/:id" element={<DLViewDelivery />} />





























            {/*<Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-pass" element={<ResetPassword />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/order/:orderId" element={<OrderDetails />} /> 
            <Route path="/register" element={<Register />} />
            <Route path="/checkEmail" element={<CheckEmail />} />
            <Route path="/verifyEmail" element={<VerifyEmail />} />
            <Route path="/profile" element={<PrivateRoute />}>
                <Route path="" element={<UserProfile />} />
            </Route>
            <Route path="/userDashboard" element={<UserDashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/userAllOrders" element={<UserAllOrders />} />
            <Route path="/fileUploadTest" element={<FileUploadTest />} />

            <Route path="/farmerLogin" element={<FarmerLogin />} />
            <Route path="/farmerRegister" element={<FarmerRegister />} />
            <Route path="/farmerdashboard" element={<Dashboard />} />
            <Route path="/farmerprofile" element={<ProfilePage />} />
            <Route path="/myshops" element={<MyShop />} />
            <Route path="/shopcreate" element={<AddShop />} />
            <Route path="/shop/:id" element={<Shop />} />
            <Route path="/shop/profile" element={<ShopProfile />} />
            <Route path="/shop/:id/productpage" element={<Products />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
            <Route path="/logout" element={<FarmerLogout />} />*/}
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

const App = () => {
    return <RouterProvider router={router}></RouterProvider>
}

export default App
