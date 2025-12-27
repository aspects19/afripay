import { IoPhonePortrait, IoArrowForward, IoCube, IoWallet, IoCheckmarkCircle } from "react-icons/io5";


const steps = [
  {
    icon: IoPhonePortrait,
    title: "Dial USSD Code",
    description: "Simply dial *384*123# from any basic phone. No smartphone or internet required.",
    gradientClass: "bg-gradient-icon-primary",
  },
  {
    icon: IoCube,
    title: "Blockchain Processing",
    description: "Your transaction is converted to a stablecoin and processed on the blockchain for security.",
    gradientClass: "bg-gradient-icon-secondary",
  },
  {
    icon: IoWallet,
    title: "Instant Delivery",
    description: "Recipient receives funds via mobile money, bank transfer, or crypto wallet within minutes.",
    gradientClass: "bg-gradient-icon-accent",
  },
  {
    icon:  IoCheckmarkCircle,
    title: "Confirmation",
    description: "Both sender and receiver get SMS confirmation with transaction details.",
    gradientClass: "bg-gradient-hero",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-overlay-card" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-secondary text-sm font-medium mb-4 border-secondary/30">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How <span className="gradient-text">Afripay</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Send money to loved ones in Africa in just 4 simple steps. No complicated apps, no hidden fees.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-line -translate-y-1/2 rounded-full opacity-30" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="glass-card rounded-2xl p-6 md:p-8 h-full transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-card border border-primary flex items-center justify-center text-sm font-bold text-primary shadow-glow">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${step.gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft`}>
                    <step.icon size={28} className="text-primary-foreground" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <IoArrowForward size={24} className="text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* USSD Demo */}
        <div className="mt-20 glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto crypto-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Try Our USSD Demo
              </h3>
              <p className="text-muted-foreground mb-6">
                Experience the simplicity of USSD remittance. Dial the code below to see how easy it is to send money.
              </p>
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-hero text-primary-foreground shadow-glow">
                <IoPhonePortrait size={24} />
                <span className="text-2xl font-mono font-bold">*384*123#</span>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 font-mono text-sm space-y-3 border border-border/50">
              <p className="text-muted-foreground">{">"} Welcome to Afripay</p>
              <p className="text-foreground">1. Send Money</p>
              <p className="text-foreground">2. Check Balance</p>
              <p className="text-foreground">3. Transaction History</p>
              <p className="text-foreground">4. Settings</p>
              <p className="text-muted-foreground mt-4">Reply with option number</p>
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                <span className="text-primary animate-pulse">▌</span>
                <span className="text-muted-foreground">Enter: 1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
