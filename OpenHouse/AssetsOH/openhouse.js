let citySearch = document.getElementById('city-search');
let citySearchBtn = document.getElementById('city-search-btn');
let resultContainer = document.getElementById('result-container'); 

var appnameEl = document.querySelector('.appname');
var applogoEl = document.querySelector('.applogo');
var menuEl = document.querySelector('.menu')


var indexPage=()=>{
  menuEl.setAttribute('href',document.location.replace('../index.html'))
}
appnameEl.addEventListener('click',indexPage)
applogoEl.addEventListener('click',indexPage)

var selectedCity = localStorage.getItem('selectedCity') || '';

// event listener on city search button
citySearchBtn.addEventListener('click', getCityInfo);

var selectedCity = citySearch.value;

function getCityInfo(event) {
  event.preventDefault();
  var selectedCity = citySearch.value;
  fetchData(selectedCity);
  localStorage.setItem('selectedCity', selectedCity);
}

// API call Listing
// API call Listing
function fetchData(selectedCity) {
    let openHouseQuery =
      'https://api.bridgedataoutput.com/api/v2/test/openhouses?access_token=6baca547742c6f96a6ff71b138424f21';
    fetch(openHouseQuery)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); // Check the structure of the data object
  
        resultContainer.innerHTML = ''; // Clear previous results
  
        data.bundle.forEach(function (openHouseArray) {
          let listingID = openHouseArray.ListingId;

        //   console.log(listingID);
          let listingQuery =
            'https://api.bridgedataoutput.com/api/v2/test/listings/' +
            listingID +
            '?access_token=6baca547742c6f96a6ff71b138424f21';
          fetch(listingQuery)
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
                // console.log(data)
              if (data.success) {
                let listingData = data.bundle;
                let openHouseDate = openHouseArray.OpenHouseDate
                console.log(openHouseDate);
                // Filter listing data based on the selected city
                var selectedCity = citySearch.value;
                console.log(selectedCity, listingData);
                    console.log(listingData.City)
                  if (listingData.City === selectedCity) {
                    var selectedListing = listingData;
                    createListingCard(selectedListing, openHouseDate);
                
                  }
  
                
              }
            })
            .catch(function (error) {
              console.log('Error:', error);
            });
        });
      })
      .catch(function (error) {
        console.log('Error:', error);
      });
  }
  

function createListingCard(listingData, openHouseDate) {
  // Create card container
  var card = document.createElement('div');
  card.classList.add('card');
 console.log(listingData)

  // Create card content
  var address = document.createElement('p');
  address.innerHTML = 'Address: ' + listingData.UnparsedAddress;

  var date = document.createElement('p');
  date.innerHTML = 'Open House Date: ' + openHouseDate;

  var listPrice = document.createElement('p');
  listPrice.innerHTML = 'List Price: ' + formatCurrency(listingData.OriginalListPrice);

  function formatCurrency(amount){
  return Number(amount).toLocaleString('en-US',{style: 'currency',currency:'USD'})
  };

  var yearBuilt = document.createElement('p');
  yearBuilt.innerHTML = 'Year Built: ' + listingData.YearBuilt;

  var lotSize = document.createElement('p');
  lotSize.innerHTML = 'Lot Size: ' + listingData.LotSizeSquareFeet + ' sq ft';

  var bedrooms = document.createElement('p');
  bedrooms.innerHTML = 'Number of Bedrooms: ' + listingData.BedroomsPossible;

  var bathrooms = document.createElement('p');
  bathrooms.innerHTML = 'Number of Bathrooms: ' + listingData.BathroomsFull;

  var direction = document.createElement('p');
  direction.innerHTML = 'Direction: ' + listingData.DirectionFaces;


  let imageArray = ['AssetsOH/images/OH1.jpeg','AssetsOH/images/OH2.jpeg','AssetsOH/images/OH3.jpeg','AssetsOH/images/OH4.jpeg','AssetsOH/images/OH5.jpeg','AssetsOH/images/OH6.jpeg','AssetsOH/images/OH7.jpeg','AssetsOH/images/OH8.jpeg','AssetsOH/images/OH9.jpeg','AssetsOH/images/OH10.jpeg']

  var randomImage = imageArray[Math.floor(Math.random()*imageArray.length)];

  var image = document.createElement('img');
  image.src = randomImage;
  image.classList.add('listing-image');

  // Append content to card
  card.appendChild(address);
  card.appendChild(date)
  card.appendChild(listPrice);
  card.appendChild(yearBuilt);
  card.appendChild(lotSize);
  card.appendChild(bedrooms);
  card.appendChild(bathrooms);
  card.appendChild(direction);
  card.appendChild(image);

  // Append card to result container
  resultContainer.appendChild(card);
}
    


let queryURL = "https://api.bridgedataoutput.com/api/v2/test/openhouses?access_token=6baca547742c6f96a6ff71b138424f21";
       fetch(queryURL)
       .then(res => res.json())
        .then(data => console.log(data))


        let queryURL2 = "https://api.bridgedataoutput.com/api/v2/test/listings/5dba1ff74aa4055b9f2a4fdc?access_token=6baca547742c6f96a6ff71b138424f21";
        fetch(queryURL2)
        .then(res => res.json())
         .then(data => console.log(data))