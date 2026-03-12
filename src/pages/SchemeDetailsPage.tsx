import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const schemeData: Record<string, any> = {
  "pm-kisan": {
    name: "PM Kisan Samman Nidhi",
    nameHi: "पीएम किसान सम्मान निधि",
    icon: "🌾",
    overview: "Financial assistance of ₹6,000 per year to small and marginal farmers in three equal installments.",
    overviewHi: "छोटे और सीमांत किसानों को तीन समान किस्तों में ₹6,000 प्रति वर्ष की वित्तीय सहायता।",
    eligibility: ["Farmer with land", "Indian citizen", "Income below ₹2 Lakh"],
    eligibilityHi: ["भूमि वाला किसान", "भारतीय नागरिक", "आय ₹2 लाख से कम"],
    documents: [
      { name: "Aadhaar Card", nameHi: "आधार कार्ड", icon: "🪪" },
      { name: "Bank Passbook", nameHi: "बैंक पासबुक", icon: "🏦" },
      { name: "Land Record", nameHi: "भूमि रिकॉर्ड", icon: "📄" },
    ],
    steps: ["Register on portal", "Verify Aadhaar", "Submit land details", "Receive benefit"],
    stepsHi: ["पोर्टल पर पंजीकरण करें", "आधार सत्यापित करें", "भूमि विवरण जमा करें", "लाभ प्राप्त करें"],
    benefit: "₹6,000 per year",
    benefitHi: "₹6,000 प्रति वर्ष",
  },
};

const defaultScheme = schemeData["pm-kisan"];

const SchemeDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const scheme = schemeData[id || ""] || defaultScheme;
  const isHi = language === "hi";

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="gradient-hero px-5 pb-6 pt-6">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-xl bg-primary-foreground/10 p-2">
            <ArrowLeft className="h-5 w-5 text-primary-foreground" />
          </button>
          <div className="flex-1">
            <span className="text-3xl">{scheme.icon}</span>
            <h1 className="mt-1 text-lg font-bold text-primary-foreground">
              {isHi ? scheme.nameHi : scheme.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-lg space-y-6 px-5 pt-6">
        {/* Benefit banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-success/10 p-4 text-center">
          <p className="text-sm text-muted-foreground">{t("benefit")}</p>
          <p className="text-2xl font-extrabold text-success">{isHi ? scheme.benefitHi : scheme.benefit}</p>
        </motion.div>

        {/* Overview */}
        <section>
          <h2 className="mb-2 text-base font-bold text-foreground">{t("overview")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">{isHi ? scheme.overviewHi : scheme.overview}</p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="mb-3 text-base font-bold text-foreground">{t("eligibility")}</h2>
          <div className="space-y-2">
            {(isHi ? scheme.eligibilityHi : scheme.eligibility).map((item: string, i: number) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section>
          <h2 className="mb-3 text-base font-bold text-foreground">{t("requiredDocs")}</h2>
          <div className="space-y-2">
            {scheme.documents.map((doc: any, i: number) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-card">
                <span className="text-2xl">{doc.icon}</span>
                <span className="text-sm font-medium text-foreground">{isHi ? doc.nameHi : doc.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="mb-3 text-base font-bold text-foreground">{t("howToApply")}</h2>
          <div className="space-y-3">
            {(isHi ? scheme.stepsHi : scheme.steps).map((step: string, i: number) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                  {i + 1}
                </div>
                <p className="pt-0.5 text-sm text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Button */}
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/apply")}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20"
        >
          {t("applyNow")} <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default SchemeDetailsPage;
