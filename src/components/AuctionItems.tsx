import { Card, CardContent } from "@/components/ui/card";
import {
  BadgeCheck,
  Calendar,
  Leaf,
  Package,
  ShoppingCart,
  Star,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

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
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Aswenna Marketplace</h1>

        {/* Main Category Tabs */}
        <div className="flex gap-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeType === "all" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
            onClick={() => setActiveType("all")}
          >
            <span>All Items</span>
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeType === "harvest"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveType("harvest")}
          >
            <Leaf className="h-4 w-4" />
            <span>Harvests</span>
          </button>
          <button
            className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              activeType === "equipment"
                ? "bg-blue-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => setActiveType("equipment")}
          >
            <Package className="h-4 w-4" />
            <span>Equipment & Tools</span>
          </button>
        </div>

        {/* Subcategory Tabs (shown only for harvests) */}
        {(activeType === "harvest" || activeType === "all") && (
          <div className="flex gap-4 mb-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "all"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All Harvests
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "future"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setActiveCategory("future")}
            >
              Future Harvests
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                activeCategory === "available"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
              onClick={() => setActiveCategory("available")}
            >
              Available Now
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {listings
          .filter((item) => activeType === "all" || item.type === activeType)
          .filter(
            (item) =>
              !item.category ||
              activeCategory === "all" ||
              item.category === activeCategory
          )
          .map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.verified && (
                        <BadgeCheck className="h-5 w-5 text-blue-500" />
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      Seller: {item.seller}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      Location: {item.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {item.category === "future" ? "Current Bid" : "Price"}
                    </div>
                    <div className="text-lg font-bold text-green-600">
                      {item.price}
                    </div>
                  </div>
                </div>

                {/* Harvest-specific details */}
                {item.type === "harvest" && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Quantity</div>
                    <div className="font-medium">{item.quantity}</div>
                    {item.category === "future" && (
                      <div className="flex items-center gap-2 text-orange-500 mt-2">
                        <Calendar className="h-4 w-4" />
                        <span>Expected: {item.harvestDate}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Equipment-specific details */}
                {item.type === "equipment" && (
                  <div className="mb-4">
                    {item.condition && (
                      <div>
                        <div className="text-sm text-gray-500">Condition</div>
                        <div className="font-medium">{item.condition}</div>
                      </div>
                    )}
                    {item.warranty && (
                      <div className="mt-2">
                        <div className="text-sm text-gray-500">Warranty</div>
                        <div className="font-medium">{item.warranty}</div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex justify-between items-center">
                  {item.category === "future" ? (
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Place Bid
                    </button>
                  ) : (
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Buy Now
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    Contact Seller
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Add Listing Button */}
      <div className="fixed bottom-6 right-6">
        <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center gap-2">
          <span className="text-2xl">+</span>
          Add Listing
        </button>
      </div>
    </div>
  );
};

export default AswennaMarketplace;
