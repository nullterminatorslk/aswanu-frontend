import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Cloud,
  Sun,
  CloudRain,
  Wind,
  Droplets,
  Thermometer,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Sri Lankan provinces with their coordinates
const provinces = [
  { id: 1, name: "Western", lat: 6.9271, lng: 79.8612, capital: "Colombo" },
  { id: 2, name: "Central", lat: 7.2906, lng: 80.6337, capital: "Kandy" },
  { id: 3, name: "Southern", lat: 6.0535, lng: 80.221, capital: "Galle" },
  { id: 4, name: "Northern", lat: 9.6615, lng: 80.0255, capital: "Jaffna" },
  { id: 5, name: "Eastern", lat: 7.7142, lng: 81.7, capital: "Trincomalee" },
  {
    id: 6,
    name: "North Western",
    lat: 7.7873,
    lng: 80.0,
    capital: "Kurunegala",
  },
  {
    id: 7,
    name: "North Central",
    lat: 8.35,
    lng: 80.5,
    capital: "Anuradhapura",
  },
  { id: 8, name: "Uva", lat: 6.8889, lng: 81.3, capital: "Badulla" },
  {
    id: 9,
    name: "Sabaragamuwa",
    lat: 6.7056,
    lng: 80.3847,
    capital: "Ratnapura",
  },
];

const Weather = () => {
  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your OpenWeatherMap API key
  const API_KEY = "2f911c47a527f0e06fbeb7772b79619a";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${selectedProvince.lat}&lon=${selectedProvince.lng}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) throw new Error("Weather data fetch failed");
        const data = await response.json();
        console.log(data);

        setWeather(data);
      } catch (err) {
        setError("Failed to load weather data. Please try again later.");
        console.error("Weather fetch error:", err);
      }
      setLoading(false);
    };

    fetchWeather();
  }, [selectedProvince]);

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "clear":
        return <Sun className="w-6 h-6 text-yellow-500" />;
      case "clouds":
        return <Cloud className="w-6 h-6 text-gray-500" />;
      case "rain":
        return <CloudRain className="w-6 h-6 text-blue-500" />;
      default:
        return <Sun className="w-6 h-6 text-yellow-500" />;
    }
  };

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-6xl mx-auto mt-4">
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Sri Lanka Weather Forecast</h1>
        <Select
          value={selectedProvince.name}
          onValueChange={(value) =>
            setSelectedProvince(provinces.find((p) => p.name === value))
          }
        >
          <SelectTrigger className="w-full md:w-72">
            <SelectValue placeholder="Select province" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((province) => (
              <SelectItem key={province.id} value={province.name}>
                {province.name} Province ({province.capital})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="w-8 h-8 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Current Weather Card */}
          <Card className="col-span-1 md:col-span-2">
            <CardHeader>
              <CardTitle>Current Weather</CardTitle>
              <CardDescription>
                {selectedProvince.name} Province - {selectedProvince.capital}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {weather && weather.list && weather.list[0] && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Thermometer className="w-6 h-6 text-red-500" />
                    <span className="text-2xl font-semibold">
                      {Math.round(weather.list[0].main.temp)}°C
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-6 h-6 text-blue-500" />
                    <span>{weather.list[0].main.humidity}% Humidity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wind className="w-6 h-6 text-gray-500" />
                    <span>
                      {Math.round(weather.list[0].wind.speed * 3.6)} km/h Wind
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CloudRain className="w-6 h-6 text-blue-500" />
                    <span>{weather.list[0].weather[0].description}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Map Card */}
          <Card className="col-span-1 md:col-span-2 lg:row-span-2">
            <CardHeader>
              <CardTitle>Province Map</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg h-64">
                <iframe
                  className="responsive-iframe"
                  id="myiframe"
                  width="100%"
                  height="525"
                  src="https://embed.windy.com/embed2.html?lat=6.1609&amp;lon=80.69817600&amp;detailLat=6.1609&amp;detailLon=80.69817600&amp;zoom=11&amp;level=surface&amp;overlay=rain&amp;product=ecmwf&amp;menu=&amp;message=&amp;marker=true&amp;calendar=now&amp;pressure=&amp;type=map&amp;location=coordinates&amp;detail=&amp;metricWind=default&amp;metricTemp=default&amp;radarRange=-1"
                  frameBorder="0"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          {/* 3-Day Forecast Cards */}
          {weather &&
            weather.list &&
            weather.list.slice(0, 3).map((day, index) => (
              <Card key={index} className="col-span-1">
                <CardHeader>
                  <CardTitle className="text-lg">
                    {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center gap-2">
                    {getWeatherIcon(day.weather[0].main)}
                    <span className="text-xl font-semibold">
                      {Math.round(day.main.temp)}°C
                    </span>
                    <span className="text-gray-500">
                      {day.weather[0].description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      )}
    </div>
  );
};

export default Weather;
