# EmailJS Setup Guide - Contact Form to Gmail

## 📧 Overview

Your contact form is now configured to send emails directly to your Gmail inbox using EmailJS - a free service that doesn't require a backend server!

## 🚀 Setup Steps

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service (Gmail)

1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with your Gmail (`Aliakbaresmaeili98@gmail.com`)
5. Grant permissions
6. **Copy the Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `portfolio_contact`

**Subject:**

```
New Contact from {{from_name}} - {{subject}}
```

**Content (HTML):**

```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p><em>This message was sent from your portfolio contact form.</em></p>
```

4. Click **"Save"**
5. **Copy the Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `user_abc123xyz`)

### Step 5: Update Your Code

Open `src/app/services/email.service.ts` and replace these values:

```typescript
private readonly SERVICE_ID = 'service_abc123'; // Your Service ID from Step 2
private readonly TEMPLATE_ID = 'template_xyz789'; // Your Template ID from Step 3
private readonly PUBLIC_KEY = 'user_abc123xyz'; // Your Public Key from Step 4
```

## ✅ Testing

1. Run your portfolio: `npm start`
2. Go to the Contact section
3. Fill out the form and click "Send Message"
4. Check your Gmail inbox - you should receive the email!

## 🎨 Features

✅ **Success/Error Messages** - Visual feedback for users
✅ **Form Validation** - Required fields
✅ **Loading State** - "Sending..." indicator
✅ **Auto-reset** - Form clears after successful submission
✅ **No Backend Needed** - Pure frontend solution
✅ **Free Tier** - 200 emails/month on free plan

## 📊 EmailJS Free Tier Limits

- **200 emails per month**
- **2 email services**
- **2 email templates**
- **No credit card required**

## 🔒 Security Note

The Public Key is safe to expose in frontend code - it's designed for client-side use. Your Gmail password is never exposed.

## 🐛 Troubleshooting

**Issue:** "Failed to send message"

- Check that all IDs are correct in `email.service.ts`
- Verify Gmail service is connected in EmailJS dashboard
- Check browser console for detailed error messages

**Issue:** Email not received

- Check Gmail spam folder
- Verify template is saved correctly
- Test the template in EmailJS dashboard first

## 📝 Customization

### Change Recipient Email

In `email.service.ts`, line 30:

```typescript
to_email: 'your-new-email@gmail.com',
```

### Modify Email Template

Go to EmailJS dashboard → Email Templates → Edit your template

### Add More Fields

1. Add field to `formData` in `contact.component.ts`
2. Add to template in EmailJS dashboard
3. Add to `templateParams` in `email.service.ts`

## 🎉 You're Done!

Your contact form now sends emails directly to your Gmail inbox. Visitors can reach you without needing your email address visible on the page!
