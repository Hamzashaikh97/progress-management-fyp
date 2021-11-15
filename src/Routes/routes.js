import Booking from "../Components/customer/Pages/Booking/Booking";
import Appointment from "../Components/customer/Pages/Appointment/Appointment"
import Checkout from "../Components/customer/Pages/Checkout/Checkout";
import SearchResult from "../Components/customer/Pages/Shops/Shops";
import StoreView from "../Components/customer/Pages/ShopView/ShopView";
import Spa from "../Components/customer/Pages/Service/Spa/Spa";
import Hairdresser from "../Components/customer/Pages/Service/Haidresser/Hairdresser";
import Beautician from "../Components/customer/Pages/Service/Beautician/Beautician";
import Barber from "../Components/customer/Pages/Service/Barber/Barber";
import Dentist from "../Components/customer/Pages/Service/Dentist/Dentist";
import Doctor from "../Components/customer/Pages/Service/Doctor/Doctor";
import Home from "../Components/customer/Pages/Home/Home";
import Account from "../Components/customer/Pages/MyAccount/Account"

//Admin Routes
import Dashboard from "../Components/Admin/Pages/dashboard/ecommerce";
import AdminVendor from "../Components/Admin/Pages/Students/Students";
import AdminCustomers from "../Components/Admin/Pages/Teachers/Teachers";
import AdminSubscription from "../Components/Admin/Pages/ActivityLogs/ActivityLogs";
import Events from "../Components/Admin/Pages/Events/Events";
import Location from "../Components/Admin/Pages/Location/Location";
import Reports from "../Components/Admin/Pages/OverAllReports/GenerateReport";


// Student Routes
import StudentDashboard from "../Components/Student/Pages/dashboard/ecommerce";
import Calendar from "../Components/Student/Pages/calender/Calender";
import CourseDetails from "../Components/Student/Pages/courseDetails/CourseDetails";
import CvBuilder from "../Components/Student/Pages/cvBuilder/CvBuilder";
import SoftSkills from "../Components/Student/Pages/softSkills/SoftSkills";
import TechnicalSkills from "../Components/Student/Pages/TechnicalSkills/TechnicalSkills";
import Transcript from "../Components/Student/Pages/transcript/Transcript";
import UpComingEvents from "../Components/Student/Pages/upComingEvents/UpComingEvents"


// Vendor Routes
import EcommerceDashboard from "../Components/vendor/Pages/dashboard/ecommerce";
import Service from "../Components/vendor/Pages/StudentActivites/StudentActivities";
import Staff from "../Components/vendor/Pages/Manage Location/ManageLocation";
import CalendarBooking from "../Components/vendor/Pages/Manage Courses/ManageCourses";
import Review from "../Components/vendor/Pages/Activity Logs/ActivityLogs";
import BookingVendor from "../Components/vendor/Pages/ActivityForms/ActivityForms";
import Package from "../Components/vendor/Pages/Package/Package";
import Setting from "../Components/vendor/Pages/Setting/Setting";
import Category from "../Components/vendor/Pages/Category/Category";
import Gallery from "../Components/vendor/Pages/Gallery/Gallery";
export const MainLayoutPath = [
	{
		path: '/booking',
		component: Booking
	},
	{
		path: '/checkout',
		component: Checkout
	},
	{
		path: "/Account",
		component: Account
	},
	{
		path: '/appointment/:id',
		component: Appointment
	},
	{
		path: '/service/:id',
		component: StoreView
	},
	{	
		path: '/result',
		component: SearchResult
	},
	{
		path: '/spa',
		component: Spa
	},
	{
		path: '/hairdresser',
		component: Hairdresser
	},
	{
		path: '/beautician',
		component: Beautician
	},
	{
		path: '/barber',
		component: Barber
	},
	{
		path: '/dentist',
		component: Dentist
	},
	{
		path: '/doctor',
		component: Doctor
	},
	{
		path: '/',
		component: Home,
		exact: true
	}
]

export const VendorLayoutPath = [
	{
		path: 'dashboard',
		component: EcommerceDashboard
	},
	{
		path: 'service',
		component: Service
	},
	{
		path: 'location',
		component: Staff
	},
	{
		path: 'courses',
		component: CalendarBooking
	},
	{
		path: 'activity',
		component: Review
	},
	{
		path: 'studentActivity',
		component: BookingVendor
	},
	{
		path: 'ActivityForms',
		component: Category
	},
	{
		path: 'gallery',
		component: Gallery
	},
	{
		path: 'settings',
		component: Setting
	}
]

export const AdminLayoutPath = [
	{
		path: 'dashboard',
		component: Dashboard
	},
	{
		path: 'students',
		component: AdminVendor
	},
	{
		path: 'teachers',
		component: AdminCustomers
	},
	{
		path: 'activitylogs',
		component: AdminSubscription
	},
	{
		path: 'events',
		component: Events
	},
	{
		path: 'location',
		component: Location
	},
	{
		path: 'generateReports',
		component: Reports
	},

]



export const StudentLayoutPath = [
	{
		path: 'dashboard',
		component: StudentDashboard
	},
	{
		path: 'calender',
		component: Calendar
	},
	{
		path: 'coursesDetails',
		component: CourseDetails
	},
	{
		path: 'cvBuilder/',
		component: CvBuilder
	},
	{
		path: 'softSkills',
		component: SoftSkills
	},
	{
		path: 'technicalSkills',
		component: TechnicalSkills
	},
	{
		path: 'transcript',
		component: Transcript
	},
	{
		path: 'upComingEvents',
		component: UpComingEvents
	},

]