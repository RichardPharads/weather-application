import React, { useState, useEffect } from "react";


function Data({ weatherData}) {
   


    return (
        <div className="w-fit max-w-4xl px-8 py-5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition mb-10">
            <div className="flex justify-between p-4">
                 <h1 className="font-semibold text-3xl mb-3 ">{weatherData.country}</h1>
                 <h1 className="font-semibold text-3xl mb-3 ">{weatherData.country_tag}</h1>
            </div>
       

            <div className={`w-custom-width  h-60 relative p-5 bg-slate-700 bg-center border-4 border-white gap-3 rounded-xl flex justify-center items-center overflow-hidden`}>
                <img className="absolute w-full" src={`./src/assets/${weatherData.main}.png`} alt="" />

                <div className="w-5/12 h-full z-10  bg-black backdrop-blur-sm bg-opacity-60 rounded-xl p-5">
                    <div>
                      <img src={`./src/assets/${weatherData.main}.png`} alt="" />
                    </div>
                </div>

                <div className="w-9/12 h-full z-10 p-5 bg-black backdrop-blur-sm bg-opacity-50 rounded-xl flex gap-10">
                    <div className="">
                        <h2 className="">Temp</h2>
                        <h1 className="text-7xl">{Math.floor(weatherData.temp - 273.15)}°</h1>
                        <div className="my-4">
                            <h1 className="w-full text-xs font-light">Weather Condition</h1>
                            <h1>{weatherData.main}</h1>
                        </div>
                        
                    </div>
                    <div className="bg-slate-700 w-full rounded-lg p-4  backdrop-blur-xl bg-opacity-10 hover:bg-slate-900">
                        <div className="my-1">
                            <h2 className="text-xs text-gray-300 font-extralight">Speed</h2>
                            <h1 className="text-lg font-thin">{weatherData.speed}km/h</h1>
                        </div>
                       
                        <div>
                            <h2 className="text-xs text-gray-300 font-extralight">Humidity</h2>
                            <h1 className="text-lg font-thin">{weatherData.humidity}</h1>
                        </div>
                        
                    </div>
                </div>
                

            </div>
            <div className="py-4">
                <h1 className="text-xl py-1">The Current Weather is {weatherData.main}</h1>
                <h1 className="text-xl">Weather Description {weatherData.description}</h1>
            </div>
            <div className="flex justify-between gap-10">
                <h1 className="text-cyan-500 text-3xl my-6 ">Feels Like {Math.floor(weatherData.feels - 273.15)}°</h1>
                <h1 className="my-6 text-2xl font-medium">{weatherData.feels}</h1>
            </div>
            
        </div>
    );
}

export default Data;
