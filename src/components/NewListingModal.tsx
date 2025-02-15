"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Plus, Upload, X } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

export default function NewListingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    category: "harvest",
    harvestType: "future",
    quantity: "",
    unit: "kg",
    minPrice: "",
    description: "",
    location: "",
    harvestDate: "",
    images: [],
  });

  const [imagePreview, setImagePreview] = useState<string[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview((prev) => [...prev, ...previews]);

    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ...files],
    }));
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(imagePreview[index]);
    setImagePreview((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsOpen(false);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <div className="fixed bottom-6 right-6">
            <Button
              size="lg"
              variant="default"
              className="rounded-full shadow-lg"
            >
              <span className="text-2xl">+</span> Add Listing
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <ScrollArea className="p-1 max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>Create New Listing</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 p-2">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, category: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="harvest">Harvest</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.category === "harvest" && (
                  <div>
                    <Label>Harvest Type</Label>
                    <Select
                      value={formData.harvestType}
                      onValueChange={(value) =>
                        setFormData((prev) => ({ ...prev, harvestType: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="future">Future Harvest</SelectItem>
                        <SelectItem value="available">Available Now</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label>Unit</Label>
                  <Select
                    value={formData.unit}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, unit: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kg">Kilograms (kg)</SelectItem>
                      <SelectItem value="g">Grams (g)</SelectItem>
                      <SelectItem value="ton">Tons</SelectItem>
                      <SelectItem value="pieces">Pieces</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Minimum Price (Rs.)</Label>
                  <Input
                    type="number"
                    name="minPrice"
                    value={formData.minPrice}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {formData.harvestType === "future" && (
                <div>
                  <Label>Expected Harvest Date</Label>
                  <div className="relative">
                    <Input
                      type="date"
                      name="harvestDate"
                      value={formData.harvestDate}
                      onChange={handleInputChange}
                      required
                    />
                    <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              )}

              <div>
                <Label>Location</Label>
                <Input
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  required
                />
              </div>

              <div>
                <Label>Product Images</Label>
                <div className="grid grid-cols-4 gap-4">
                  {imagePreview.map((url, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  {imagePreview.length < 4 && (
                    <label className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center h-24 cursor-pointer hover:border-green-500 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        multiple
                      />
                      <Upload className="h-6 w-6 text-gray-400" />
                      <span className="text-sm text-gray-500 mt-1">
                        Add Image
                      </span>
                    </label>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button
                  type="submit"
                  className="bg-green-600 text-white flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  Create Listing
                </Button>
              </div>
            </form>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
