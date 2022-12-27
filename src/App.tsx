import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Commercial from './pages/Commercial';
import NewProject from './pages/New-Project';
import Offplan from './pages/Offplan';
import FindAgent from './pages/FindAgent';
import Join from './pages/Join';
import DetailsPage from './pages/RentDetailsPage';
import NewProjectDetailsPage from './pages/NewProjectDetailsPage';
import About from './pages/About';
import TermsCondition from './pages/TermsCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AgentDetailsPage from './pages/AgentDetailsPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import DashBoard from './crm/pages/DashBoard';
import Properties from './crm/pages/Properties';
import Contacts from './crm/pages/Contacts';
import PropertyScouting from './crm/pages/PropertyScouting';
import Documents from './crm/pages/Documents';
import Finances from './crm/pages/Finances';
import Calendar from './crm/pages/Calendar';
import Events from './crm/pages/Events';
import Reports from './crm/pages/Reports';
import PropertyType from './crm/components/PropertyType';
import Location from './crm/components/Location';
import PropertySizeAndPrice from './crm/components/PropertySizeAndPrice';
import Description from './crm/components/Description';
import Photos from './crm/components/Photos';
import VideoAnd3Dtours from './crm/components/VideoAnd3Dtours';
import Details from './crm/components/Details';
import Utilities from './crm/components/Utilities';
import Features from './crm/components/Features';
import ContactForm from './crm/pages/ContactForm';
import PropertyScoutingForm from './crm/pages/PropertyScoutingForm';
import AgentHub from './pages/AgentHub';
import ClientLogin from './pages/ClientLogin';
import Mortgage from './pages/Mortgage';
import Calculator from './pages/Calculator';
import MortgageApplication from './pages/MortgageApplication';
// import AdminDashboard from './admin/pages/AdminDashboard';
// import Agents from './admin/pages/Agents';
import PropertyList from './admin/pages/PropertyList';
import AddAgent from './admin/pages/AddAgent';
import AdminDashboard from './admin/pages/AdminDashboard';
import { setAgents } from './services/features/agentSlice';
import { useAppDispatch } from './app/hooks';
import Agents from './admin/pages/Agents';
import { setUsers } from './services/features/userSlice';
import { setCompanies } from './services/features/companySlice';
import AgentPrivateRoute from './crm/components/AgentPrivateRoute';
import AdminPrivateRoute from './admin/components/AdminPrivateRoute';
import { setAgentProperties } from './services/features/agentPropertySlice';
import CrmPropertyDetailsPage from './crm/pages/crmPropertyDetailsPage';
import { useAgentRefreshQuery } from './services/api/propertyAPI';
import PropertyEditPage from './crm/pages/PropertyEditPage';
import EditAgent from './admin/pages/EditAgent';
// import  AgentProtectedRoute  from './pages/proptectedAgentRoute';


