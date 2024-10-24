import React from "react"

function Data({weatherData}){
    return (
        <div className="w-fit px-8 py-5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition ">
        <h1 className="font-semibold text-3xl "> {weatherData.country}</h1>
        <div className="py-4">
            <h1 className="text-xl py-1">The Weather is {weatherData.main} </h1>
            <h1 className="text-xl ">The Description is  {weatherData.description}</h1>
        </div>
        
        <div className="flex justify-between gap-10">
            <h1 className="text-cyan-500 text-3xl my-6">Feels Like {Math.floor(weatherData.feels - 273.15)}°</h1>
            <h1 className="my-6 text-2xl font-medium">{weatherData.feels}</h1>
        </div>
        
    </div>
    )
    
}

export default Data