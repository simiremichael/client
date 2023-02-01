import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Map, {Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPropertyQuery } from '../services/api/propertyAPI';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { selectCurrentMapData, setMapData } from '../services/features/mapSlice';

const Img = styled.img`
width: 80px;
height: 40px;
`

function GeoMap() {

    let {propId} = useParams();
  const { data} = useGetPropertyQuery(propId); 
  const [showPopup, setShowPopup] = useState(true);
  const dispatch = useAppDispatch();
  //, {refetchOnMountOrArgChange: true }
  
    useEffect(() => { 
      dispatch(setMapData({mapData: data}))
    },[dispatch, data])

    const {mapData} = useAppSelector(selectCurrentMapData)
    console.log(mapData?.latitude, mapData?.longitude)

  
    const [viewState, setViewState] = useState({longitude: mapData?.longitude, latitude: mapData?.latitude, zoom: 14})

 
 {/* @ts-ignore:next-line */}
 const img = data?.images[0].img
 return ( 
    <Map
    {...viewState}
    style={{width: '100vw', 
    height: '100vh',
     
     }}
    mapStyle="mapbox://styles/simiremichael/clcz22d6e00l814qni4m9qxaq"
    mapboxAccessToken="pk.eyJ1Ijoic2ltaXJlbWljaGFlbCIsImEiOiJjbDhtMWZza3owOGM5M290aGdkdXNzbnhyIn0.cZ53EbJgw_QlQEq2-bRpWw"
    onMove={(nextViewPort: any) => setViewState(nextViewPort)}
    >
   
    <Marker longitude={viewState.longitude} latitude={viewState.latitude} anchor="top" offset={[-20, -10]} >
    <Img src={img} />
    </Marker>
    {/* {showPopup && (
      <Popup longitude={Number(data?.longitude)} latitude={Number(data?.latitude)}
        anchor="top" 
        offset={[+20, -10]}
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)} */}
    </Map>
  )
}

export default GeoMap