import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import spicyMakhana from "@/assets/spicy-makhana.jpg";
import plainMakhana from "@/assets/plain-makhana.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Classic Roasted Makhana",
      price: "₹299",
      image: plainMakhana,
      description: "Pure, lightly roasted fox nuts with a hint of rock salt",
      features: ["100% Natural", "No Oil Added", "High Protein"],
    },
    {
      id: 2,
      name: "Spicy Masala Makhana",
      price: "₹349",
      image: spicyMakhana,
      description: "Traditional Indian spices meet premium fox nuts",
      features: ["Authentic Spices", "Bold Flavor", "Guilt-Free"],
    },
    {
      id: 3,
      name: "Herb & Himalayan Salt",
      price: "₹379",
      image: plainMakhana,
      description: "Premium herbs with pure Himalayan pink salt",
      features: ["Gourmet Blend", "Mineral Rich", "Artisan Crafted"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-hero-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Premium Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each variety crafted with care, bringing you the finest Makhana experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-spring overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-spring"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    New
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-sage-light text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="text-2xl font-bold text-primary">{product.price}</div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button variant="hero" className="w-full">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-card rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience Premium Makhana?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of health-conscious snackers who've made the switch to nature's perfect crunch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Shop All Products
            </Button>
            <Button variant="outline" size="lg">
              Subscribe & Save 20%
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;