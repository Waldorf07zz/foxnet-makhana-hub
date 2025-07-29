import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.onload = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Join the Crunch Revolution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're looking for passionate people to help build a health-forward future. 
            Join our mission to bring traditional superfoods to the modern world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Why Join Us */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Why Foxnet?</h3>

            <div className="space-y-6">
              {[
                {
                  emoji: "🚀",
                  title: "Growing Industry",
                  text: "Be part of the booming healthy snacks market that's reshaping how people eat.",
                },
                {
                  emoji: "🌱",
                  title: "Purpose-Driven Work",
                  text: "Make a real impact on people's health and support sustainable farming communities.",
                },
                {
                  emoji: "💡",
                  title: "Innovation Culture",
                  text: "Work with modern food tech while honoring traditional wisdom.",
                },
                {
                  emoji: "🏆",
                  title: "Growth Opportunities",
                  text: "Grow with us as we expand across India and beyond.",
                },
              ].map(({ emoji, title, text }) => (
                <div key={title} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">{emoji}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{title}</h4>
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tally Form Embed */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Apply Now</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                data-tally-src="https://tally.so/embed/w7rP0z?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="2207"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Job application"
                loading="lazy"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Careers;
