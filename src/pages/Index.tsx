import { motion } from "framer-motion";
import { Search, Sprout, GraduationCap, Heart, Users, ArrowRight, Sparkles, FileUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickActions = [
    { label: t("findSchemes"), icon: Sparkles, color: "bg-primary", fg: "text-primary-foreground", path: "/schemes" },
    { label: t("uploadDocs"), icon: FileUp, color: "bg-secondary", fg: "text-secondary-foreground", path: "/documents" },
    { label: t("checkEligibility"), icon: CheckCircle, color: "bg-accent", fg: "text-accent-foreground", path: "/profile" },
  ];

  const categories = [
    { label: t("farmerSchemes"), icon: "🌾", emoji: true, path: "/schemes" },
    { label: t("studentSchemes"), icon: "🎓", emoji: true, path: "/schemes" },
    { label: t("womenSchemes"), icon: "👩", emoji: true, path: "/schemes" },
    { label: t("seniorSchemes"), icon: "🧓", emoji: true, path: "/schemes" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="gradient-hero px-5 pb-8 pt-6">
        <div className="mx-auto max-w-lg">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-primary-foreground">YOJNA AI</h1>
              <p className="text-xs font-medium text-primary-foreground/75">{t("tagline")}</p>
            </div>
            <LanguageSwitcher />
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder={t("searchPlaceholder")}
              className="w-full rounded-2xl border-0 bg-card py-4 pl-12 pr-4 text-sm shadow-lg outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-lg px-5">
        {/* Quick Actions */}
        <motion.div variants={container} initial="hidden" animate="show" className="-mt-4 grid grid-cols-3 gap-3">
          {quickActions.map((action) => (
            <motion.button
              key={action.label}
              variants={item}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(action.path)}
              className={`flex flex-col items-center gap-2 rounded-2xl ${action.color} p-4 shadow-card transition-shadow hover:shadow-card-hover`}
            >
              <action.icon className={`h-7 w-7 ${action.fg}`} />
              <span className={`text-center text-[11px] font-bold leading-tight ${action.fg}`}>
                {action.label}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8"
        >
          <h2 className="mb-4 text-lg font-bold text-foreground">📋 {t("schemes")}</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.label}
                variants={item}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(cat.path)}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-left text-sm font-semibold text-foreground">{cat.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <button
            onClick={() => navigate("/profile")}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-transform active:scale-[0.98]"
          >
            {t("createProfile")}
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
