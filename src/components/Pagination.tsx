import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import { selectCurrentAgentProperty } from '../services/features/agentPropertySlice';
import { selectCurrentPropertySearch, setPropertySearch } from '../services/features/propertySearchSlice';

function Paginate(props: {page: any}) {

     
     const { propertySearch} = useSelector(selectCurrentPropertySearch);
      {/* @ts-ignore:next-line */}
     const numberOfPages = propertySearch?.numberOfPages;
    const page = props.page;
    // const [pageNo, setPageNO] = useState(numberOfPages);
    console.log(numberOfPages);
    // const handlePageNo = (event: React.ChangeEvent<unknown>, value: number) => {
    //     setPageNO(value)
    // }
    // useEffect(() => {
    //   if(page){
    //     dispatch(setPropertySearch(page))
    //   }
    // }, [page])
  return (
    <Pagination 
    count={numberOfPages} 
    page={Number(page) || 1}
    variant="outlined" 
    color='primary'
    renderItem={(item: any) => (
        <PaginationItem {...item} component={Link} to={`/properties?page=${item.page}`}  />
    )}
    />          
    // <Pagination 
    // count={numberOfPages} 
    // page={Number(page)} variant="outlined" 
    // shape="rounded" renderItem={(item: any) => (
    // <PaginationItem {...item} component={Link} to={`/properties?page=${item.page}`}  />
    //  )} 
    //  />           
  )
    }

export default Paginate


