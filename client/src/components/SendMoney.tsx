import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoArrowForward, IoRefresh } from "react-icons/io5";

const countries = [
  { code: "NG", name: "Nigeria", flag: "🇳🇬", currency: "NGN", rate: 1650 },
  { code: "KE", name: "Kenya", flag: "🇰🇪", currency: "KES", rate: 155 },
  { code: "GH", name: "Ghana", flag: "🇬🇭", currency: "GHS", rate: 15.5 },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", currency: "ZAR", rate: 18.5 },
  { code: "UG", name: "Uganda", flag: "🇺🇬", currency: "UGX", rate: 3750 },
];

const SendMoney = () => {
  const [sendAmount, setSendAmount] = useState("100");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const receiveAmount = parseFloat(sendAmount || "0") * selectedCountry.rate;
  const fee = parseFloat(sendAmount || "0") * 0.01;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-overlay-card" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4 border-primary/30">
              Quick Transfer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Send Money in <span className="gradient-text">Seconds</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Enter the amount you want to send and see exactly how much your recipient will receive. No hidden fees, no surprises.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border-secondary/30">
                <span className="text-secondary font-semibold">✓</span>
                <span className="text-sm text-foreground">Bank-level security</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border-secondary/30">
                <span className="text-secondary font-semibold">✓</span>
                <span className="text-sm text-foreground">Instant transfers</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card border-secondary/30">
                <span className="text-secondary font-semibold">✓</span>
                <span className="text-sm text-foreground">24/7 support</span>
              </div>
            </div>
          </div>

          {/* Right - Calculator */}
          <div className="glass-card rounded-3xl p-6 md:p-8 shadow-card crypto-border">
            {/* You Send */}
            <div className="mb-4">
              <label className="text-sm text-muted-foreground mb-2 block">You Send</label>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted">
                  <span className="text-xl">🇺🇸</span>
                  <span className="font-semibold text-foreground">USD</span>
                </div>
                <input
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="flex-1 bg-transparent text-2xl font-bold text-right focus:outline-none text-foreground"
                  placeholder="0.00"
                />
              </div>
            </div>

            {/* Exchange Info */}
            <div className="flex items-center justify-center py-4">
              <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-card border border-border/50">
                <div className="flex items-center gap-2">
                  <IoRefresh size={16} className="text-secondary" />
                  <span className="text-sm text-muted-foreground">
                    1 USD = {selectedCountry.rate.toLocaleString()} {selectedCountry.currency}
                  </span>
                </div>
              </div>
            </div>

            {/* They Receive */}
            <div className="mb-6">
              <label className="text-sm text-muted-foreground mb-2 block">They Receive</label>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-overlay-primary border border-primary/30">
                <select
                  value={selectedCountry.code}
                  onChange={(e) => setSelectedCountry(countries.find(c => c.code === e.target.value) || countries[0])}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border/50 focus:outline-none font-semibold appearance-none cursor-pointer text-foreground"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.currency}
                    </option>
                  ))}
                </select>
                <p className="flex-1 text-2xl font-bold text-right gradient-text">
                  {receiveAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </p>
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="space-y-3 py-4 border-t border-border/30">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Transfer fee (1%)</span>
                <span className="font-medium text-foreground">${fee.toFixed(2)} USD</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Estimated delivery</span>
                <span className="font-medium text-secondary">~2-3 minutes</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border/30">
                <span className="font-semibold text-foreground">Total you pay</span>
                <span className="font-bold text-lg text-foreground">
                  ${(parseFloat(sendAmount || "0") + fee).toFixed(2)} USD
                </span>
              </div>
            </div>

            {/* CTA */}
            <Button variant="hero" size="xl" className="w-full mt-4">
              Continue
              <IoArrowForward size={20} />
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SendMoney;
