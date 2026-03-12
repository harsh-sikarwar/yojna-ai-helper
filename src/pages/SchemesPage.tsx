import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import SchemeCard from "@/components/SchemeCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const schemes = [
  { id: "pm-kisan", name: "PM Kisan Samman Nidhi", nameHi: "पीएम किसान सम्मान निधि", benefit: "₹6,000 per year", benefitHi: "₹6,000 प्रति वर्ष", eligibilityScore: 92, icon: "🌾" },
  { id: "pm-awas", name: "PM Awas Yojana", nameHi: "पीएम आवास योजना", benefit: "₹1.2 Lakh for housing", benefitHi: "₹1.2 लाख आवास हेतु", eligibilityScore: 85, icon: "🏠" },
  { id: "ayushman", name: "Ayushman Bharat", nameHi: "आयुष्मान भारत", benefit: "₹5 Lakh health cover", benefitHi: "₹5 लाख स्वास्थ्य बीमा", eligibilityScore: 78, icon: "🏥" },
  { id: "scholarship", name: "National Scholarship", nameHi: "राष्ट्रीय छात्रवृत्ति", benefit: "₹50,000 per year", benefitHi: "₹50,000 प्रति वर्ष", eligibilityScore: 70, icon: "🎓" },
  { id: "mudra", name: "PM Mudra Yojana", nameHi: "पीएम मुद्रा योजना", benefit: "Loan up to ₹10 Lakh", benefitHi: "₹10 लाख तक ऋण", eligibilityScore: 65, icon: "💰" },
];

const SchemesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="border-b border-border bg-card px-5 pb-4 pt-6">
        <div className="mx-auto flex max-w-lg items-center justify-between">
          <button onClick={() => navigate("/")} className="rounded-xl p-2 hover:bg-muted">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">{t("eligibleSchemes")}</h1>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="mx-auto max-w-lg px-5 pt-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-5 text-center text-sm text-muted-foreground"
        >
          🎉 <strong>{schemes.length}</strong> {t("schemesFound")}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-4"
        >
          {schemes.map((scheme) => (
            <motion.div key={scheme.id} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}>
              <SchemeCard {...scheme} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SchemesPage;
