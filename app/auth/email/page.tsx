"use client"
import EmailForm from "@/components/EmailForm";
import { Suspense } from "react";

export default function EmailPage() {
    return (
        <Suspense>
            <EmailForm />
        </Suspense>
    )
}