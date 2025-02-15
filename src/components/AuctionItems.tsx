"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Package } from "lucide-react";
import { useState } from "react";
import AuctionCard from "./AuctionCard";

const AswennaMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeType, setActiveType] = useState("all");

  const listings = [
    {
      id: 1,
      type: "harvest",
      category: "future",
      seller: "Kumara Perera",
      title: "Premium Rice Harvest",
      quantity: "1000kg",
      harvestDate: "March 2025",
      price: "Rs. 95/kg",
      currentBid: "Rs. 95/kg",
      verified: true,
      rating: 4.8,
      location: "Anuradhapura",
      image: "/api/placeholder/200/150",
    },
    {
      id: 2,
      type: "harvest",
      category: "available",
      seller: "Malini Silva",
      title: "Fresh Vegetables",
      quantity: "500kg",
      price: "Rs. 120/kg",
      verified: true,
      rating: 4.5,
      location: "Dambulla",
      image: "/api/placeholder/200/150",
    },
    {
      id: 3,
      type: "equipment",
      seller: "AgriTech Solutions",
      title: "Modern Tractor",
      condition: "New",
      price: "Rs. 1,500,000",
      verified: true,
      rating: 4.9,
      location: "Colombo",
      warranty: "2 years",
      image: "/api/placeholder/200/150",
    },
    {
      id: 4,
      type: "equipment",
      seller: "Farm Supplies Ltd",
      title: "Organic Fertilizer",
      quantity: "50kg bags",
      price: "Rs. 2,500/bag",
      verified: true,
      rating: 4.7,
      location: "Kandy",
      image: "/api/placeholder/200/150",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Aswenna Marketplace</h1>

      {/* Main Category Tabs */}
      <Tabs defaultValue="all" onValueChange={setActiveType}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Items</TabsTrigger>
          <TabsTrigger value="harvest">
            <Leaf className="h-4 w-4 mr-2" /> Harvests
          </TabsTrigger>
          <TabsTrigger value="equipment">
            <Package className="h-4 w-4 mr-2" /> Equipment & Tools
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Subcategory Tabs (only for harvests) */}
      {(activeType === "harvest" || activeType === "all") && (
        <Tabs defaultValue="all" onValueChange={setActiveCategory}>
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Harvests</TabsTrigger>
            <TabsTrigger value="future">Future Harvests</TabsTrigger>
            <TabsTrigger value="available">Available Now</TabsTrigger>
          </TabsList>
        </Tabs>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings
          .filter((item) => activeType === "all" || item.type === activeType)
          .filter(
            (item) =>
              !item.category ||
              activeCategory === "all" ||
              item.category === activeCategory
          )
          .map((item) => (
            <AuctionCard item={item} key={item.id} />
          ))}
      </div>

      {/* Add Listing Button */}
      <div className="fixed bottom-6 right-6">
        <Button size="lg" variant="default" className="rounded-full shadow-lg">
          <span className="text-2xl">+</span> Add Listing
        </Button>
      </div>
    </div>
  );
};

export default AswennaMarketplace;
