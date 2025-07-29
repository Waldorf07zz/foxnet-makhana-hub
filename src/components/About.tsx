import lotusImage from "@/assets/lotus-pond.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Born from the ancient wisdom of Bihar, India, our premium Makhana 
                represents thousands of years of traditional superfood knowledge 
                meeting modern nutrition science.
              </p>
              <p>
                From the pristine lotus ponds of the Ganges floodplains to your table, 
                every Fox Nut is carefully harvested and processed using time-honored 
                techniques that preserve maximum nutritional value.
              </p>
              <p>
                We believe in bringing you nature's perfect snack – one that nourishes 
                your body while respecting the environment and supporting local farming 
                communities.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={lotusImage}
              alt="Traditional lotus pond in Bihar"
              className="rounded-3xl shadow-card w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Why Makhana */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Why Choose Makhana?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the nutritional powerhouse that's taking the health world by storm
          </p>
        </div>

        {/* Nutrition Comparison */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌱</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">High Protein</h3>
            <p className="text-muted-foreground mb-4">9.7g protein per 100g serving</p>
            <div className="text-sm text-primary font-medium">vs Chips: 6g protein</div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Low Calories</h3>
            <p className="text-muted-foreground mb-4">347 calories per 100g</p>
            <div className="text-sm text-primary font-medium">vs Popcorn: 387 calories</div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💪</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Rich in Minerals</h3>
            <p className="text-muted-foreground mb-4">Calcium, Magnesium, Iron</p>
            <div className="text-sm text-primary font-medium">vs Regular snacks: 3x more</div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-sage-light rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3">Sustainability</h4>
              <p className="text-muted-foreground">
                Eco-friendly farming practices that protect our environment
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Health</h4>
              <p className="text-muted-foreground">
                Pure, natural nutrition without artificial additives
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-muted-foreground">
                Modern processing techniques meet ancient wisdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;