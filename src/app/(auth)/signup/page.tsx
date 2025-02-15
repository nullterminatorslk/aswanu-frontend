"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart, Tractor } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define the validation schema
const registrationSchema = z.object({
  role: z.enum(["farmer", "buyer"], { message: "Please select a role" }),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegistrationFormValues = z.infer<typeof registrationSchema>;

const RegistrationPage = () => {
  const [step, setStep] = useState(1);
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      role: undefined,
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: RegistrationFormValues) => {
    console.log("Registration Successful:", values);
    alert("Registration Successful! 🎉");
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="https://picsum.photos/200/300" // Replace with your actual image
          alt="Harvest Image"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {step === 1 ? (
              // Step 1: Choose Role
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-center">Join As</h2>
                <p className="text-gray-500 text-center">
                  Are you a farmer or a buyer?
                </p>

                <div className="flex gap-4">
                  <Button
                    variant={
                      form.watch("role") === "farmer" ? "default" : "outline"
                    }
                    className="w-full flex items-center gap-2"
                    onClick={() => form.setValue("role", "farmer")}
                  >
                    <Tractor className="h-5 w-5" />
                    Farmer
                  </Button>

                  <Button
                    variant={
                      form.watch("role") === "buyer" ? "default" : "outline"
                    }
                    className="w-full flex items-center gap-2"
                    onClick={() => form.setValue("role", "buyer")}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Buyer
                  </Button>
                </div>

                <Button
                  variant="default"
                  className="w-full"
                  disabled={!form.watch("role")}
                  onClick={() => setStep(2)}
                >
                  Next
                </Button>
              </div>
            ) : (
              // Step 2: Enter Details
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4 w-full max-w-xs"
                >
                  <h2 className="text-2xl font-semibold text-center">
                    Register as a {form.watch("role")}
                  </h2>
                  <p className="text-gray-500 text-center">
                    Fill in your details to continue.
                  </p>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" variant="default">
                      Register
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
