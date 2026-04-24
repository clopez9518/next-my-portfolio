import { ContactEntity } from "../domain/contact.entity";
import { sendEmail } from "../infrastructure/email/resend.service";

export const sendContactEmail = async (data: ContactEntity) => {
    if (!data.name || !data.email || !data.message) {
        throw new Error("Invalid input");
    }

    return await sendEmail(data);
};