import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const receiver = process.env.CONTACT_RECEIVER_EMAIL as string;

export const sendEmail = async (data: {
    name: string;
    email: string;
    message: string;
}) => {
    if (!receiver) {
        throw new Error("CONTACT_RECEIVER_EMAIL is not defined");
    }

    return resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: [receiver],
        subject: `Nuevo mensaje de ${data.name}`,
        replyTo: data.email,
        html: `
            <h2>Nuevo mensaje desde tu portfolio</h2>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p>${data.message}</p>
        `,
    });
};