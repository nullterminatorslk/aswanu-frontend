"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import { ListingItem } from "./AuctionCard";

// Define the schema for validation
const bidSchema = z.object({
  bidAmount: z
    .string()
    .min(1, "Bid amount is required")
    .regex(/^\d+$/, "Bid must be a valid number"),
});

type BidFormValues = z.infer<typeof bidSchema>;

const PlaceBidButton = ({ item }: { item: ListingItem }) => {
  const [open, setOpen] = useState(false);

  const form = useForm<BidFormValues>({
    resolver: zodResolver(bidSchema),
    defaultValues: {
      bidAmount: "",
    },
  });

  const onSubmit = (values: BidFormValues) => {
    console.log("Bid Placed:", values);
    setOpen(false); // Close the modal after submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          Place Bid
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Place a Bid</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">
                Enter your bid amount for{" "}
                <span className="font-semibold">{item.title}</span>.
              </p>
            </div>
            <FormField
              control={form.control}
              name="bidAmount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bid Amount (Rs.)</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter amount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" variant="default" className="w-full">
              Submit Bid
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PlaceBidButton;
