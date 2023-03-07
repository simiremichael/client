import {  createApi } from '@reduxjs/toolkit/query/react'
import { AgentModel } from '../models/agentModel';
import { UserModel } from '../models/userModel';
import { CompanyModel } from '../models/companyModel';
import { PropertyModel } from '../models/propertyModel';
import customFetchBase from './custormFetchBase';
import  { logout } from '../features/agentSlice';
import { companyLogout } from '../features/companySlice';
import { logoutUsers } from '../features/userSlice';

export const propertyAPI = createApi({
  reducerPath: 'propertyAPI',
  baseQuery: customFetchBase,
  // refetchOnReconnect: true,
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'http://localhost:5000',
  //   prepareHeaders:  (headers, { getState }) => {
  //     const token = ( getState() as RootState).agentState.token
  //     // const token1 = ( getState() as RootState).companyState.token
  //     // const token2 = ( getState() as RootState).userState.token
  //     console.log('states: ', token);
  //     if (token) {
  //       // const decodedToken: { exp: number } = setAgents(token);
  //       headers.set('authorization', `Bearer ${token}` );
       
  //     // } else if (token1) {
  //     //   headers.set('authorization', `Bearer ${token}` );
        
  //     // } else if(token2) {
  //     //   headers.set('authorization', `Bearer ${token}` );
       
  //     // }
  //     }
  //       return headers;
      
  // }
  // }),
  

refetchOnFocus: true,
tagTypes: ['Properties', 'Users', 'Agents', 'Companies'],
  endpoints: (builder) => ({
     getUsers: builder.query<UserModel[], void>({
      query: ()  => '/users',
        providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Users' as const, id })),
                { type: 'Users', id: 'USER' },
              ] : [{ type: 'Users', id: 'USER' }],
    }),
  
    getUser: builder.query<UserModel, any>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id: any) =>  [{ type:'Users', id }],  
    }),
     signinUser: builder.mutation<UserModel, Partial<UserModel>>({
      query(body) {
        return {
        url: '/users/signin',
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     googleSignIn: builder.mutation<UserModel, Partial<UserModel>>({
      query(body) {
        return {
        url: '/users/googleSignIn',
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     signupUser: builder.mutation<UserModel, Partial<UserModel>>({
      query: (body) => {
        return {
        url: '/users/signup', 
        method: 'POST',
        body,
      }
       },
       invalidatesTags: [{type: 'Users', id: 'USER'}],
     }),
     userRefresh: builder.query({
      query: () => ({
        url: '/users/refresh',
        method: 'GET',
      })
     }),
     logoutUser:builder.mutation({
      query:(body) => ({
        url: '/users/logout',
        method: 'POST',
        body,     
      }),
      async onQueryStarted( args, { dispatch, queryFulfilled }) {
       try {
        // const data =
         await queryFulfilled
        // console.log(data)
        dispatch(logoutUsers());
        // dispatch(propertyAPI.util.resetApiState())
      //  setTimeout(() => {
      //   dispatch(propertyAPI.util.resetApiState())
      //  }, 1000)
      } catch (error) {
        console.log(error)
       }
      }
     }),

     updateUser: builder.mutation<UserModel, Partial<UserModel>>({
      query(data) {
        const { id, ...body} = data;
        return {
        url: `/users/${id}`,
        method: 'PATCH',
        body,  
        }
       },
       transformResponse: (response: { data: UserModel }, meta, arg) => response.data,
      
       invalidatesTags:  (result, error, {id}) => [{ type: 'Users', id: 'USER'  }],
     }),
     
    deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `users/ ${id}`,
          method: 'DELETE',
          // credentials: 'include'
        }
      },
     invalidatesTags: (result, error, id) => [{ type: 'Users', id: 'USER' }],
       }),

       getAgents: builder.query<AgentModel[], void>({
        query: ()  => '/agents',
        providesTags: (result, error, id: any) =>  [{ type:'Agents', id: 'AGENT' }],  
          // providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Agents' as const, id: 'AGENT'})),
          //         { type: 'Agents', id: 'AGENT' },
          //       ] : [{ type: 'Agents', id: 'AGENT' }],
      }),
      getAgent: builder.query <AgentModel, any>({
        query: (id) => `/agents/${id}`,
        providesTags: (result, error, id: any) =>  [{ type:'Agents', id: 'AGENT' }],  
      }),
         addAgent: builder.mutation<AgentModel, Partial<AgentModel>>({
          query(body) {
            return {
            url: '/agents/signup',
            method: 'POST',
            body,
          }
           },
            invalidatesTags: [{type: 'Agents', id: 'AGENT'}],
         }),
         signinAgent: builder.mutation<AgentModel, Partial<AgentModel>>({
          query(body) {
            return {
            url: '/agents/signin',
            method: 'POST',
            body,
            }
          },
            invalidatesTags: [{type: 'Agents', id: 'AGENT'}],
         }),
         getAgentCompany: builder.query<PropertyModel, any>({
          query: (compId) => `/agents/agentCompany/${compId}`,
          providesTags: (result, error, id: any) =>  [{ type:'Agents', id: 'AGENT' }],  
        }),

         logoutAgent:builder.mutation({
          query:(body) => ({
            url: '/agents/logout',
            method: 'POST',
            body,     
          }),
          async onQueryStarted( args, { dispatch, queryFulfilled }) {
           try {
            // const data =
             await queryFulfilled
            // console.log(data)
            dispatch(logout())
            // dispatch(propertyAPI.util.resetApiState())
          //  setTimeout(() => {
          //   dispatch(propertyAPI.util.resetApiState())
          //  }, 1000)
          } catch (error) {
            console.log(error)
           }
          }
         }),
         
         agentRefresh: builder.query({
          query: () => ({
            url: '/agents/refresh',
            method: 'GET',
          })
         }),

         updateAgent: builder.mutation<AgentModel, Partial<AgentModel> & Pick<AgentModel, 'id'>>({
          query: ({id, ...patch}) => ({
            url: `/agents/${id}`,
            method: 'PATCH',
            body: patch,  
            
           }),
             transformResponse: (response: { data: AgentModel }, meta, arg) => response.data,
             transformErrorResponse: (
              response: { status: string | number },
              meta,
              arg
            ) => response.status,
            invalidatesTags:  (result, error, {id}) => [{ type: 'Properties', id: 'AGENT'  }],
            async onQueryStarted(
              arg,
              { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
            ) {},

         }),

        //  updateAgent: builder.mutation<AgentModel, Partial<AgentModel>>({
        //   query(data) {
        //     const { id, ...body} = data;
        //     return {
        //     url: `/agents/${id}`,
        //     method: 'PATCH',
        //     body,  
        //     }
        //    },
        //    async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        //     const patchResult = dispatch(
        //       propertyAPI.util.updateQueryData('getAgent', id, (draft) => {
        //         Object.assign(draft, patch)
        //       })
        //     )
        //     try {
        //       await queryFulfilled
        //     } catch {
        //       patchResult.undo()
        //     }
        //   },
        //    invalidatesTags:  (result, error, {id}) => [{ type: 'Agents', id: 'AGENT'  }],
        //  }),
  
         deleteAgent: builder.mutation<{ success: boolean; id: number }, number>({
          query(id) {
            return {
              url: `agents/${id}`,
              method: 'DELETE',
              // credentials: 'include'
            }
          },
         invalidatesTags: (result, error, id) => [{ type: 'Agents', id: 'AGENT' }],
           }),

           getCompanies: builder.query<CompanyModel[], void>({
            query: ()  => '/companies',
            providesTags: (result, error, id: any) =>  [{ type:'Companies', id: 'LIST' }], 
              // providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Companies' as const, id })),
              //         { type: 'Companies', id: 'LIST' },
              //       ] : [{ type: 'Companies', id: 'LIST' }],
          }),

          getCompany: builder.query<CompanyModel, any>({
            query: (id) => `/companies/${id}`,
            providesTags: (result, error, id: any) =>  [{ type:'Companies', id: 'LIST' }],  
          }),
    
             addCompany: builder.mutation<CompanyModel, Partial<CompanyModel>>({
              query(body) {
                return {
                url: '/companies/signup',
                method: 'POST',
                body,
              }
               },
                invalidatesTags: [{type: 'Companies', id: 'LIST'}],
             }),
             signinCompany: builder.mutation<CompanyModel, Partial<CompanyModel>>({
              query(body) {
                return {
                url: '/companies/signin',
                method: 'POST',
                body,
              }
               },
                invalidatesTags: [{type: 'Companies', id: 'LIST'}],
             }),
             companyRefresh: builder.query({
              query: () => ({
                url: '/companies/refresh',
                method: 'GET',
              })
             }),
             logoutCompany:builder.mutation({
              query:(body) => ({
                url: '/companies/logout',                       
                method: 'POST',
                body,     
              }),
              async onQueryStarted( args, { dispatch, queryFulfilled }) {
               try {
                // const data =
                 await queryFulfilled
                // console.log(data)
                dispatch(companyLogout())
                // dispatch(propertyAPI.util.resetApiState())
              //  setTimeout(() => {
              //   dispatch(propertyAPI.util.resetApiState())
              //  }, 1000)
              } catch (error) {
                console.log(error)
               }
              }
             }),
             

             updateCompany: builder.mutation<CompanyModel, Partial<CompanyModel>>({
              query(data) {
                const { id, ...body} = data;
                return {
                url: `/companies/${id}`,
                method: 'PATCH',
                body,  
                }
               },
              //  transformResponse: (response: { data: CompanyModel }, meta, arg) => response.data,
              async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                  propertyAPI.util.updateQueryData('getCompany', id, (draft) => {
                    Object.assign(draft, patch)
                  })
                )
                try {
                  await queryFulfilled
                } catch {
                  patchResult.undo()
                }
              },
               invalidatesTags:  (result, error, {id}) => [{ type: 'Companies', id: 'LIST'  }],
             }),
      
             deleteCompany: builder.mutation<{ success: boolean; id: number }, number>({
              query(id) {
                return {
                  url: `companies/${id}`,
                  method: 'DELETE',
                  // credentials: 'include'
                }
              },
             invalidatesTags: (result, error, id) => [{ type: 'Companies', id: 'LIST' }],
               }),

               getProperties: builder.query<PropertyModel[], void>({
                query: ()  => '/properties',
                  providesTags: (result) => result ? [...result.map(({ id }) => ({ type: 'Properties' as const, id: 'PROP' })),
                          { type: 'Properties', id: 'PROP' },
                        ] : [{ type: 'Properties', id: 'PROP' }],
              }),
        
              getProperty: builder.query<PropertyModel, any>({
                query: (id) => `/Properties/${id}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              getPropertiesByAgent: builder.query<PropertyModel, any>({
                query: ({agentId, page}) => `/properties/agentProperties/${agentId}?page=${page}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              searchProperties: builder.query<PropertyModel, any>({
                query: ({search, toggle, minPrice, maxPrice, type, page, selectBed, selectBath,duration})  => `/properties/search?search=${search || 'i'}&toggle=${toggle || 'rent'}&type=${type || 'apartment'}&duration=${duration || 'yearly'}&selectBath=${selectBath || '4'}&selectBed=${selectBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '4000000'}&page=${page}`,
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, toggle, minPrice, maxPrice, type, selectBed, selectBath,duration
              }),
              searchPropertiesByBuy: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/buy?search=${search || 'i'}&category=${category || 'sale'}&type=${type || 'apartment'}&sort=${sort}&bath=${bath || '4'}&bed=${bed || '4'}&minPrice=${minPrice || '2000000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              searchPropertiesByRent: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/rent?search=${search || 'i'}&category=${category || 'rent'}&type=${type || 'apartment'}&sort=${sort}&bath=${bath || '4'}&bed=${bed || '4'}&minPrice=${minPrice || '2000000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
               // transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              moreProperty: builder.query<PropertyModel, any>({
                query: ({location, price, propertyType, bedroom, category})  => `/properties/more?location=${location}&price=${price}&propertyType=${propertyType}&bedroom=${bedroom}&category=${category}`,
                transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              commercial: builder.query<PropertyModel, any>({
                query: ({searchQuery, search, category, propertyGroup, sort, bed,bath, minPrice, maxPrice, type, page})  => `/properties/commercial?search=${search || 'i'}&propertyGroup=${propertyGroup}&category=${category || 'sale'}&type=${type || 'office'}&sort=${sort}&bath=${bath || '1'}&bed=${bed || '1'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}`,
               // transformResponse: (response: any) => response.sort((a: any, b: any) => b - a),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                //search, category, sort, bed, bath, minPrice, maxPrice, type, page
              }),
              newProject: builder.query<PropertyModel, any>({
                query: ({ search, sort, possession, minBed, maxBed, minPrice, maxPrice, type, propertyGroup, page})  => `/properties/newProject?search=${search || 'i'}&type=${type || 'apartment'}&sort=${sort}&minBed=${minBed || '1'}&maxBed=${maxBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}&possession=${possession || 2022 }&propertyGroup=${propertyGroup}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
              offplan: builder.query<PropertyModel, any>({
                query: ({search, sort, minBed, maxBed, minPrice, possession, maxPrice, type, propertyGroup, page})  => `/properties/offplan?search=${search || 'i'}&type=${type || 'semi detached'}&sort=${sort}&minBed=${minBed || '1'}&maxBed=${maxBed || '4'}&minPrice=${minPrice || '200000'}&maxPrice=${maxPrice || '500000000'}&page=${page}&possession=${possession || 2022}&propertyGroup=${propertyGroup}`,
                //transformResponse: (response: any) => response.reverse(),
                providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
              }),
                 addProperty: builder.mutation<PropertyModel, Partial<PropertyModel>>({
                  query(body) {
                    return {
                    url: '/properties',
                    method: 'POST',
                    body,
                  }
                   },
                    invalidatesTags: [{type: 'Properties', id: 'PROP'}],
                 }),
                 updateProperty: builder.mutation<PropertyModel, Partial<PropertyModel> & Pick<PropertyModel, 'id'>>({
                  query: ({id, ...patch}) => ({
                    url: `/properties/${id}`,
                    method: 'PATCH',
                    body: patch,  
                   }),
                     transformResponse: (response: { data: PropertyModel }, meta, arg) => response.data,
                     transformErrorResponse: (
                      response: { status: string | number },
                      meta,
                      arg
                    ) => response.status,
                    invalidatesTags:  (result, error, {id}) => [{ type: 'Properties', id: 'PROP'  }],
                    async onQueryStarted(
                      arg,
                      { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
                    ) {},
                 }),
          
                 deleteProperty: builder.mutation<{ success: boolean; id: number | string }, number | string>({
                  query(id) {
                    return {
                      url: `properties/${id}`,
                      method: 'DELETE',
                    }
                  },
                 invalidatesTags: (result, error, id) => [{ type: 'Properties', id: 'PROP' }],
                   }),
                   companyPropertySearch: builder.query<PropertyModel, any>({
                    query: ({companyId, searchQuery, page, search})  => `/properties/adminHomepage/propertyList/${companyId}?searchQuery=${searchQuery || 'i'}&page=${page}`,
                    providesTags: (result, error, id: any) =>  [{ type:'Properties', id: 'PROP' }],  
                  }),       
       }), 
})

export const { 
    useGetUsersQuery,
    useGetUserQuery, 
    useSigninUserMutation, 
    useSignupUserMutation, 
    useUserRefreshQuery,
    useLogoutUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useGetCompaniesQuery,
    useGetCompanyQuery, 
    useAddCompanyMutation, 
    useSigninCompanyMutation,
    useCompanyRefreshQuery,
    useLogoutCompanyMutation,
    useUpdateCompanyMutation,
    useDeleteCompanyMutation,
    useGetAgentsQuery,
    useGetAgentQuery, 
    useAddAgentMutation, 
    useSigninAgentMutation,
    useGetAgentCompanyQuery,
    useLogoutAgentMutation,
    useAgentRefreshQuery,
    useUpdateAgentMutation,
    useDeleteAgentMutation,
    useGetPropertiesQuery,
    useGetPropertyQuery,
    useCommercialQuery,
    useNewProjectQuery,
    useOffplanQuery,
    useMorePropertyQuery, 
    useAddPropertyMutation, 
    useUpdatePropertyMutation,
    useDeletePropertyMutation,
    useGetPropertiesByAgentQuery,
    useSearchPropertiesByBuyQuery,
    useSearchPropertiesByRentQuery,
    useCompanyPropertySearchQuery,
    useSearchPropertiesQuery,
    useGoogleSignInMutation,
 } = propertyAPI

