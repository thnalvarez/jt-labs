"use client";
import {Button} from "@/components/ui/Button"; import {useToast} from "./ToastProvider"; import {getWhatsAppUrl} from "@/utils/whatsapp"; import type {ReactNode} from "react";
type Props={children:ReactNode;variant?:"primary"|"secondary"|"outline"|"ghost"|"link";size?:"sm"|"md"|"lg";fullWidth?:boolean;className?:string};
export function WhatsAppButton(props:Props){const {showToast}=useToast();const url=getWhatsAppUrl();if(url)return <Button {...props} href={url} target="_blank"/>;return <Button {...props} onClick={()=>showToast("El canal de WhatsApp estará disponible próximamente.")}/>}
