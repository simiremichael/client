import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
  } from '@reduxjs/toolkit/query';
  import { Mutex } from 'async-mutex';
import { RootState } from '../../app/store';
  import  logout  from '../features/agentSlice';
  import { setAgents } from '../features/agentSlice';



const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const agentToken = ( getState() as RootState).agentState.agentToken
    const companyToken = ( getState() as RootState).companyState.companyToken
    const token = ( getState() as RootState).userState.token
    console.log('states: ', agentToken);
    console.log('states: ', companyToken);
    console.log('states: ', token);
    // let currentDate = new Date();
    if (agentToken) {
      headers.set('authorization', `Bearer ${agentToken}`);
    } else if (companyToken) {
      headers.set('authorization', `Bearer ${companyToken}` );
      
    } else if (token) {
      headers.set('authorization', `Bearer ${token}` );
    } 

      return headers;
    
}
})


   const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
  > = async (args, api, extraOptions) => {
   
    let result = await baseQuery(args, api, extraOptions)

    // If you want, handle other status codes, too
    if (result?.error?.status === 403) {
        console.log('sending refresh token')

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/refresh', api, extraOptions)

        if (refreshResult?.data) {

            // store the new token 
              {/* @ts-ignore:next-line */}
            api.dispatch(setAgents({...refreshResult.data}))

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {

            if (refreshResult?.error?.status === 403) {
                // refreshResult.error.data.message = "Your login has expired. "
            }
            return refreshResult
      }
    }

    return result;
  };
  
  export default customFetchBase;
  

  