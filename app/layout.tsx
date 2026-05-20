import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Employee Onboarding Task Tracker",
  description: "Track new hire onboarding completion rates. Monitor which tasks new hires complete and identify bottlenecks causing delays."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="752cbbcf-0d92-4f22-8765-4d6830d9fac3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