function App() {
  const initialValue = {propertyTitle: '', description: '', uniqNo: '', bedroom: '', kitchen: '', livingRoom: '', 
  showerRoom: '', bathRoom: '', buildingYear: '', yearRenovated: '', lotSize: '', condition: '',pets: [], parking: [],
 hvac: [], comfort: [], security: [], address1: '', address2: '', street: '', house: '', location: '', state: '', 
 postCode: '', lga: '', images: [], size: '', price: '', category: '', propertyTax: '', electricity: '', water: '', serviceCharge: '',
 utilities: '', taxes: '',video: '',tour: '',propertyType: '', propertyGroup: '', paymentType: '', slideImages: []}
 const [property, setProperty] = useState(initialValue);

 const updateProperty = (data: any) => {
  setProperty((prevProperty) => ({...prevProperty, ...data}));
 };

 const resetProperty = () => {
  setProperty(initialValue);
 }

 const dispatch = useAppDispatch();
 const agent = JSON.parse(localStorage.getItem('agent') || "false");
 useEffect(() => {
  dispatch(setAgents(agent));
}, []);

const user = JSON.parse(localStorage.getItem('user') || "false");
useEffect(() => {
 dispatch(setUsers(user));
}, []);
const agentProperty = JSON.parse(localStorage.getItem('agentProperty') || "false");
useEffect(() => {
 dispatch(setAgentProperties(agentProperty));
}, []);

const company = JSON.parse(localStorage.getItem('company') || "false");
useEffect(() => {
 dispatch(setCompanies(company));
}, []);

 console.log(property)
//  const [company, setCompany] = useState(JSON.parse(localStorage.getItem('company') || 'false'));
      // const [agent, setAgent] = useState(JSON.parse(localStorage.getItem('agent') || 'false'));

  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/properties' element={<HomePage />} />
      <Route path='/properties/search' element={<HomePage />} />
      <Route path='/buy' element={<Buy />} />
      <Route path='/rent' element={<Rent />} />
      <Route path='/crmPropertyDetails/:cpdId' element={<CrmPropertyDetailsPage />} />
      <Route path='/client-login' element={<ClientLogin />} />
      <Route path='/commercial' element={<Commercial />} />
      <Route path='/newproject' element={<NewProject />} />
      <Route path='/offplan' element={<Offplan />} />
      <Route path='/findagent' element={<FindAgent />} />
      <Route path='/join' element={<Join />} />
      <Route path='/adminHomepage/registerAgent' element={<AddAgent />} />
      <Route path='/adminHomepage/registerAgent/:agId' element={<EditAgent />} />
      <Route path='/adminHomepage/agents' element={<Agents />} />
      <Route path='/adminHomepage/propertyList' element={<PropertyList />} />
      <Route path='/adminHomepage' element={
      <AdminPrivateRoute>
      <AdminDashboard />
      </AdminPrivateRoute>
      } />
      <Route path='/mortgage-application' element={<MortgageApplication />} />
      <Route path='/mortgage-calculator' element={<Calculator />} />
      <Route path='/detailsPage/:id' element={<DetailsPage />} />
      <Route path='/agentDetailsPage/:id' element={<AgentDetailsPage />} />
      <Route path='/newProjectDetailsPage' element={<CompanyDetailsPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/mortgage' element={<Mortgage />} />
      <Route path='/propertyEditPage/:ptId' element={<PropertyEditPage />} />
      ///:ptId
      <Route path='/agent-hub' element={<AgentHub />} />
      <Route path='/newProjectDetailsPage/:id' element={<NewProjectDetailsPage />} />
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/dashboard' element={
      <AgentPrivateRoute>
      <DashBoard  />
      </AgentPrivateRoute>
      } /> 
      <Route path='/agentproperties' element={<Properties />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/contacts/contactform' element={<ContactForm />} />
      <Route path='/propertyScouting' element={<PropertyScouting  />} />
      <Route path='/propertyScouting/Propertyscoutingform' element={<PropertyScoutingForm />} />
      <Route path='/documents' element={<Documents  />} />
      <Route path='/finances' element={<Finances />} />
      <Route path='/calendar' element={<Calendar/>} />
      <Route path='/events' element={<Events  />} />
      <Route path='/reports' element={<Reports />} />
      <Route path='/agentproperties/propertyType' element={<PropertyType updateProperty={updateProperty}  property={property} setProperty={setProperty} />}/> 
      <Route path='/agentproperties/location' element={<Location  updateProperty={updateProperty} property={property} setProperty={setProperty} />} />
      <Route path='/agentproperties/propertySizeAndPrice' element={<PropertySizeAndPrice updateProperty={updateProperty} property={property} setProperty={setProperty} />} />
      <Route path='/agentproperties/description' element={<Description updateProperty={updateProperty} property={property} setProperty={setProperty} />} />
      <Route path='/agentproperties/photos' element={<Photos updateProperty={updateProperty} property={property} setProperty={setProperty} />}  />
      <Route path='/agentproperties/videoAnd3Dtours' element={<VideoAnd3Dtours updateProperty={updateProperty} property={property} setProperty={setProperty} />} />
      <Route path='/agentproperties/details' element={<Details updateProperty={updateProperty} property={property} setProperty={setProperty} />} />
      <Route path='/agentproperties/utilities' element={<Utilities updateProperty={updateProperty} property={property} setProperty={setProperty}/>} />
      <Route path='/agentproperties/features' element={<Features updateProperty={updateProperty} property={property} resetProperty={resetProperty} setProperty={setProperty} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


