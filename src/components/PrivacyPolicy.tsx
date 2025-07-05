import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-neutral-900 mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none">
              <div className="text-neutral-600 mb-6 space-y-2">
                <p>
                  <strong>Effective Date:</strong> July 5, 2025
                </p>
                <p>
                  <strong>Extension Name:</strong> Intent
                </p>
                <p>
                  <strong>Version:</strong> 1.0
                </p>
                <p>
                  <strong>Developer:</strong> Intent LLC
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    Overview
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Intent is a Chrome extension that helps users be more
                    intentional about their social media usage by introducing
                    brief pauses before accessing supported sites. We are
                    committed to respecting your privacy and keeping your data
                    secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    Information We Collect
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Intent does not collect any personally identifiable
                    information such as your name, email address, or location.
                    The extension does not access or store your messages,
                    passwords, or financial information.
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    To function properly, Intent may temporarily store the
                    following non-personal data in your browser's local storage:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 leading-relaxed space-y-2 ml-4">
                    <li>
                      Whether you've acknowledged a popup on a supported site
                    </li>
                    <li>Your selected timer duration</li>
                    <li>Grayscale and popup state for that site</li>
                  </ul>
                  <p className="text-neutral-600 leading-relaxed mt-4">
                    This data is stored locally on your device and is
                    automatically cleared each session. No data is synced across
                    devices or sent to any external servers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    Permissions
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    Intent uses the following Chrome extension permissions:
                  </p>
                  <ul className="list-disc list-inside text-neutral-600 leading-relaxed space-y-2 ml-4">
                    <li>
                      <strong>activeTab</strong> – To detect when a supported
                      social media site is open and initiate a popup.
                    </li>
                    <li>
                      <strong>tabs</strong> – To manage per-site states and
                      close the tab when the user chooses to leave.
                    </li>
                    <li>
                      <strong>storage</strong> – To temporarily save user
                      preferences and timer settings.
                    </li>
                    <li>
                      <strong>host permissions</strong> – To function only on
                      supported social media sites (e.g., facebook.com, x.com,
                      linkedin.com).
                    </li>
                  </ul>
                  <p className="text-neutral-600 leading-relaxed mt-4">
                    These permissions are used solely to support the extension's
                    core functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    Data Sharing & Analytics
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We do not use any analytics or tracking tools in this
                    version.
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-4">
                    We do not share, sell, or monetize user data in any form.
                  </p>
                  <p className="text-neutral-600 leading-relaxed">
                    We do not transmit any data to external servers.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    User Rights
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    Since Intent does not store personal data or retain
                    information between sessions, there is no data to request,
                    review, or delete.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                    Future Changes
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    As the extension evolves, we may introduce new features or
                    use analytics tools to improve performance. Any changes to
                    this policy will be reflected on this page, and we'll update
                    the effective date accordingly.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
