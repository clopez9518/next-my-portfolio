
import { NextResponse } from "next/server";
import { sendContactEmail } from "@/app/contact/sendContactEmail";
import { rateLimit } from "@/app/infrastructure/rate-limit/rateLimiter";

export async function POST(req: Request) {
    try {
        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

        if (!rateLimit(ip)) {
            return NextResponse.json(
                { ok: false, message: "Too many requests" },
                { status: 429 }
            );
        }

        const body = await req.json();

        await sendContactEmail(body);

        return NextResponse.json({ ok: true });

    } catch (error) {
        return NextResponse.json(
            { ok: false, message: "Internal error" },
            { status: 500 }
        );
    }
}