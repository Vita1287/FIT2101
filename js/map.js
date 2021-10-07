placeDetails = null

const heatMapStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#fcfcfc" }],
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { hue: "#5f94ff" }, { lightness: 60 }],
  },
];


const defaultStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

const darkStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }],
  },
];

let map;
let places;
let infoWindow;
let markers = [];
let autocomplete;
const countryRestrict = { country: "us" };
const MARKER_PATH =
  "https://developers.google.com/maps/documentation/javascript/images/marker_green";
const hostnameRegexp = new RegExp("^https?://.+?/");



/**
 * @desc: Create a marker on the map
 * @param: position: Where to draw the marker
 * @param: title: What to name the marker
 */
function createMarker(position, title) {
  new google.maps.Marker({
    position: position,
    map,
    title: title,
  });
}


/**
 * 
 */
function covidCases(){
  return
}

// Defines the callback function referenced in the jsonp file.
function eqfeed_callback(data) {
  map.data.addGeoJson(data);
}

function styleFeature(feature) {
  const low = [151, 83, 34]; // color of mag 1.0
  const high = [5, 69, 54]; // color of mag 6.0 and above
  const minMag = 1.0;
  const maxMag = 6.0;
  // fraction represents where the value sits between the min and max
  const fraction =
    (Math.min(feature.getProperty("mag"), maxMag) - minMag) / (maxMag - minMag);
  const color = interpolateHsl(low, high, fraction);
  return {
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      strokeWeight: 0.5,
      strokeColor: "#fff",
      fillColor: color,
      fillOpacity: 2 / feature.getProperty("mag"),
      // while an exponent would technically be correct, quadratic looks nicer
      scale: Math.pow(feature.getProperty("mag"), 2),
    },
    zIndex: Math.floor(feature.getProperty("mag")),
  };
}

function interpolateHsl(lowHsl, highHsl, fraction) {
  const color = [];

  for (let i = 0; i < 3; i++) {
    // Calculate color based on the fraction.
    color.push((highHsl[i] - lowHsl[i]) * fraction + lowHsl[i]);
  }
  return "hsl(" + color[0] + "," + color[1] + "%," + color[2] + "%)";
}


/**
 * 
 */
function setdarkMode(){
  mode = retrieveData("darkMode")
  if (mode==1)
    updateLocalStorage("darkMode", 0)
  else if(mode==0)
    updateLocalStorage("darkMode", 1)
  location.reload()
}
/**
 * 
 */
function chooseStyle(){
  if (checkLocalStorage("darkMode")==0){
    updateLocalStorage("darkMode", 0)
    return defaultStyle
  }
    mode = retrieveData("darkMode")
  
    if (mode==1)
      return darkStyle
    else if (mode==0)
      return defaultStyle
    else if (mode==2)
      return heatMapStyle
  
}

/**
 * @desc: 
 */
function input(){
  // Retrieve place name to search from html input field
  return input = document.getElementById("pac-input");
}

/**
 * Performs a search on the most common type selected in the area
 */
