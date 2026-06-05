import type { Metadata } from 'next';
import type { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service | Smile Dental Clinic - Aundh, Pune',
  description:
    'Terms of Service for Smile Dental Clinic. Read about our appointment policies, cancellation terms, and patient responsibilities.',
};

export default function TermsPage(): ReactElement {
  return (
    <main className="terms-page">
      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="subtitle">
            Terms and conditions for using our dental services
          </p>
        </div>
      </section>

      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            <p className="last-updated">
              <strong>Last Updated:</strong> January 2026
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing our website at smiledentalclinic.in or using our
              dental services at our clinic in Aundh, Pune, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
            <p>
              These terms are governed by the laws of India and the jurisdiction
              of courts in Pune, Maharashtra.
            </p>

            <h2>2. Definitions</h2>
            <ul>
              <li>
                <strong>
                  &quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;:
                </strong>{' '}
                Refers to Smile Dental Clinic
              </li>
              <li>
                <strong>&quot;You,&quot; &quot;Patient&quot;:</strong> Refers to
                the person using our services
              </li>
              <li>
                <strong>&quot;Services&quot;:</strong> Dental treatments,
                consultations, and related services
              </li>
              <li>
                <strong>&quot;Clinic&quot;:</strong> Our dental clinic located
                at Aundh, Pune
              </li>
            </ul>

            <h2>3. Appointment Booking</h2>
            <h3>3.1 Booking Methods</h3>
            <p>You can book appointments through:</p>
            <ul>
              <li>WhatsApp: +91 96995 77641</li>
              <li>Phone call: +91 96995 77641</li>
              <li>Walk-in (subject to availability)</li>
            </ul>

            <h3>3.2 Appointment Confirmation</h3>
            <p>
              All appointments are confirmed via WhatsApp or SMS. An appointment
              is only considered confirmed when you receive a confirmation
              message with date, time, and doctor details.
            </p>

            <h3>3.3 Patient Information</h3>
            <p>You agree to provide:</p>
            <ul>
              <li>Accurate personal information (name, age, contact)</li>
              <li>Truthful medical history</li>
              <li>Current medications and allergies</li>
              <li>Valid ID proof for first visit</li>
            </ul>

            <h2>4. Cancellation and Rescheduling Policy</h2>
            <h3>4.1 Cancellation Notice</h3>
            <ul>
              <li>Free cancellation: 24 hours before appointment</li>
              <li>Late cancellation (less than 24 hours): Subject to fees</li>
              <li>No-show without notice: May affect future bookings</li>
            </ul>

            <h3>4.2 Rescheduling</h3>
            <p>
              You can reschedule appointments via WhatsApp or phone call. We
              recommend rescheduling at least 12 hours in advance to ensure
              availability.
            </p>

            <h3>4.3 Late Arrivals</h3>
            <p>
              If you arrive more than 15 minutes late, we may need to reschedule
              your appointment based on availability and doctor schedules.
            </p>

            <h2>5. Treatment and Payment Terms</h2>
            <h3>5.1 Treatment Plans</h3>
            <ul>
              <li>Treatment plans are provided after initial consultation</li>
              <li>Costs are estimated based on examination</li>
              <li>Final costs may vary based on treatment complexity</li>
              <li>We will inform you of any cost changes before proceeding</li>
            </ul>

            <h3>5.2 Payment Methods</h3>
            <p>We accept the following payment methods:</p>
            <ul>
              <li>Cash</li>
              <li>UPI (Google Pay, PhonePe, Paytm, BHIM)</li>
              <li>Credit/Debit Cards</li>
              <li>Insurance (where applicable)</li>
              <li>EMI options available on treatments above ₹10,000</li>
            </ul>

            <h3>5.3 Payment Timing</h3>
            <ul>
              <li>Consultation fees: Payable at visit</li>
              <li>
                Treatment fees: As per agreed schedule (may require advance
                payment)
              </li>
              <li>Full payment required before final crown/bridge placement</li>
            </ul>

            <h3>5.4 Refund Policy</h3>
            <p>Refunds are provided on a case-by-case basis:</p>
            <ul>
              <li>Advance payments: Refundable if treatment not started</li>
              <li>Partial treatments: Pro-rata refund for uncompleted work</li>
              <li>No refund for completed treatments</li>
              <li>Refund processing time: 7-14 business days</li>
            </ul>

            <h2>6. Insurance and Third-Party Payers</h2>
            <h3>6.1 Insurance Acceptance</h3>
            <p>We work with major insurance providers including:</p>
            <ul>
              <li>Star Health Insurance</li>
              <li>HDFC Ergo Health Insurance</li>
              <li>ICICI Lombard</li>
              <li>Max Bupa</li>
              <li>Aditya Birla Health Insurance</li>
              <li>Other TPA providers (subject to verification)</li>
            </ul>

            <h3>6.2 Insurance Process</h3>
            <ul>
              <li>Inform us about your insurance before treatment</li>
              <li>Provide policy details and ID card</li>
              <li>We will verify coverage before treatment</li>
              <li>Cashless facility available with select providers</li>
              <li>Reimbursement claims assistance provided</li>
            </ul>

            <h2>7. Patient Responsibilities</h2>
            <p>As a patient, you agree to:</p>
            <ul>
              <li>Arrive on time for appointments</li>
              <li>Follow pre and post-treatment instructions</li>
              <li>Attend follow-up appointments as scheduled</li>
              <li>Maintain oral hygiene as advised</li>
              <li>Inform us of any changes in health or medications</li>
              <li>Provide accurate contact information for follow-ups</li>
              <li>Respect clinic staff and other patients</li>
            </ul>

            <h2>8. Our Responsibilities</h2>
            <p>We commit to:</p>
            <ul>
              <li>
                Provide professional dental care following Indian Dental
                Association standards
              </li>
              <li>Maintain patient confidentiality as per law</li>
              <li>
                Use sterilized instruments and follow infection control
                protocols
              </li>
              <li>Explain treatment options and costs clearly</li>
              <li>Obtain informed consent before procedures</li>
              <li>Provide post-treatment care instructions</li>
              <li>Respond to patient queries within 24 hours</li>
            </ul>

            <h2>9. Limitations and Disclaimers</h2>
            <h3>9.1 Medical Limitations</h3>
            <p>
              Dental treatments have inherent limitations and risks. Results may
              vary based on individual patient factors including:
            </p>
            <ul>
              <li>Oral health condition</li>
              <li>Compliance with treatment plan</li>
              <li>Lifestyle habits (smoking, diet, etc.)</li>
              <li>Pre-existing medical conditions</li>
            </ul>

            <h3>9.2 No Guarantee</h3>
            <p>
              While we strive for the best outcomes, we cannot guarantee
              specific results from dental treatments. Success depends on
              multiple factors including patient cooperation and biological
              response.
            </p>

            <h3>9.3 Emergency Services</h3>
            <p>
              Our clinic provides emergency dental care during working hours
              (10:00 AM - 8:00 PM). For after-hours emergencies:
            </p>
            <ul>
              <li>Message us on WhatsApp for guidance</li>
              <li>
                We will direct you to the nearest emergency facility if needed
              </li>
              <li>Follow-up appointment scheduled for next working day</li>
            </ul>

            <h2>10. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and
              treatment information, is the property of Smile Dental Clinic.
              Unauthorized use, reproduction, or distribution is prohibited.
            </p>

            <h2>11. Website Use</h2>
            <h3>11.1 Prohibited Activities</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for unlawful purposes</li>
              <li>Attempt to access restricted areas</li>
              <li>Upload malicious software or viruses</li>
              <li>Scrape or copy our content without permission</li>
              <li>Impersonate other users or provide false information</li>
            </ul>

            <h3>11.2 Website Availability</h3>
            <p>
              We strive to maintain website availability but do not guarantee
              uninterrupted access. Maintenance and updates may cause temporary
              downtime.
            </p>

            <h2>12. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Service are governed by the laws of India. Any
              disputes arising from these terms shall be subject to the
              exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms of Service periodically. Changes will be
              posted on this page with an updated &quot;Last Updated&quot; date.
              Continued use of our services after changes constitutes acceptance
              of the new terms.
            </p>

            <h2>14. Contact Information</h2>
            <p>For questions about these Terms of Service:</p>
            <div className="contact-box">
              <p>
                <strong>Smile Dental Clinic</strong>
                <br />
                123, ITI Road, Aundh, Pune - 411007
                <br />
                WhatsApp: +91 96995 77641
                <br />
                Phone: +91 96995 77641
                <br />
                Email: contact@smiledentalclinic.in
                <br />
                Hours: Mon-Sun, 10:00 AM - 8:00 PM
              </p>
            </div>

            <div className="consent-notice">
              <p>
                <strong>Agreement:</strong> By using our website and dental
                services, you acknowledge that you have read, understood, and
                agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
