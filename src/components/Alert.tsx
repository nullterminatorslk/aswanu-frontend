import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Bug, Send, AlertTriangle } from "lucide-react";

const FarmerAlertForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    location: "",
    pestType: "",
    severity: "",
    description: "",
    affectedCrops: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Alert submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Input
            placeholder="Enter your farm location"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Pest Type</label>
          <Select
            value={formData.pestType}
            onValueChange={(value) => handleChange("pestType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select pest type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="aphids">Aphids</SelectItem>
              <SelectItem value="locusts">Locusts</SelectItem>
              <SelectItem value="beetles">Beetles</SelectItem>
              <SelectItem value="caterpillars">Caterpillars</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Severity Level</label>
          <Select
            value={formData.severity}
            onValueChange={(value) => handleChange("severity", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select severity level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low - Minor damage</SelectItem>
              <SelectItem value="medium">Medium - Moderate damage</SelectItem>
              <SelectItem value="high">High - Severe damage</SelectItem>
              <SelectItem value="critical">
                Critical - Immediate action needed
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Affected Crops</label>
          <Input
            placeholder="List affected crops"
            value={formData.affectedCrops}
            onChange={(e) => handleChange("affectedCrops", e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Detailed Description</label>
          <Textarea
            placeholder="Describe the infestation, damage, and any other relevant details"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="h-32"
            required
          />
        </div>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Bug className="h-4 w-4" />
            <span>Your alert will be sent to farmers within 50km radius</span>
          </div>
          <Button type="submit" className="bg-red-500 hover:bg-red-600">
            <Send className="h-4 w-4 mr-2" />
            Send Alert
          </Button>
        </CardFooter>
      </form>

      {submitted && (
        <Alert className="mt-4 bg-green-50 border-green-200">
          <AlertDescription className="text-green-800">
            Alert submitted successfully! Nearby farmers will be notified.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default FarmerAlertForm;