function searchHotels(){
    // Infowindow to show results
    infoWindow = new google.maps.InfoWindow({
      content: document.getElementById("info-content"),
    });
    
    // Restrict the search to Australia, and to place type "cities".
    autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
      {
        types: ["(cities)"],
        componentRestrictions: countryRestrict,
      }
    );
    places = new google.maps.places.PlacesService(map);


    onPlaceChanged()
    setAutocompleteCountry()


  // When the user selects a type, get the place details for the type and search for it
  function onPlaceChanged() {
    const place = "Melbourne"
    const type = document.getElementById("shop").value;
    search(type);
  }

  // Search for places within the radius of the home address
  function search(type) {
    latlng = {lat:parseFloat(window.localStorage.getItem("user_lat")), lng:parseFloat(window.localStorage.getItem("user_lng")) }
    const search = {
      location: { lat: latlng["lat"], lng: latlng["lng"] },
      radius: 10000,
      types: [type],
    };

    places.nearbySearch(search, (results, status, pagination) => {
      if (status === google.maps.places.PlacesServiceStatus.OK && results) {
        clearResults();
        clearMarkers();

        // Create a marker for each place found, and
        // assign a letter of the alphabetic to each marker icon.
        for (let i = 0; i < results.length; i++) {
          const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
          const markerIcon = MARKER_PATH + markerLetter + ".png";

          // Use marker animation to drop the icons incrementally on the map.
          markers[i] = new google.maps.Marker({
            position: results[i].geometry.location,
            animation: google.maps.Animation.DROP,
            icon: markerIcon,
          });
          // If the user clicks a place marker, show the details of that hotel
          // in an info window.
          markers[i].placeResult = results[i];
          google.maps.event.addListener(markers[i], "click", showInfoWindow);
          setTimeout(dropMarker(i), i * 100);
          addResult(results[i], i);
        }
      }
    });
  }

  /**
   * Clear all markers
   */
  function clearMarkers() {
    for (let i = 0; i < markers.length; i++) {
      if (markers[i]) {
        markers[i].setMap(null);
      }
    }

    markers = [];
  }

  // Set the country restriction to Australia
  // Also center and zoom the map on Australia
  function setAutocompleteCountry() {
    autocomplete.setComponentRestrictions({ country: "au" });
    
    clearResults();
    clearMarkers();
  }

  /**
   * Drop marker at given place
   */
  function dropMarker(i) {
    return function () {
      markers[i].setMap(map);
    };
  }

  /**
   * Adds the searched place to a list one by one
   * @param {} result : the place
   * @param {} i : index of the place
   */
  function addResult(result, i) {
    const results = document.getElementById("results");
    const markerLetter = String.fromCharCode("A".charCodeAt(0) + (i % 26));
    const markerIcon = MARKER_PATH + markerLetter + ".png";
    const tr = document.createElement("tr");

    tr.style.backgroundColor = i % 2 === 0 ? "#F0F0F0" : "#FFFFFF";
    tr.onclick = function () {
      google.maps.event.trigger(markers[i], "click");
    };

    const iconTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const icon = document.createElement("img");

    icon.src = markerIcon;
    icon.setAttribute("class", "placeIcon");
    icon.setAttribute("className", "placeIcon");

    const name = document.createTextNode(result.name);

    iconTd.appendChild(icon);
    nameTd.appendChild(name);
    tr.appendChild(iconTd);
    tr.appendChild(nameTd);
    results.appendChild(tr);
  }

  /**
   * Clears search results for next time
   */
  function clearResults() {
    const results = document.getElementById("results");

    while (results.childNodes[0]) {
      results.removeChild(results.childNodes[0]);
    }
  }

  // Get the place details for place type. Display info in an info window,
  // anchored on the marker for place that the user selected.
  function showInfoWindow() {
    const marker = this;

    places.getDetails(
      { placeId: marker.placeResult.place_id },
      (place, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          return;
        }

        infoWindow.open(map, marker);
        buildIWContent(place);
      }
    );
  }
  
  // Load the place information into the HTML elements used by the info window.
  function buildIWContent(place) {
    document.getElementById("iw-icon").innerHTML =
      '<img class="hotelIcon" ' + 'src="' + place.icon + '"/>';
    document.getElementById("iw-url").innerHTML =
      '<b><a href="' + place.url + '">' + place.name + "</a></b>";
    document.getElementById("iw-address").textContent = place.vicinity;
    if (place.formatted_phone_number) {
      document.getElementById("iw-phone-row").style.display = "";
      document.getElementById("iw-phone").textContent =
        place.formatted_phone_number;
    } else {
      document.getElementById("iw-phone-row").style.display = "none";
    }
  
    // Assign a five-star rating to the place, using a black star ('&#10029;')
    // to indicate the rating the place has earned, and a white star ('&#10025;')
    // for the rating points not achieved.
    if (place.rating) {
      let ratingHtml = "";
  
      for (let i = 0; i < 5; i++) {
        if (place.rating < i + 0.5) {
          ratingHtml += "&#10025;";
        } else {
          ratingHtml += "&#10029;";
        }
  
        document.getElementById("iw-rating-row").style.display = "";
        document.getElementById("iw-rating").innerHTML = ratingHtml;
      }
    } else {
      document.getElementById("iw-rating-row").style.display = "none";
    }
  
    // The regexp isolates the first part of the URL (domain plus subdomain)
    // to give a short URL for displaying in the info window.
    if (place.website) {
      let fullUrl = place.website;
      let website = String(hostnameRegexp.exec(place.website));
  
      if (!website) {
        website = "http://" + place.website + "/";
        fullUrl = website;
      }
  
      document.getElementById("iw-website-row").style.display = "";
      document.getElementById("iw-website").textContent = website;
    } else {
      document.getElementById("iw-website-row").style.display = "none";
    }
  }
  
}

