import { Navigation } from "../components/nav";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
