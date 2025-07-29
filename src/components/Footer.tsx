const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">F</span>
              </div>
              <span className="text-2xl font-bold">FoxNet</span>
            </div>
            <p className="text-background/80 mb-4">
              Wholesome Crunch. Rooted in Nature.
            </p>
            <p className="text-background/60 text-sm">
              Premium Makhana (Fox Nuts) for the health-conscious modern lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-background transition-colors">Products</a></li>
              <li><a href="#careers" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Classic Roasted</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Spicy Masala</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Herb & Salt</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-background/80 text-sm">
              <p>Email: hello@foxnet.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Bihar 800001, India</p>
            </div>
            <div className="mt-4">
              <h5 className="font-medium mb-2">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="text-background/60 hover:text-background transition-colors">Facebook</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Instagram</a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-background/60 text-sm">
          <p>&copy; 2024 FoxNet Foods Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Shipping Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;