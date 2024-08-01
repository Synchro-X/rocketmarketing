


import { HeroSection } from "./components/sections/herosection";
import { Section2 } from "./components/sections/section2";
import { Section3 } from "./components/sections/section3";
import { Section4 } from "./components/sections/section4";
import { Section5 } from "./components/sections/section5";
import { Section7 } from "./components/sections/section7";
import { Section6 } from "./components/sections/section6";
import { GridLayers } from "./components/views/gridlayers";
import AOSWrapper from "./components/aoswrapper";
import { FormWrapper } from "./components/formwrapper";
import { Form } from "./components/views/form";


export const metadata = {
  title: "rocketmarketing",
  description:
    "",
  applicationName: "rocketmarketing",
  keywords: ["marketing", "rocket", "design", "website"],
  icons: {
    icon: "",
    shortcut: "",
    apple: "",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "",
    },
  },
  openGraph: {
    title: "rocketmarketing",
    description: "",
    url: "",
    siteName: "",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "app",
    title: "rocketmarketing",
    description: "",
    images: {
      url: "",
      alt: "rocket image",
    },
    app: {
      name: "rocketmarketing",
      id: {
        iphone: "",
      },
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "",
  },
};


export default function Home() {



  return (
    <>
      <FormWrapper>
          <Form />
      </FormWrapper>
      <HeroSection />
      <main className="relative md:bg-transparent bg-[#12141D]">
        <AOSWrapper>
          <GridLayers />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section7 />
          <Section6 />
        </AOSWrapper>
      </main>
    </>
  );
}
