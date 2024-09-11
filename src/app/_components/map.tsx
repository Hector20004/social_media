'use client';

import * as React from "react";
import { MapContainer,TileLayer,Marker,Popup} from "react-leaflet";
import { Marker as MarkerLeaflet,Icon,point,divIcon, DivIcon} from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import 'leaflet/dist/leaflet.css'
//import MapController from "~/app/_components/MapController";



  
  {/*Marker Icon*/}

export default function Map(){
	  const customIcon = new Icon({
		iconUrl: "maps-and-flags.png", // require('') works to if your having issues rendering
		iconSize: [38, 38],
			iconAnchor: [12, 24],
	  });

	const markers = [
		{
		  geocode: [28.6024, -81.2001],
		  popUp: "HOME OF THE KNIGHTS!!!!!!!!"
		},
		{
		  geocode: [28.4449, -81.4590],
		  popUp: "LOCKHEED MARTIN"
		}
	  ];
	  
	return (
		<>
		<MapContainer center={[28.5384, -81.3789]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      		<TileLayer
      		attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      		{/* Cool Map */}
      		<TileLayer
      		attribution='Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
      		url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
      	/>
    	</MapContainer>
	</>
  );
}