"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Игровой ПК Extreme", price: 120000, quantity: 1 },
    { id: 2, name: "Игровой ПК Pro", price: 95000, quantity: 1 },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <header className="border-b border-zinc-800">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold">E</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-zinc-400">
                Игровые пк
              </a>
              <a href="#" className="hover:text-zinc-400">
                Пк для учёбы
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Корзина</h1>
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 py-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/placeholder.svg"
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-white">{item.name}</h3>
                  <p className="text-zinc-400">
                    {item.price.toLocaleString("ru-RU")}₽
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-zinc-50"
                  onClick={() => removeItem(item.id)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            ))}
            <Separator className="my-4 bg-zinc-800" />
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-white">
                Итого: {total.toLocaleString("ru-RU")}₽
              </div>
              <Button
                size="lg"
                className="bg-zinc-50 text-zinc-950 hover:bg-zinc-200"
              >
                Оформить заказ
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
