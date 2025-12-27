import { Button } from "@/components/ui/button";
import { IoArrowForward, IoPhonePortrait, IoFlash, IoShield } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 glow-effect opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-6 animate-slide-up">
              <IoFlash size={16} className="text-primary" />
              <span className="text-sm font-medium text-foreground">USSD-Powered Blockchain Remittance</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Send Money to Africa <span className="gradient-text">Without Internet</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up-delayed">
              Afripay bridges the gap between traditional USSD banking and blockchain technology. Fast, secure, and accessible remittances for everyone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button variant="hero" size="xl">
                Start Sending Money
                <IoArrowForward size={20} />
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn How It Works
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text">$2.5M+</p>
                <p className="text-sm text-muted-foreground">Transferred</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold gradient-text-secondary">50K+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-text-accent">12</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              {/* Phone Frame with Gradient Border */}
              <div className="relative w-72 md:w-80 h-[580px] md:h-[620px] rounded-[3rem] p-[3px] shadow-2xl shadow-accent/20">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/60 to-accent/40 rounded-[3rem]" />
                
                {/* Phone Body */}
                <div className="relative w-full h-full bg-gradient-to-b from-[hsl(230,25%,18%)] to-[hsl(230,25%,12%)] rounded-[3rem] p-3">
                  <div className="w-full h-full bg-[hsl(230,25%,8%)] rounded-[2.5rem] overflow-hidden relative border border-border/20">
                    {/* Phone Screen Content */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
                    <div className="relative p-6 pt-12">
                      {/* Status Bar */}
                      <div className="flex justify-between items-center mb-8 text-xs text-muted-foreground">
                        <span>9:41</span>
                        <div className="flex gap-1 items-center">
                          <div className="w-4 h-2 bg-muted-foreground/50 rounded-sm" />
                          <div className="w-4 h-2 bg-muted-foreground/70 rounded-sm" />
                          <div className="w-6 h-3 bg-primary rounded-sm" />
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-icon-primary flex items-center justify-center shadow-glow">
                          <span className="text-xl font-bold text-primary-foreground">A</span>
                        </div>
                        <div>
                          <p className="font-bold text-foreground">Afripay</p>
                          <p className="text-xs text-muted-foreground">USSD: *384*123#</p>
                        </div>
                      </div>

                      {/* Balance Card */}
                      <div className="relative rounded-2xl p-5 mb-6 border border-primary/30 bg-gradient-to-br from-[hsl(230,25%,12%)] to-[hsl(230,25%,10%)]">
                        <p className="text-xs text-muted-foreground mb-2">Available Balance</p>
                        <p className="text-4xl font-bold gradient-text mb-5 tracking-tight">$1,250.00</p>
                        <div className="flex gap-3">
                          <button className="flex-1 bg-primary text-primary-foreground font-bold py-2.5 rounded-xl hover:shadow-glow transition-all">
                            Send
                          </button>
                          <button className="flex-1 bg-secondary text-secondary-foreground font-bold py-2.5 rounded-xl hover:shadow-glow-secondary transition-all">
                            Receive
                          </button>
                        </div>
                      </div>

                      {/* Recent Transactions */}
                      <div>
                        <p className="text-sm font-bold text-foreground mb-3">Recent Activity</p>
                        <div className="space-y-2.5">
                          {[
                            { name: "Kwame A.", amount: "-$150.00", status: "Completed", initial: "K", color: "bg-[hsl(45,80%,50%)]" },
                            { name: "Amina K.", amount: "-$75.00", status: "Completed", initial: "A", color: "bg-[hsl(45,70%,45%)]" },
                            { name: "Deposit", amount: "+$500.00", status: "Received", initial: "D", color: "bg-[hsl(45,60%,40%)]" },
                          ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-[hsl(230,20%,12%)] border border-border/20">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full ${tx.color} flex items-center justify-center`}>
                                  <span className="text-sm font-bold text-primary-foreground">{tx.initial}</span>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold text-foreground">{tx.name}</p>
                                  <p className="text-xs text-muted-foreground">{tx.status}</p>
                                </div>
                              </div>
                              <p className={`text-sm font-bold ${tx.amount.startsWith('+') ? 'text-secondary' : 'text-foreground'}`}>
                                {tx.amount}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-1/4 backdrop-blur-xl bg-[hsl(230,25%,10%)]/90 border border-secondary/30 rounded-2xl p-4 animate-float-delayed shadow-[0_0_40px_-10px_hsl(174,100%,45%,0.3)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-icon-secondary rounded-xl flex items-center justify-center shadow-glow-secondary">
                    <IoShield size={24} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Secured</p>
                    <p className="text-xs text-muted-foreground">256-bit encryption</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/3 backdrop-blur-xl bg-[hsl(230,25%,10%)]/90 border border-accent/30 rounded-2xl p-4 animate-float shadow-[0_0_40px_-10px_hsl(280,100%,65%,0.3)]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-icon-accent rounded-xl flex items-center justify-center shadow-glow-accent">
                    <IoPhonePortrait size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">USSD Ready</p>
                    <p className="text-xs text-muted-foreground">No internet needed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
