import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <section className="text-center bg-cover bg-center py-20" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <h1 className="text-5xl font-bold text-white">Welcome to the World of Lions</h1>
        <p className="text-2xl text-white mt-4">Discover the majestic life of lions in the wild</p>
      </section>

      {/* About Lions Section */}
      <section className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>About Lions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/placeholder.svg" alt="Lion in natural habitat" className="w-full md:w-1/2 rounded-lg" />
              <p className="mt-4 md:mt-0 md:ml-6">
                Lions are one of the most iconic animals in the world. They are known for their majestic appearance and social behavior. Lions typically inhabit savannas, grasslands, and open woodlands. They play a crucial role in maintaining the balance of their ecosystem by controlling the population of herbivores.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Lion Facts Section */}
      <section className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Interesting Facts About Lions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Badge className="mr-2">1</Badge> Lions are the only cats that live in groups.
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">2</Badge> A group, or pride, can be up to 30 lions, depending on how much food and water is available.
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">3</Badge> Male lions defend the pride’s territory while females do most of the hunting.
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">4</Badge> A lion’s roar can be heard up to 8 kilometers away.
              </li>
              <li className="flex items-center">
                <Badge className="mr-2">5</Badge> Lions can run at a speed of up to 50 miles per hour for short distances.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Conservation Efforts Section */}
      <section className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Conservation Efforts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/placeholder.svg" alt="Lion conservation" className="w-full md:w-1/2 rounded-lg" />
              <p className="mt-4 md:mt-0 md:ml-6">
                Conservation efforts are crucial to protect lions from threats such as habitat loss, human-wildlife conflict, and poaching. Various organizations are working to preserve lion habitats, reduce conflicts with humans, and combat illegal hunting. Supporting these efforts is essential to ensure the survival of lions for future generations.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Lion World. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white mx-2">Facebook</a>
            <a href="#" className="text-white mx-2">Twitter</a>
            <a href="#" className="text-white mx-2">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;