import { 
  IoFlash, 
  IoShield, 
  IoGlobe, 
  IoPhonePortrait, 
  IoCash, 
  IoTime,
  IoPeople,
  IoLockClosed
} from "react-icons/io5";

const features = [
  {
    icon: IoPhonePortrait,
    title: "Works on Any Phone",
    description: "No smartphone needed. Works on basic feature phones via USSD technology.",
    gradientClass: "bg-gradient-icon-primary",
    highlighted: false,
  },
  {
    icon: IoFlash,
    title: "Lightning Fast",
    description: "Transactions complete in under 3 minutes, powered by blockchain efficiency.",
    gradientClass: "bg-gradient-icon-secondary",
    highlighted: false,
  },
  {
    icon: IoCash,
    title: "Ultra-Low Fees",
    description: "Only 1% transaction fee. Save up to 80% compared to traditional remittance.",
    gradientClass: "bg-gradient-hero",
    highlighted: false,
  },
  {
    icon: IoShield,
    title: "Bank-Grade Security",
    description: "256-bit encryption and blockchain immutability protect every transaction.",
    gradientClass: "bg-gradient-icon-accent",
    highlighted: false,
  },
  {
    icon: IoGlobe,
    title: "12+ African Countries",
    description: "Send to Nigeria, Kenya, Ghana, South Africa, and more with instant delivery.",
    gradientClass: "bg-gradient-secondary",
    highlighted: false,
  },
  {
    icon: IoTime,
    title: "24/7 Availability",
    description: "Send money anytime, anywhere. No bank holidays or office hours to worry about.",
    gradientClass: "bg-gradient-icon-primary",
    highlighted: false,
  },
  {
    icon: IoPeople,
    title: "Family Accounts",
    description: "Link multiple recipients and save their details for quick repeat transfers.",
    gradientClass: "bg-gradient-accent",
    highlighted: false,
  },
  {
    icon: IoLockClosed,
    title: "Regulatory Compliant",
    description: "Fully licensed and compliant with local and international financial regulations.",
    gradientClass: "bg-gradient-secondary",
    highlighted: false,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-accent text-sm font-medium mb-4 border-accent/30">
            Why Choose Afripay
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Africa's Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand that not everyone has a smartphone or reliable internet. That's why we built Afripay to work for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                feature.highlighted 
                  ? feature.gradientClass + ' shadow-glow' 
                  : 'glass-card hover:shadow-card'
              }`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                feature.highlighted 
                  ? 'bg-primary-foreground/20' 
                  : feature.gradientClass
              }`}>
                <feature.icon 
                  size={24} 
                  className={feature.highlighted ? 'text-primary-foreground' : 'text-primary-foreground'} 
                />
              </div>
              
              {/* Content */}
              <h3 className={`text-lg font-bold mb-2 ${
                feature.highlighted ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                {feature.title}
              </h3>
              <p className={feature.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 glass-card rounded-2xl crypto-border">
            <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">1%</p>
            <p className="text-muted-foreground">Transaction Fee</p>
          </div>
          <div className="text-center p-8 glass-card rounded-2xl crypto-border">
            <p className="text-4xl md:text-5xl font-bold gradient-text-secondary mb-2">&lt;3min</p>
            <p className="text-muted-foreground">Average Transfer Time</p>
          </div>
          <div className="text-center p-8 glass-card rounded-2xl crypto-border">
            <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-text-accent mb-2">99.9%</p>
            <p className="text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
