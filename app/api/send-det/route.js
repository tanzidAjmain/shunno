import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request) {
    try{
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
            console.error("Missing EMAIL_USER or EMAIL_PASS environment variable");
            return NextResponse.json(
                { error: "Email service is not configured", code: "EMAIL_ENV_MISSING" },
                { status: 500 }
            );
        }

        const { name,
                email,
                country,
                address,
                divisions,
                district,
                state,
                apartment,
                orderName
             } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New order from ${name}`,
            text: `country: ${country}, email: ${email}, address: ${address}, divisions: ${divisions}, district: ${district}, state: ${state}, apartment: ${apartment}, cart: ${JSON.stringify(orderName)}`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", {
            message: error.message,
            code: error.code,
            command: error.command,
            response: error.response,
        });
        return NextResponse.json(
            { error: "Failed to send email", code: error.code || "EMAIL_SEND_FAILED" },
            { status: 500 }
        );
    }
}
