import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions – Ananda Utsav 2026",
  description:
    "Terms and Conditions and Event Guidelines for registration and attendance at Ananda Utsav 2026.",
};

const CONTACTS = [
  { icon: "fab fa-whatsapp", iconColor: "#4ade80", name: "Sakha Vishnu Das", phone: "9999369330" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Arjun Sakha Das", phone: "9999033827" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Anandita Radhika Devi Dasi", phone: "7291028784" },
];

export default function TermsAndConditionsPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#0b1930", color: "#f9fafb" }}>
      {/* Top decorative arch */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", pointerEvents: "none", zIndex: 1, opacity: 0.35 }}>
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none" style={{ width: "100%", height: 90 }}>
          <path d="M0,0 C360,90 1080,90 1440,0 L1440,0 L0,0Z" fill="#f59e0b" />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto", padding: "48px 20px 64px" }}>
        {/* Navigation Bar */}
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 12,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              color: "#fde68a",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "all 0.2s",
            }}
          >
            <i className="fas fa-arrow-left" /> Back to Registration
          </Link>

          <Link
            href="/privacy-policy"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "#f59e0b",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            View Privacy Policy <i className="fas fa-external-link-alt" style={{ fontSize: 11 }} />
          </Link>
        </header>

        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              border: "1.5px solid #f59e0b",
              color: "#fde68a",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Ananda Utsav 2026
          </div>
          <h1 className="font-cinzel gold-gradient" style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 800, marginBottom: 12 }}>
            Terms &amp; Conditions
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            Last Updated: October 2026 &bull; Rules, Registration Guidelines &amp; Refund Policy
          </p>
          <div className="gold-divider" style={{ maxWidth: 220, margin: "20px auto 0" }} />
        </div>

        {/* Content Body */}
        <div className="card-glass" style={{ borderRadius: 20, padding: "clamp(24px, 5vw, 44px)", lineHeight: 1.7, fontSize: "0.95rem" }}>
          {/* Section 1 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-file-contract" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              1. Acceptance of Terms
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              By accessing, browsing, or completing a registration on this website for <strong>Ananda Utsav 2026</strong> (&ldquo;Formula for the Happy Family&rdquo;),
              you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions and our Privacy Policy.
              If you do not agree with any part of these terms, please do not proceed with the registration.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-calendar-check" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              2. Event Schedule &amp; Venue
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              The event details are as follows:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 6 }}>
              <li><strong>Event Name:</strong> Ananda Utsav 2026 – Formula for the Happy Family</li>
              <li><strong>Presiding Dignitary:</strong> In the Divine Presence of HH Radhey Shyamanand Swami Maharaj</li>
              <li><strong>Date:</strong> 25 December 2026</li>
              <li><strong>Time:</strong> 4:00 PM – 9:00 PM IST</li>
              <li><strong>Venue:</strong> Golden Rivaah Banquet Hall, CS-19, Opposite Shipra Riviera, Gyan Khand II, Indirapuram, Ghaziabad</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-ticket-alt" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              3. Registration, Inclusions &amp; Pricing
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              The registration contribution for Ananda Utsav 2026 is <strong>₹200 per attendee</strong>.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Each valid registration pass includes:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Admittance to the Inspirational Spiritual Seminar</li>
              <li>Participation in the Exciting Debate &amp; Interactive Quiz</li>
              <li>Attendance at the Foot-tapping Rock Kirtan</li>
              <li>Drama and Cultural Dance Performances</li>
              <li>Full Delicious Dinner Prasadam at the conclusion of the event</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-credit-card" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              4. Payment Policy &amp; Methods
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Online payments are processed securely through <strong>Razorpay</strong>. Registrants may pay using UPI (Google Pay, PhonePe, Paytm, etc.),
              Debit/Credit Cards, or Net Banking.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Registration is finalized only after successful payment verification by Razorpay. An automated Payment ID and confirmation
              screen will appear upon success. Please save or screenshot your Payment ID for reference at the venue check-in.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-undo-alt" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              5. Cancellation &amp; Refund Policy
            </h2>
            <div style={{ background: "rgba(234, 88, 12, 0.1)", border: "1px solid rgba(234, 88, 12, 0.3)", borderRadius: 12, padding: "16px", marginBottom: 12 }}>
              <p style={{ color: "#fde68a", fontWeight: 600, marginBottom: 6 }}>
                <i className="fas fa-info-circle" style={{ marginRight: 8 }} />
                Important Notice regarding Event Passes:
              </p>
              <p style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "0.9rem" }}>
                Because hall seating capacity and dinner prasadam arrangements are committed in advance with venue catering partners,
                <strong> registration passes are strictly non-refundable and non-cancellable</strong> once booked.
              </p>
            </div>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Pass Transferability:</strong> If you are unable to attend in person, you may transfer your registration pass to a family member or friend by informing our coordinators in advance with the original Payment ID.
              </li>
              <li>
                <strong>Duplicate / Erroneous Deductions:</strong> In the event that your bank account or card is debited multiple times due to a network glitch during checkout, any verified duplicate excess deduction will be refunded to your original payment method within 5 to 7 business days via Razorpay.
              </li>
              <li>
                <strong>Event Rescheduling or Cancellation:</strong> If the event is rescheduled or postponed due to circumstances beyond organizer control (e.g., severe weather or government directives), your registration will automatically remain valid for the rescheduled date.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-id-badge" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              6. Venue Entry &amp; Verification
            </h2>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Attendees must check in at the reception registration desk by providing their registered mobile number, name, or Razorpay Payment ID.</li>
              <li>Gates open at 3:30 PM. We request all attendees to arrive punctually by 4:00 PM to ensure smooth seating and avoid missing the keynote seminar.</li>
              <li>Entry badges or wristbands issued at registration must be retained throughout the event duration.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-hands" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              7. Code of Conduct &amp; Venue Decorum
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Ananda Utsav is a sacred, family-oriented cultural and spiritual celebration. All attendees are expected to maintain dignified decorum:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Prohibited Items:</strong> Alcoholic beverages, smoking, e-cigarettes, tobacco, non-vegetarian food, and illegal substances are strictly forbidden on the entire venue premises.
              </li>
              <li>
                <strong>Respectful Conduct:</strong> Disruptive behavior, harassment, or disrespect towards speakers, swamis, performers, volunteers, or fellow guests will not be tolerated. Organizers reserve the right to escort disruptive individuals off the premises.
              </li>
              <li>
                <strong>Mobile Devices:</strong> Please keep phones in silent mode during the keynote seminar and performances.
              </li>
            </ul>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-camera" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              8. Media, Photography &amp; Recordings
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Official photographers and videographers will document Ananda Utsav 2026. By attending, you grant permission for
              photographs and video footage containing your likeness to be used for non-commercial spiritual outreach, devotional broadcasts,
              and future event archives by the organizers.
            </p>
          </section>

          {/* Section 9 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-gavel" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              9. Limitation of Liability &amp; Jurisdiction
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Attendees are solely responsible for their personal belongings, valuables, and vehicle parking. The organizers, volunteers,
              and venue management shall not be held liable for loss, theft, damage, or injuries sustained during the event.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              These terms shall be governed by and construed in accordance with the laws of India, and any disputes shall be subject
              to the exclusive jurisdiction of the competent courts in Ghaziabad, Uttar Pradesh.
            </p>
          </section>

          {/* Section 10 */}
          <section style={{ marginBottom: 10 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-phone-volume" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              10. Help &amp; Contact Information
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 16 }}>
              If you have any questions regarding these Terms &amp; Conditions or require assistance with your registration pass, please contact:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              {CONTACTS.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(245, 158, 11, 0.25)",
                    borderRadius: 12,
                    padding: "12px 16px",
                  }}
                >
                  <p style={{ fontWeight: 600, color: "white", fontSize: "0.875rem", marginBottom: 2 }}>{c.name}</p>
                  <a href={`tel:${c.phone}`} style={{ color: "#f59e0b", fontWeight: 700, fontSize: "0.95rem" }}>
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 18, fontSize: "0.85rem", color: "#9ca3af" }}>
              <strong>Venue:</strong> Golden Rivaah Banquet Hall, CS-19, Opposite Shipra Riviera, Gyan Khand II, Indirapuram, Ghaziabad.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer style={{ marginTop: 48, paddingTop: 28, borderTop: "1px solid rgba(245, 158, 11, 0.3)", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, flexWrap: "wrap", fontSize: "0.85rem", marginBottom: 18 }}>
            <Link href="/" style={{ color: "#fde68a", transition: "color 0.2s" }}>
              Home
            </Link>
            <span style={{ color: "rgba(245, 158, 11, 0.4)" }}>•</span>
            <Link href="/terms-and-conditions" style={{ color: "#f59e0b", fontWeight: 700 }}>
              Terms &amp; Conditions
            </Link>
            <span style={{ color: "rgba(245, 158, 11, 0.4)" }}>•</span>
            <Link href="/privacy-policy" style={{ color: "#fde68a", transition: "color 0.2s" }}>
              Privacy Policy
            </Link>
          </div>
          <p style={{ fontSize: "0.78rem", color: "rgba(255, 255, 255, 0.4)" }}>
            &copy; 2026 Ananda Utsav &middot; ISKCON &middot; All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
