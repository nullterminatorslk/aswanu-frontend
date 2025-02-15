import {
  BadgeCheck,
  Star,
  Calendar,
  TrendingUp,
  ShoppingCart,
} from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from "next/image";

type ListingItem = {
  id: number;
  type: string;
  category?: string; // Only for harvests
  seller: string;
  title: string;
  quantity?: string; // Only for harvests
  harvestDate?: string; // Only for future harvests
  condition?: string; // Only for equipment
  warranty?: string; // Only for equipment
  price: string;
  currentBid?: string; // Only for future harvests
  verified: boolean;
  rating: number;
  location: string;
  image: string;
};

type AuctionCardProps = {
  item: ListingItem;
};

const AuctionCard: FC<AuctionCardProps> = ({ item }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <Image
          width={300}
          height={100}
          src={"https://picsum.photos/200/300"}
          alt={item.title}
          className="w-full h-48 object-cover rounded mb-4"
        />

        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.verified && <BadgeCheck className="h-5 w-5 text-primary" />}
            </div>
            <div className="text-sm text-muted-foreground">
              Seller: {item.seller}
            </div>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span>{item.rating}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Location: {item.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">
              {item.category === "future" ? "Current Bid" : "Price"}
            </div>
            <div className="text-lg font-bold text-primary">{item.price}</div>
          </div>
        </div>

        {/* Harvest-specific details */}
        {item.type === "harvest" && (
          <div className="mb-4">
            <div className="text-sm text-muted-foreground">Quantity</div>
            <div className="font-medium">{item.quantity}</div>
            {item.category === "future" && (
              <div className="flex items-center gap-2 text-foreground mt-2">
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
                <div className="text-sm text-muted-foreground">Condition</div>
                <div className="font-medium">{item.condition}</div>
              </div>
            )}
            {item.warranty && (
              <div className="mt-2">
                <div className="text-sm text-muted-foreground">Warranty</div>
                <div className="font-medium">{item.warranty}</div>
              </div>
            )}
          </div>
        )}

        <Separator className="my-4" />

        <div className="flex justify-between items-center">
          {item.category === "future" ? (
            <Button variant="default">
              <TrendingUp className="h-4 w-4 mr-2" /> Place Bid
            </Button>
          ) : (
            <Button variant="default">
              <ShoppingCart className="h-4 w-4 mr-2" /> Buy Now
            </Button>
          )}
          <Button variant="outline">Contact Seller</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AuctionCard;
