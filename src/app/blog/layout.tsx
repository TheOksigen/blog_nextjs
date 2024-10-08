import Breadcrumb from "@/compenents/clientUi/Breadcrumb";
import Header from "@/compenents/clientUi/Header";
import { Inter } from "next/font/google";
import { Metadata } from "next/types";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blog Site (task)",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <Breadcrumb/>
                {children}
            </body>
        </html>
    );
}
