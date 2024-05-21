import * as React from "react"
import GuestRoute from "@/routes/guestRoute"

export default function AuthLayout({ children }) {
    return (
        <GuestRoute>
            <div className="h-screen w-screen bg-color_four p-5">
                {children}
            </div>
        </GuestRoute>
    )
}
