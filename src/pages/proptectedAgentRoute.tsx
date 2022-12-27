import React,{ useState } from 'react';
import {Outlet, Navigate } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import { selectCurrentAgent } from '../services/features/agentSlice';


// const AgentProtectedRoute = () => {
// //   const {agent} = useAppSelector(selectCurrentAgent);

// //   const token = agent;
// //  return (

// //    token ? <Outlet /> : <Navigate to="/client-login" replace />
// //  )
    
// // }

// export default AgentProtectedRoute

