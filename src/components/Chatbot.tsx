"use client";

import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { generateResponse } from "@/actions/getServerResponse";

// Array of agriculture-focused loading phrases
const loadingPhrases = [
  "🌾 Analyzing crop information...",
  "🚜 Gathering farming insights...",
  "🌱 Researching sustainable practices...",
  "🌿 Checking agricultural data...",
  "🧑‍🌾 Consulting farming expertise...",
  "🌲 Processing soil information...",
  "💧 Analyzing irrigation methods...",
  "🪴 Reviewing plant health data...",
  "🌡️ Checking weather patterns...",
  "🦋 Investigating pest control methods...",
  "🌺 Examining plant varieties...",
  "🍃 Studying organic farming practices...",
  "🌍 Gathering sustainable farming tips...",
  "📊 Analyzing crop yields...",
  "🔬 Researching agricultural solutions...",
  "🌱 Processing farming queries...",
  "🌿 Consulting agricultural database...",
  "🚜 Reviewing farming techniques...",
  "💭 Thinking through agricultural facts...",
  "🌾 Preparing farming information...",
];

const getRandomLoadingPhrase = () => {
  return loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)];
};

interface Message {
  text: string;
  sender: "user" | "ai";
}

const ChatBot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<any[]>([
    {
      text: `<div class="space-y-4">
      <h5 class="font-bold">Welcome to AgriMate – Your AI Assistant for Agriculture! 🌾</h5>
      <p>I'm here to help you with all your agricultural queries, from crop management to sustainable farming practices! 🌱</p>
      <div class="space-y-2">
        <p class="font-semibold">I can help you with:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li>Crop management and cultivation techniques</li>
          <li>Soil health and fertilization methods</li>
          <li>Pest control and disease management</li>
          <li>Sustainable and organic farming practices</li>
          <li>Weather-smart agriculture tips</li>
        </ul>
      </div>
      <p>Feel free to ask any farming-related questions! 🌿</p>
    </div>`,
      sender: "ai",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleMessageSend = async () => {
    if (input.trim()) {
      const newMessages = [...messages, { text: input, sender: "user" }];
      setMessages(newMessages);
      setInput("");
      setLoading(true);
      setLoadingMessage(getRandomLoadingPhrase());

      try {
        const aiResponse = await generateResponse(newMessages, input);
        setMessages([...newMessages, { text: aiResponse, sender: "ai" }]);
      } catch (error) {
        console.error("Error generating response:", error);
        setMessages([
          ...newMessages,
          {
            text: "I apologize, but I'm having trouble processing your request right now. Please try again later.",
            sender: "ai",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleMessageSend();
    }
  };

  return (
    <Card className="h-[80vh] mx-4 max-w-4xl mx-auto">
      <CardContent className="p-0 h-full flex flex-col">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-primary text-primary-foreground"
                    : "bg-muted"
                } rounded-lg p-4`}
                dangerouslySetInnerHTML={{ __html: msg.text }}
              />
            ))}
            {loading && (
              <div className="text-center text-muted-foreground">
                {loadingMessage}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask your agriculture-related question..."
              className="flex-1"
            />
            <Button onClick={handleMessageSend} size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            AgriMate provides general agricultural information. Always consult
            with local agricultural experts for specific advice.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
