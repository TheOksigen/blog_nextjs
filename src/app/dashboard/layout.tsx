import Sidebar from "@/compenents/dashboardUi/Sidebarr";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Site Dashboard (task)",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className={`"h-full" ${inter.className}`}>
        <Sidebar />
        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
