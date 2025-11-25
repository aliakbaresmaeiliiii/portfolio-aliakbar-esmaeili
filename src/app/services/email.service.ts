import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: "root",
})
export class EmailService {
  // EmailJS Configuration
  // TODO: Replace these with your actual EmailJS credentials
  private readonly SERVICE_ID = "service_af4fvul"; // Get from EmailJS dashboard
  private readonly TEMPLATE_ID = "template_4bde5np"; // Get from EmailJS dashboard
  private readonly PUBLIC_KEY = "KMMhL2FGD7q863z7R"; // Get from EmailJS dashboard

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.PUBLIC_KEY);
  }

  async sendEmail(data: EmailData): Promise<boolean> {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_email: "Aliakbaresmaeili98@gmail.com", // Your Gmail address
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      return true;
    } catch (error) {
      console.error("Failed to send email:", error);
      return false;
    }
  }
}
