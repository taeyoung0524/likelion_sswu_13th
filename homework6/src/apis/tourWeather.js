import axios from "axios";

export const getTourWeather = async() => {
    const URL ="/1360000/TourStnInfoService1/getCityTourClmIdx1";

    const today = new Date();
    const formattedDate = today.toISOString().slice(0,10).replace(/-/g,'');

    return axios.get(URL, {
        params:{
            serviceKey:process.env.REACT_APP_API_KEY,
            pageNo:"1",
            numOfRows:"10",
            dataType:"JSON",
            CURRENT_DATE:formattedDate,
            DAY:"1",
            CITY_AREA_ID:"1168000000",
        },
    });
};