import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeCheck,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Share2,
  ShoppingCart,
  Star,
  TrendingUp,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Sample product data
  const product = {
    type: "harvest",
    category: "future",
    title: "Premium Organic Rice Harvest",
    seller: "Kumara Perera",
    sellerRating: 4.8,
    reviews: 128,
    verified: true,
    location: "Anuradhapura, Sri Lanka",
    price: "Rs. 95/kg",
    currentBid: "Rs. 95/kg",
    minBid: "Rs. 96/kg",
    quantity: "1000kg",
    harvestDate: "March 2025",
    description:
      "High-quality organic rice harvest from our family farm. We use traditional farming methods combined with modern organic practices. Perfect for both retail and wholesale buyers.",
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    specifications: [
      { label: "Variety", value: "Nadu" },
      { label: "Farming Method", value: "Organic" },
      { label: "Certification", value: "Sri Lanka Standards (SLS)" },
      { label: "Min Order Quantity", value: "100kg" },
      { label: "Available for Export", value: "Yes" },
    ],
    sellerInfo: {
      image: "/api/placeholder/100/100",
      yearsActive: 5,
      responseRate: "98%",
      completedSales: 234,
    },
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Images and Details */}
        <div>
          {/* Main Image */}
          <div className="mb-4">
            <img
              src={product.images[selectedImage]}
              alt={product.title}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className={`w-full h-24 object-cover rounded cursor-pointer border-2 
                  ${
                    selectedImage === index
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>

          {/* Product Specifications */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="h-5 w-5" />
                Specifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index}>
                    <div className="text-sm text-gray-500">{spec.label}</div>
                    <div className="font-medium">{spec.value}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="font-medium">Island-wide Delivery</div>
                    <div className="text-sm text-gray-500">
                      Delivery charges based on location and quantity
                    </div>
                  </div>
                  <div className="text-green-600 font-medium">Available</div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="font-medium">Export Shipping</div>
                    <div className="text-sm text-gray-500">
                      International shipping available
                    </div>
                  </div>
                  <div className="text-green-600 font-medium">Available</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Product Info and Actions */}
        <div>
          {/* Title and Basic Info */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-medium">{product.sellerRating}</span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
              {product.verified && (
                <div className="flex items-center gap-1 text-green-600">
                  <BadgeCheck className="h-5 w-5" />
                  <span>Verified Seller</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <MapPin className="h-5 w-5" />
              <span>{product.location}</span>
            </div>
          </div>

          {/* Price and Action Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              {product.category === "future" ? (
                <>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Current Bid</div>
                    <div className="text-3xl font-bold text-green-600">
                      {product.currentBid}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Minimum next bid: {product.minBid}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      type="number"
                      placeholder="Enter your bid per unit"
                      className="w-full p-3 border rounded-lg"
                    />

                    <input
                      type="number"
                      placeholder="Enter amount of units"
                      className="w-full p-3 border rounded-lg"
                    />

                    <Button
                      variant="default"
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2"
                    >
                      <TrendingUp className="h-4 w-4" />
                      Place Bid
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500">Price</div>
                    <div className="text-3xl font-bold text-green-600">
                      {product.price}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      type="number"
                      placeholder="Enter quantity"
                      className="w-full p-3 border rounded-lg"
                    />
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-2">
                      <ShoppingCart className="h-5 w-5" />
                      Buy Now
                    </button>
                  </div>
                </>
              )}
              <div className="flex gap-2 mt-4">
                <button
                  className="
                w-full flex items-center justify-center gap-2 border border-green-600 text-green-600 py-2 rounded-lg hover:bg-green-50"
                >
                  <Share2 className="h-5 w-5" />
                  Share
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Seller Information */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Seller Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-4">
                <img
                  src={"https://picsum.photos/200"}
                  alt={product.seller}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-lg mb-1">{product.seller}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-500">Member Since</div>
                      <div className="font-medium">
                        {product.sellerInfo.yearsActive} years
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Response Rate</div>
                      <div className="font-medium">
                        {product.sellerInfo.responseRate}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        Completed Sales
                      </div>
                      <div className="font-medium">
                        {product.sellerInfo.completedSales}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Description */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Product Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 whitespace-pre-line">
                {product.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
