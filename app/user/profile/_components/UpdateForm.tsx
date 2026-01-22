"use client";
import { useState } from "react";

export default function UpdateForm(
    { user }: { user: any }
) {
    return (
        <div>
            Logged in: {user.email}
        </div>
    );
}