import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const GMAIL_USER = 'amitdevrani9@gmail.com';
    const GMAIL_APP_PASSWORD = 'nbfk oqca spix wcdn';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: GMAIL_USER,
        pass: GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: `"SANPEC Contact Form" <${GMAIL_USER}>`,
      to: 'amitdevrani9@gmail.com',
      replyTo: `"<${email}>`,
      subject: `🔔${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #ffffff; font-family: Arial, sans-serif;">
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff;">
            <tr>
              <td style="padding: 30px 20px;">
                
                <!-- Main Container - Full Width -->
                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 900px; margin: 0 auto; background-color: #ffffff;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 0 0 30px 0; border-bottom: 3px solid #CD091B;">
                      <h1 style="margin: 0; font-size: 32px; font-weight: bold; color: #101631; letter-spacing: 1px;">
                        SANPEC EXCELLENCE
                      </h1>
                     
                    </td>
                  </tr>

                  <!-- Spacing -->
                  <tr><td style="height: 40px;"></td></tr>

                  <!-- Alert Badge -->
                  <tr>
                    <td>
                      <div style="display: inline-block; background-color: #CD091B; color: white; padding: 8px 20px; border-radius: 5px; font-size: 14px; font-weight: bold; margin-bottom: 30px;">
                        ⚡ NEW INQUIRY
                      </div>
                    </td>
                  </tr>

                  <!-- Spacing -->
                  <tr><td style="height: 20px;"></td></tr>

                  <!-- Contact Details -->
                  <tr>
                    <td>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 30px; border-radius: 8px; border-left: 4px solid #CD091B;">
                        <tr>
                          <td>
                            <h2 style="margin: 0 0 20px 0; font-size: 18px; color: #101631; font-weight: bold; text-transform: uppercase;">
                              Contact Information
                            </h2>
                            
                            <table width="100%" cellpadding="0" cellspacing="0">
                              <!-- Name -->
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                  <table>
                                    <tr>
                                      <td style="width: 120px; vertical-align: top;">
                                        <strong style="color: #666666; font-size: 14px;">Name:</strong>
                                      </td>
                                      <td>
                                        <span style="color: #101631; font-size: 16px; font-weight: 600;">${name}</span>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>

                              <!-- Email -->
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                  <table>
                                    <tr>
                                      <td style="width: 120px; vertical-align: top;">
                                        <strong style="color: #666666; font-size: 14px;">Email:</strong>
                                      </td>
                                      <td>
                                        <a href="mailto:${email}" style="color: #CD091B; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>

                              ${phone ? `
                              <!-- Phone -->
                              <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                                  <table>
                                    <tr>
                                      <td style="width: 120px; vertical-align: top;">
                                        <strong style="color: #666666; font-size: 14px;">Phone:</strong>
                                      </td>
                                      <td>
                                        <a href="tel:${phone}" style="color: #101631; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              ` : ''}

                              <!-- Subject -->
                              <tr>
                                <td style="padding: 12px 0;">
                                  <table>
                                    <tr>
                                      <td style="width: 120px; vertical-align: top;">
                                        <strong style="color: #666666; font-size: 14px;">Subject:</strong>
                                      </td>
                                      <td>
                                        <span style="color: #101631; font-size: 16px; font-weight: 600;">${subject}</span>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>

                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Spacing -->
                  <tr><td style="height: 30px;"></td></tr>

                  <!-- Message Section -->
                  <tr>
                    <td>
                      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border: 2px solid #e0e0e0; border-radius: 8px;">
                        <tr>
                          <td style="background-color: #f8f9fa; padding: 15px 30px; border-bottom: 2px solid #e0e0e0;">
                            <h3 style="margin: 0; font-size: 16px; color: #101631; font-weight: bold; text-transform: uppercase;">
                              Message
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 30px;">
                            <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8;">
                              ${message.replace(/\n/g, '<br>')}
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Spacing -->
                  <tr><td style="height: 40px;"></td></tr>

                  <!-- Reply Button -->
                  <tr>
                    <td align="center">
                      <table cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="background-color: #CD091B; border-radius: 5px; text-align: center;">
                            <a href="mailto:${email}" style="display: inline-block; padding: 14px 40px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: bold;">
                              Reply to ${name}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Spacing -->
                  <tr><td style="height: 40px;"></td></tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 0; border-top: 2px solid #e0e0e0; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #101631; font-size: 18px; font-weight: bold; letter-spacing: 1px;">
                        SANPEC
                      </p>
                      <p style="margin: 0; color: #999999; font-size: 13px;">
                        This email was sent from your website contact form
                      </p>
                      <p style="margin: 8px 0 0 0; color: #bbbbbb; font-size: 12px;">
                        © ${new Date().getFullYear()} SANPEC. All rights reserved.
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
    });

    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error('Email Error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}