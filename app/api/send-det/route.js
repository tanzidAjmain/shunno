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

        const time = new Date().toLocaleDateString('en-US')

        const { 
                orderID,    
                name,
                email,
                number,
                country,
                address,
                divisions,
                district,
                state,
                apartment,
                orderName,
                review,
                comment,
                feedback
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
            text: `Order ID: ${orderID}, country: ${country}, email: ${email}, address: ${address}, divisions: ${divisions}, district: ${district}, state: ${state}, apartment: ${apartment}, cart: ${JSON.stringify(orderName)}, review: ${review}, comment: ${comment}, feedback: ${feedback} number: ${number}`,
        };

        const customerMailOption = {
             from:process.env.EMAIL_USER, 
             to:email,
             subject: "ORDER FROM SHUNNO/O/OSHIM",
             html:`
             <div style='display:flex, justify:center, items:center width:full, height:full'>
             <h1 >YOUR ORDER ${orderID} HAS BEEN RECIEVED!<h1/>
             <h2 > YOUR ORDER WILL BE SHIPPED SOON.<h2/>
             <p style="font-style:italic">Regards: SHUNNO/O/OSHIM ${time}<p/>
             <div/>
             `

        }

        await transporter.sendMail(mailOptions);

        await transporter.sendMail(customerMailOption)
        console.log('customer mail send')

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
