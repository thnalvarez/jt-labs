import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ subsets:["latin"], variable:"--font-geist" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = { metadataBase: siteUrl ? new URL(siteUrl) : undefined, title:"JT Labs | Soluciones digitales que impulsan negocios", description:"Creamos sitios web, e-commerce y sistemas de delivery modernos, rápidos y enfocados en conversión para negocios de Latinoamérica.", keywords:["desarrollo web","e-commerce","delivery","Lima","soluciones digitales"], robots:{index:true,follow:true}, openGraph:{type:"website",locale:"es_LA",siteName:"JT Labs",title:"JT Labs | Soluciones digitales que impulsan negocios",description:"Creamos sitios web, e-commerce y sistemas de delivery modernos, rápidos y enfocados en conversión."}, twitter:{card:"summary",title:"JT Labs",description:"Soluciones digitales que impulsan negocios."} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body className={`${geist.variable} font-sans`}>{children}</body></html>; }
