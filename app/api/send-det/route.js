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
                feedback,
                subTotal
             } = await request.json();

             console.log(orderName)

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
            text: `Order ID: ${orderID}, country: ${country}, email: ${email}, subtotal: ${subTotal} ,address: ${address}, divisions: ${divisions}, district: ${district}, state: ${state}, apartment: ${apartment}, cart: ${JSON.stringify(orderName)}, review: ${review}, comment: ${comment}, feedback: ${feedback} number: ${number}`,
        };

        const customerMailOption = {
             from:process.env.EMAIL_USER, 
             to:email,
             subject: "ORDER FROM SHUNNO/O/OSHIM",
             html:`
            <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body { margin: 0; padding: 0; background-color: #f8f9fa; font-family: Arial, Helvetica, sans-serif; }
          table { border-collapse: collapse; }
        </style>
      </head>
      <body>
        <!-- Background Wrapper Table -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8f9fa; padding: 40px 10px;">
          <tr>
            <td align="center">
              
              <!-- Main Email Container -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; padding: 35px 25px; text-align: center;">
                
                <!-- 1. Logo -->
                <tr>
                  <td align="center" style="padding-bottom: 25px;">
                    <img 
                      src="https://i.postimg.cc/0QN4Rs37/bw-logo.jpg" 
                      alt="Logo" 
                      width="160" 
                      style="display: block; width: 160px; max-width: 160px; height: auto;" 
                    />
                  </td>
                </tr>

                <!-- 2. Order Received Heading -->
                <tr>
                  <td align="center" style="padding-bottom: 20px;">
                    <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #111111; letter-spacing: 0.5px;">
                      YOUR ORDER #${orderID} HAS BEEN RECEIVED!
                    </h1>
                  </td>
                </tr>

                <!-- Divider Line -->
                <tr>
                  <td align="center" style="padding-bottom: 25px;">
                    <div style="height: 1px; background-color: #eeeeee; width: 80%;"></div>
                  </td>
                </tr>

                <!-- 3. Items Heading & Order Name -->
                <tr>
                  <td align="center" style="padding-bottom: 25px;">
                    <p style="margin: 0 0 10px 0; font-size: 13px; font-weight: 600; color: #777777; text-transform: uppercase; letter-spacing: 1px;">
                      WHAT IS HEADING UP TO YOU:
                    </p>
                    <div style="background-color: #f8f9fa; border-radius: 6px; padding: 12px 20px; display: inline-block;">
                      <p style="margin: 0; font-size: 15px; font-weight: 600; color: #222222;">
                        &gt; ${orderName.join(", ")}
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- 4. Shipping Notice -->
                <tr>
                  <td align="center" style="padding-bottom: 30px;">
                    <h2 style="margin: 0; font-size: 13px; font-weight: 500; color: #555555; text-transform: uppercase; letter-spacing: 0.5px;">
                      YOUR ORDER WILL BE SHIPPED SOON.
                    </h2>
                  </td>
                </tr>

                <!-- Footer / Regards -->
                <tr>
                  <td align="center" style="border-top: 1px solid #eeeeee; padding-top: 20px;">
                    <p style="margin: 0; font-style: italic; font-size: 12px; color: #888888;">
                      Regards: SHUNNO/O/OSHIM
                    </p>
                    <p style="margin: 4px 0 0 4px; font-size: 11px; color: #aaaaaa;">
                      ${time}
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>
      </body>
    </html>
             `

        }

        await transporter.sendMail(mailOptions);

        await transporter.sendMail(customerMailOption)

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
