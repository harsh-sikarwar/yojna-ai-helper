import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface SchemeCardProps {
  id: string;
  name: string;
  nameHi: string;
  benefit: string;
  benefitHi: string;
  eligibilityScore: number;
  icon: string;
}

const SchemeCard = ({ id, name, nameHi, benefit, benefitHi, eligibilityScore, icon }: SchemeCardProps) => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => navigate(`/scheme/${id}`)}
      className="cursor-pointer rounded-2xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
    >
      <div className="mb-3 flex items-start justify-between">
        <span className="text-3xl">{icon}</span>
        <div className="flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1">
          <CheckCircle2 className="h-3.5 w-3.5 text-success" />
          <span className="text-xs font-bold text-success">{eligibilityScore}%</span>
        </div>
      </div>
      <h3 className="mb-1 text-base font-bold text-foreground">{language === "hi" ? nameHi : name}</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        {t("benefit")}: {language === "hi" ? benefitHi : benefit}
      </p>
      <div className="flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition-transform active:scale-95">
          {t("applyNow")}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
