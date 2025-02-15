import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Plus,
  TrendingUp,
  Package,
  Clock,
  Trash2,
  Check,
  X,
  ChevronDown,
  Truck,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const FarmerDashboard = () => {
  const [selectedBids, setSelectedBids] = useState({});
  const [activeBid, setActiveBid] = useState(null);

  // Sample data
  const bids = [
    {
      id: 1,
      product: "Rice Harvest",
      totalQuantity: 1000,
      availableQuantity: 1000,
      unit: "kg",
      status: "active",
      endDate: "2025-03-15",
      minPrice: 95,
      customerBids: [
        {
          id: 1,
          customer: "John Perera",
          phone: "077-1234567",
          quantity: 200,
          price: 98,
          status: "pending",
        },
        {
          id: 2,
          customer: "Sara Silva",
          phone: "071-7654321",
          quantity: 300,
          price: 97,
          status: "pending",
        },
        {
          id: 3,
          customer: "Anil Kumar",
          phone: "075-9876543",
          quantity: 400,
          price: 96,
          status: "pending",
        },
      ],
    },
    {
      id: 2,
      product: "Fresh Vegetables",
      totalQuantity: 500,
      availableQuantity: 500,
      unit: "kg",
      status: "active",
      endDate: "2025-03-10",
      minPrice: 120,
      customerBids: [
        {
          id: 4,
          customer: "Royal Hotel",
          phone: "011-2345678",
          quantity: 150,
          price: 125,
          status: "pending",
        },
        {
          id: 5,
          customer: "Green Mart",
          phone: "011-8765432",
          quantity: 200,
          price: 122,
          status: "pending",
        },
      ],
    },
  ];

  const calculateRemainingQuantity = (bidId) => {
    const bid = bids.find((b) => b.id === bidId);
    if (!bid) return 0;

    const selectedBidsTotal = Object.entries(selectedBids[bidId] || {})
      .filter(([_, isSelected]) => isSelected)
      .reduce((total, [bidId]) => {
        const customerBid = bid.customerBids.find(
          (cb) => cb.id.toString() === bidId
        );
        return total + (customerBid ? customerBid.quantity : 0);
      }, 0);

    return bid.totalQuantity - selectedBidsTotal;
  };

  const handleBidSelection = (bidId, customerBidId) => {
    setSelectedBids((prev) => ({
      ...prev,
      [bidId]: {
        ...prev[bidId],
        [customerBidId]: !prev[bidId]?.[customerBidId],
      },
    }));
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Bid Management Dashboard</h1>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Link
              href="/market"
              className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
            >
              <Plus className="h-5 w-5" />
              New Bid
            </Link>
          </div>
        </div>
      </div>

      {/* Active Bids */}
      <div className="grid grid-cols-1 gap-6">
        {bids.map((bid) => (
          <Card key={bid.id} className="overflow-hidden">
            <CardHeader className="bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{bid.product}</CardTitle>
                  <div className="text-sm text-gray-500 mt-1">
                    Ends on {new Date(bid.endDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="text-red-500 hover:bg-red-50 p-2 rounded-lg"
                    title="Delete Bid"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button
                    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
                    onClick={() =>
                      setActiveBid(activeBid === bid.id ? null : bid.id)
                    }
                  >
                    End Bid
                  </button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Total Quantity</div>
                  <div className="text-xl font-bold text-green-600">
                    {bid.totalQuantity} {bid.unit}
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">
                    Available Quantity
                  </div>
                  <div className="text-xl font-bold text-blue-600">
                    {calculateRemainingQuantity(bid.id)} {bid.unit}
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Minimum Price</div>
                  <div className="text-xl font-bold text-purple-600">
                    Rs. {bid.minPrice}/{bid.unit}
                  </div>
                </div>
              </div>

              {/* Customer Bids Section */}
              {activeBid === bid.id && (
                <div className="border rounded-lg mt-4">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium">Customer Bids</h3>
                  </div>
                  <div className="divide-y">
                    {bid.customerBids.map((customerBid) => (
                      <div
                        key={customerBid.id}
                        className="p-4 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4">
                          <input
                            type="checkbox"
                            checked={
                              selectedBids[bid.id]?.[customerBid.id] || false
                            }
                            onChange={() =>
                              handleBidSelection(bid.id, customerBid.id)
                            }
                            className="h-5 w-5 rounded border-gray-300"
                          />
                          <div>
                            <div className="font-medium">
                              {customerBid.customer}
                            </div>
                            <div className="text-sm text-gray-500">
                              {customerBid.phone}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <div>
                            <div className="text-sm text-gray-500">
                              Quantity
                            </div>
                            <div className="font-medium">
                              {customerBid.quantity} {bid.unit}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">
                              Bid Amount
                            </div>
                            <div className="font-medium text-green-600">
                              Rs. {customerBid.price}/{bid.unit}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 p-4 border-t flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">
                        Available Quantity After Selection
                      </div>
                      <div className="font-medium">
                        {calculateRemainingQuantity(bid.id)} {bid.unit}
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2">
                      <Truck className="h-5 w-5" />
                      Process Selected Orders
                    </button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FarmerDashboard;
