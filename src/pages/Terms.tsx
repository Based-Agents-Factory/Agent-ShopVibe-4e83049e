
import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

const termsList = [
  {
    title: "Transparent Pricing",
    description: (
      <>
        LinkWise charges only <b>a 15% markup on our actual costs</b>—so if it costs us $1 to route your traffic or serve your content, you pay just $1.15. No hidden fees, no confusing plans.
      </>
    ),
  },
  {
    title: "How Costs Work",
    description: (
      <>
        Our only costs are platform infrastructure (cloud, bandwidth, databases) and payments—we pass those through directly with a small markup. Most months, our fees are tiny compared to what legacy link-in-bio platforms charge.
      </>
    ),
  },
  {
    title: "No Feature Walls",
    description: (
      <>
        All LinkWise features are included. We believe in access for everyone, not holding back useful tools unless you upgrade.
      </>
    ),
  },
  {
    title: "Fair Compared to Others",
    description: (
      <>
        <b>LinkWise saves you 50-80% versus Linktree</b> and similar brands.<br />
        Example: If Linktree charges $12/month ($144/year), and with us you get 20,000 visits for $24 (our cost: $21, markup: $3), that's a big difference.
      </>
    ),
  },
];

const Terms = () => (
  <div className="min-h-screen bg-gradient-to-b from-slate-50 via-purple-50 to-white">
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="text-primary" size={32} />
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-purple to-tertiary-purple">
          LinkWise: Fair & Transparent Terms
        </h1>
      </div>

      <p className="mb-8 text-foreground/80">
        At LinkWise, we want you to always know what you’re paying for, and why our model is the fairest and most transparent in the industry.
      </p>

      <div className="space-y-8">
        {termsList.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg shadow border border-border/30"
          >
            <h2 className="font-semibold text-xl mb-2 text-tertiary-purple">{item.title}</h2>
            <div className="text-foreground/80">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-foreground/60">
        Questions? <Link to="/contact" className="underline hover:text-primary">Contact us</Link>. &nbsp;|&nbsp;
        <Link to="/" className="underline hover:text-primary">Back to home</Link>
      </div>
    </div>
  </div>
);

export default Terms;
