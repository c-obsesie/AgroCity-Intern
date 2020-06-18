// // Initialize some map with center at Bucaramanga

//   Change navbar Logo Collor and Height

// // An array with the coordinates of the boundaries of Bucaramanga, extracted manually from the GADM database



function initMap() {
  // The location of Uluru
  var uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
        lat: 44.4268,
        lng: 26.1025
    },
    zoom: 10,
    mapTypeId: 'roadmap'
  });
  
  var sector1Coords=[
    {lat:44.435682,lng: 26.078720},
    {lat:44.436968, lng:26.101991},
    {lat: 44.538790, lng:26.101936 },
    {lat:44.502297, lng:26.023509 },
    {lat: 44.481838,lng: 25.989418},

  ]
  var sector2Coords=[  
    {lat: 44.538790, lng:26.101936 },
    {lat: 44.477657, lng: 26.176569 },
    {lat: 44.439325, lng:  26.188845 },
    {lat:44.436968, lng:26.101991},

  
  ] 
   var sector3Coords=[
    {lat:44.435682,lng: 26.078720},
    {lat: 44.439325, lng:  26.188845 },
    {lat: 44.395026, lng: 26.207975}
 
  ]
  var sector4Coords=[  
    {lat:44.435682,lng: 26.078720},
    {lat:44.362671,lng: 26.087457},
    {lat: 44.395026, lng: 26.207975}
   
  
  ]
  var sector5Coords=[
    {lat:44.435682,lng: 26.078720},
    {lat:44.405983, lng:26.008150 }, 
    {lat:44.362671,lng: 26.087457},
   
  ]
  var sector6Coords=[  
    {lat:44.435682,lng: 26.078720},
    {lat:44.481838,lng:25.989418},
    {lat:44.405983, lng:26.008150 },
   
  
  ]
  // Construct the polygon.
    var sector1=new google.maps.Polygon({
      paths:sector1Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'red',
      editable:false,
      fillOpacity:0.5,
  
    })

    var sector2=new google.maps.Polygon({
      paths:sector2Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'orange',
      editable:false,
      fillOpacity:0.5,
  
    })
    var sector3=new google.maps.Polygon({
      paths:sector3Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'yellow',
      editable:false,
      fillOpacity:0.5,
  
    })
    var sector4=new google.maps.Polygon({
      paths:sector4Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'green',
      editable:false,
      fillOpacity:0.5,
  
    })
    var sector5=new google.maps.Polygon({
      paths:sector5Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'blue',
      editable:false,
      fillOpacity:0.5,
  
    })
    var sector6=new google.maps.Polygon({
      paths:sector6Coords,
      strokeColor:'#ff0000',
      strokeOpacity:0.5,
      strokeWeight:2,
      fillColor:'#8a2be2',
      editable:false,
      fillOpacity:0.5,
  
    })
  // Draw the polygon on the desired map instance
  sector1.setMap(map);
  sector2.setMap(map);
  sector3.setMap(map);
  sector4.setMap(map);
  sector5.setMap(map);  
  sector6.setMap(map);
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}