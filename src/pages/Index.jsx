import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <header className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold">Welcome to the World of Lions</h1>
          <p className="mt-4 text-xl">Discover the majestic life of lions in the wild</p>
        </div>
      </header>

      {/* About Lions Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>About Lions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/placeholder.svg" alt="Lion in natural habitat" className="w-full md:w-1/2 rounded-lg shadow-lg" />
              <p className="mt-4 md:mt-0 md:ml-6 text-lg">
                Lions are one of the most iconic and revered animals in the world. They are known for their majestic appearance and powerful presence. Lions primarily inhabit savannas, grasslands, and open woodlands. They play a crucial role in maintaining the balance of their ecosystem by controlling the population of herbivores.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Lion Facts Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Interesting Facts About Lions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Lions are the only cats that live in groups called prides.</li>
              <li>A lion's roar can be heard up to 5 miles away.</li>
              <li>Male lions are easily recognizable by their manes, which grow larger as they age.</li>
              <li>Lions are apex predators, meaning they are at the top of the food chain.</li>
              <li>Female lions do most of the hunting for the pride.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Conservation Efforts Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Conservation Efforts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/placeholder.svg" alt="Lion conservation efforts" className="w-full md:w-1/2 rounded-lg shadow-lg" />
              <p className="mt-4 md:mt-0 md:ml-6 text-lg">
                Conservation efforts are crucial to protect lions from threats such as habitat loss, human-wildlife conflict, and poaching. Organizations around the world are working to create protected areas, promote coexistence between humans and lions, and raise awareness about the importance of lion conservation.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-6 text-center">
        <p>&copy; 2023 Lion Conservation. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Facebook</a>
          <a href="#" className="text-blue-500 hover:underline">Twitter</a>
          <a href="#" className="text-blue-500 hover:underline">Instagram</a>
          <a href="#" className="text-blue-500 hover:underline">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;