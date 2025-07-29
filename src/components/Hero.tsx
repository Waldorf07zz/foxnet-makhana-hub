import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-makhana.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Wholesome Crunch.
              <span className="text-primary block">Rooted in Nature.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              Discover the power of traditional Indian superfoods with our premium 
              Makhana (Fox Nuts) – a guilt-free, nutrient-rich snack that fits your 
              modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-hero">
              <img
                src={heroImage}
                alt="Premium Makhana Fox Nuts"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-card">
              100% Natural
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;