function haversine(lat1, lng1, lat2, lng2){

 var R = 6371; // km 
 //has a problem with the .toRad() method below.
 var dLat = (lat2-lat1) * Math.PI / 180;
 var dLon= (lng2-lng1) * Math.PI / 180;
 lat1 = lat1 * Math.PI / 180
 lat2 = lat2 * Math.PI / 180
 var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon/2) * Math.sin(dLon/2);  
 var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
 var d = R * c; 
 
 return Math.round(d);
}



/*
@desc: Initialize the map
*/
function initMap() {
  // get user location from local storage
  latlng = {lat:parseFloat(window.localStorage.getItem("user_lat")), lng:parseFloat(window.localStorage.getItem("user_lng")) }
  // set to default location if no location set yet
  var options = {
    //mapId: "8e0a97af9386fef",
    zoom: 12,
    center: { lat: latlng["lat"], lng: latlng["lng"] },
    styles: chooseStyle()
  };
  // Create new map
  map = new google.maps.Map(document.getElementById("map"), options);

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById("info-content"),
  });
  
  // Autocomplete the user's search input
  const autocomplete = new google.maps.places.Autocomplete(input());
  // set bounds around user's home address
  
  
  // Bind the search results to the map area
  autocomplete.bindTo("bounds", map);
  // Specify just the place data fields that you need.
 

  
  map.data.setStyle(styleFeature);

  // Get the earthquake data (JSONP format)
  // This feed is a copy from the USGS feed, you can find the originals here:
  //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  const script = document.createElement("script");

  script.setAttribute(
    "src",
    "https://storage.googleapis.com/mapsdevsite/json/quakes.geo.json"
  );
  document.getElementsByTagName("head")[0].appendChild(script);

  
  

  
  // Create marker to display at selected location
  const marker = new google.maps.Marker({ 
    map: map,
    });
  // Open the map with a marker if the user clicks a plac

  // Close autocomplete window and relevant searches
  autocomplete.addListener("place_changed", () => {
    // Get selected place
    const place = autocomplete.getPlace();
    // Return if selected place is not a location
    if (!place.geometry || !place.geometry.location) {
      return;
    }
    // Pan map to around the selected location
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // store place id in local storage
    updateLocalStorage("placeID", place.place_id)

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location,
    });
    marker.setVisible(true);
   
    // Uses place id to identify the place and set request
    const request = {
      placeId: retrieveData("placeID"),
      fields: ["name", "formatted_address", "place_id", "geometry"],
    };
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    // Sends request
    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {// Create a marker for new places
        const marker = new google.maps.Marker({
          map,
          animation: google.maps.Animation.DROP,
          position: place.geometry.location,
        });
        // Display infowindow if marker clicked
        google.maps.event.addListener(marker, "click", () => {
          const content = document.createElement("div");
          const nameElement = document.createElement("h2");
  
          nameElement.textContent = place.name;
          content.appendChild(nameElement);
  
          const placeIdElement = document.createElement("p");
  
          placeIdElement.textContent = place.place_id;
          content.appendChild(placeIdElement);
  
          const placeAddressElement = document.createElement("p");
  
          placeAddressElement.textContent = place.formatted_address;
          content.appendChild(placeAddressElement);
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
   
  
    

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  });


  // prepares an info window for the user's geolocation
  infoWindow = new google.maps.InfoWindow();
  // create a button to pan to user's current location
  const buttonDiv = document.createElement("div");
  buttonDiv.style.padding = '10px';

  const locationButton = document.createElement("button");
  locationButton.classList.add("button-60"); // style it
  locationButton.style.width = '160px';
  locationButton.style.height = '40px'
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");

  buttonDiv.appendChild(locationButton);
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(buttonDiv);
  // add an event listener to do something when the location button is press
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // store the position data as a latlng object
          user_position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // store the latitude and longitude in user storage for other functions which require this information
          localStorage.setItem("lat", user_position.lat);
          localStorage.setItem("lng", user_position.lng);
          // recenter map based on the geolocation data
          infoWindow.setPosition(user_position);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(user_position);
          let distance = haversine(user_position.lat,user_position.lng, localStorage.getItem("user_lat"), localStorage.getItem("user_lng"))
          if (distance > localStorage.getItem('radius')){
            res = "You are " + distance.toString() + " KM away from your home, go back!"
            alert(res)
          }
        },
        // error handling
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());

    }
  }); 

  

  // create a new marker at this location
  new google.maps.Marker({
    position: latlng,
    map,
    label: "Home"
  });
  // create a circle around that pooint 
  const cityCircle = new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#6bfa00",
    fillOpacity: 0.15,
    map,
    center: latlng,
    radius: localStorage.getItem('radius') * 1000
  });
  
  
}

