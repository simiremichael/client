import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import  {CompanyModel} from '../models/index'


interface CompanyAuthState {

  company:  undefined | string | CompanyModel | null ;   
  companyToken : string | null | undefined;
  refreshToken: string | null | string | undefined | {} ;
}

const initialState: CompanyAuthState = { 
  company: null, 
  refreshToken: null ,
  companyToken : null 
} 


export const companySlice = createSlice({
  name: 'CompanyAuth',
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<{company:  undefined | string | CompanyModel | null, companyToken : string | undefined | null, refreshToken: string | undefined | null  }>) => {
      localStorage.setItem('company', JSON.stringify({
        company: action.payload.company,
        companyToken : action.payload.companyToken ,
        refreshToken: action.payload.refreshToken,
       })
       );
       state.company = action.payload.company;
       state.companyToken  = action.payload.companyToken ;
       state.refreshToken = action.payload.refreshToken;
    },
    companyLogout: (state) => {
      localStorage.removeItem('company');
      state.company = null;
      state.companyToken  = null;
      state.refreshToken = null;
    }
    }
})
export const selectCurrentCompany = (state: RootState) => state.companyState
export const {setCompanies, companyLogout} = companySlice.actions;
export default companySlice.reducer;