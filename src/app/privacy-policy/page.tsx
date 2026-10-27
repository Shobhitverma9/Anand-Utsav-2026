import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy – Ananda Utsav 2026",
  description:
    "Privacy Policy for Ananda Utsav 2026 registration. Learn how we collect, use, and protect your personal information.",
};

const CONTACTS = [
  { icon: "fab fa-whatsapp", iconColor: "#4ade80", name: "Sakha Vishnu Das", phone: "9999369330" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Arjun Sakha Das", phone: "9999033827" },
  { icon: "fas fa-phone-alt", iconColor: "#f59e0b", name: "Anandita Radhika Devi Dasi", phone: "7291028784" },
];

export default function PrivacyPolicyPage() {
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
            href="/terms-and-conditions"
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
            View Terms &amp; Conditions <i className="fas fa-external-link-alt" style={{ fontSize: 11 }} />
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
            Privacy Policy
          </h1>
          <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
            Last Updated: October 2026 &bull; Effective for Ananda Utsav 2026 Registration
          </p>
          <div className="gold-divider" style={{ maxWidth: 220, margin: "20px auto 0" }} />
        </div>

        {/* Content Body */}
        <div className="card-glass" style={{ borderRadius: 20, padding: "clamp(24px, 5vw, 44px)", lineHeight: 1.7, fontSize: "0.95rem" }}>
          {/* Section 1 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-shield-alt" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              1. Introduction
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Welcome to <strong>Ananda Utsav 2026</strong> (&ldquo;Formula for the Happy Family&rdquo;), organized by ISKCON.
              We respect your privacy and are committed to protecting the personal data you share with us when registering
              for the event through our website.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              This Privacy Policy explains what information we collect, why we collect it, how it is handled and secured,
              and your rights regarding your data.
            </p>
          </section>

          {/* Section 2 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-clipboard-list" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              2. Information We Collect
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              When you register for Ananda Utsav 2026, we collect only the necessary details required to administer
              your registration, entry passes, and event communications:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>
                <strong>Personal Identification Information:</strong> Full Name, Email Address, and 10-digit Contact (Mobile) Number.
              </li>
              <li>
                <strong>Referral Information:</strong> Name of the coordinator or friend who referred you (&ldquo;Registered By&rdquo;), if provided.
              </li>
              <li>
                <strong>Transaction &amp; Payment Data:</strong> Payment Order ID, Payment ID, payment timestamp, and transaction status provided by our payment gateway (Razorpay). <em>Note: We never collect or store your debit/credit card numbers, CVVs, net banking credentials, or UPI PINs.</em>
              </li>
              <li>
                <strong>Technical Access Logs:</strong> IP address, device type, and browser details recorded automatically for site stability, analytics, and security prevention against malicious activities.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-bullseye" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              3. How We Use Your Information
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              We utilize collected information solely for genuine event management purposes:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Processing and verifying your ₹200 event registration and dinner reservation.</li>
              <li>Issuing your payment confirmation, ticket receipt, and registration entry record.</li>
              <li>Verifying attendee identities at the Golden Rivaah Banquet Hall reception on 25 December 2026.</li>
              <li>Transmitting vital event updates, schedule alerts, or parking instructions via WhatsApp, SMS, or Email.</li>
              <li>Maintaining accurate attendee lists in our secure event database and Google Sheets for logistics and prasadam (dinner) catering arrangements.</li>
              <li>Providing dedicated attendee support regarding booking inquiries or payment verification issues.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-lock" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              4. Payment Processing &amp; Security (Razorpay)
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              Online payments are processed through <strong>Razorpay Software Private Limited</strong>, an authorized,
              PCI-DSS Level 1 compliant payment gateway.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              All payment transactions are encrypted using industry-standard 256-bit Secure Socket Layer (SSL) encryption.
              Your financial credentials (card details, UPI PINs, banking passwords) are processed directly on Razorpay&apos;s
              secure servers and are never accessible to or stored by Ananda Utsav organizers.
            </p>
          </section>

          {/* Section 5 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-user-secret" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              5. Data Protection &amp; Third-Party Disclosure
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              <strong>We do not sell, rent, lease, or trade your personal information to any third parties or advertisers.</strong>
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Data is shared strictly with authorized organizers and technical service providers (Razorpay payment gateway,
              Google Cloud API services) exclusively for fulfilling registration, payments, and event communications. We may
              disclose information if required to do so by applicable Indian law or law enforcement authorities.
            </p>
          </section>

          {/* Section 6 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-database" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              6. Data Retention
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              We retain registration information only as long as necessary to successfully conduct Ananda Utsav 2026,
              comply with statutory financial/accounting obligations for payment auditing, and resolve any registration
              disputes. Thereafter, records are safely archived or removed in accordance with our organizational standards.
            </p>
          </section>

          {/* Section 7 */}
          <section style={{ marginBottom: 32 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-user-check" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              7. Your Rights
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 10 }}>
              As a registrant, you possess the right to:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: 24, color: "rgba(255, 255, 255, 0.85)", display: "flex", flexDirection: "column", gap: 8 }}>
              <li>Confirm whether your registration details and payment have been successfully recorded.</li>
              <li>Request corrections or updates to your contact details (phone number, email address, or name spelling).</li>
              <li>Opt-out of future non-essential announcements or promotional reminders.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section style={{ marginBottom: 10 }}>
            <h2 className="font-cinzel" style={{ color: "#fde68a", fontSize: "1.25rem", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
              <i className="fas fa-envelope-open-text" style={{ color: "#f59e0b", fontSize: "1.1rem" }} />
              8. Contact Us &amp; Grievances
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: 16 }}>
              For any queries, corrections, or concerns related to your privacy or registration records, please contact our
              coordinating team:
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
              <strong>Event Venue:</strong> Golden Rivaah Banquet Hall, CS-19, Opposite Shipra Riviera, Gyan Khand II, Indirapuram, Ghaziabad.
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
            <Link href="/terms-and-conditions" style={{ color: "#fde68a", transition: "color 0.2s" }}>
              Terms &amp; Conditions
            </Link>
            <span style={{ color: "rgba(245, 158, 11, 0.4)" }}>•</span>
            <Link href="/privacy-policy" style={{ color: "#f59e0b", fontWeight: 700 }}>
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
