import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Twitter,
  Sparkles,
  Instagram,
  ShieldCheck,
  Database,
  Code2,
  TestTube2,
  ClipboardCheck,
  FlaskConical,
  Bug,
  CheckCheck,
  Workflow,
  Search,
  FileSearch,
  Scale,
  Chrome,
} from "lucide-react";

import {
  SiJavascript,
  SiFigma,
  SiBootstrap,
  SiPython,
  SiPostman,
  SiCypress,
  SiSelenium,
  SiMysql,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiTailwindcss,
  SiPhp,
  SiSqlite,
  SiPytest,
  SiJira,
  SiInsomnia,
  SiGit,
  SiGithubactions,
  SiQase,
  SiMocha,
  SiJson,
} from "react-icons/si";

import { FaFileExcel, FaWpforms } from "react-icons/fa";

export const TechIcons: Record<string, React.ElementType> = {
  // ==========================
  // Programming Languages
  // ==========================
  JavaScript: SiJavascript,
  Python: SiPython,
  PHP: SiPhp,

  // ==========================
  // Frameworks
  // ==========================
  Laravel: SiLaravel,
  Django: SiDjango,
  Flask: SiFlask,
  Bootstrap: SiBootstrap,
  Tailwind: SiTailwindcss,
  JSON: SiJson,

  // ==========================
  // Database
  // ==========================
  MySQL: SiMysql,
  SQLite: SiSqlite,

  // ==========================
  // QA Tools
  // ==========================
  Postman: SiPostman,
  Selenium: SiSelenium,
  Cypress: SiCypress,
  Pytest: SiPytest,
  Jira: SiJira,
  Insomnia: SiInsomnia,
  Github: SiGit,
  Qase: SiQase,
  "GitHub Actions": SiGithubactions,
  Mochawesome: SiMocha,

  // ==========================
  // Testing Methods
  // ==========================
  "Manual Testing": TestTube2,
  "Functional Testing": ClipboardCheck,
  "API Testing": FlaskConical,
  "Black-box Testing": Bug,
  "User Acceptance Testing": CheckCheck,
  UAT: CheckCheck,
  "Regression Testing": Workflow,
  "Exploratory Testing": Search,
  "Test Case Design": FileSearch,
  "Bug Reporting": Bug,
  "Test Documentation": FileSearch,
  "Quality Assurance": ShieldCheck,
  "Software Testing": ShieldCheck,

  // ==========================
  // UI/UX
  // ==========================
  Figma: SiFigma,

  // ==========================
  // General
  // ==========================
  Database: Database,
  Development: Code2,
  Sparkles: Sparkles,
  "Likert Scale": Scale,

  // ==========================
  // Office Tools
  // ==========================
  "Microsoft Excel": FaFileExcel,
  "Google Forms": FaWpforms,
  "Google Chrome": Chrome,

  // ==========================
  // Social
  // ==========================
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Resume: FileText,
  Twitter: Twitter,
  Instagram: Instagram,
};
