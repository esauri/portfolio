import { clsx } from "clsx";
import { Lora } from "next/font/google";
import "../styles/globals.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: "Erick Sauri",
  description:
    "Front End Developer. Hi there, I'm Erick, a front-end developer who works on web and mobile apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx([lora.variable, "bg-white text-black antialiased"])}
    >
      <body>{children}</body>
    </html>
  );
}
