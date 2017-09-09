function myMap() {
	
var mapProp= {
    center:new google.maps.LatLng(13.8,-88.7926762),
    zoom:9,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

window.onload=myMap;