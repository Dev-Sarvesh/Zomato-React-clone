import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8XjzjxvIPChEci5FMenFzp0aJlqvxs2sI3w&usqp=CAU" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>
        </div>
    )
};

const ResturentCard = (props) => {
    console.log(props);
    const {resData}=props
    console.log(resData.restaurants[0].info.name)
    return (
        <div className="res-card">
            <img 
            className="res-logo"
            src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                resData.restaurants[0].info.cloudinaryImageId
            } alt="" />
            <h2>{ resData.restaurants[0].info.name}</h2>
            <h4>{ resData.restaurants[0].info.cuisines.join(",")}</h4>
            <h4>{ resData.restaurants[0].info.avgRating}</h4>
            <h2>{ resData.restaurants[0].info.costForTwo}</h2>

            <h4>{ resData.restaurants[0].info.sla.deliveryTime} Minutes</h4>
        </div>
    )
}

const resObj={
    "restaurants": [
        {
        "info": {
        "id": "729652",
        "name": "Burger Farm",
        "cloudinaryImageId": "670695b88d5cf2fcb2e3c135ceb2f71f",
        "locality": "Street no 1",
        "areaName": "South Tukoganj",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Burgers",
        "Fast Food"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "4660",
        "avgRatingString": "4.5",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-01-28 03:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹399",
        "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "logo": "Swiggy%20One%20Lite/One_lite_vertical_logo.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "badgeType": "BADGE_TYPE_ONE_LITE"
        },
        "orderabilityCommunication": {
        "title": {},
        "subTitle": {},
        "message": {},
        "customIcon": {}
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
 }} ],
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturentCard 
               resData={resObj}/>
              
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);