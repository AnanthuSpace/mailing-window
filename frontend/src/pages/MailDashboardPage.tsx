import { useState } from "react";
import EmailList from "../components/EmailList";
import EmailContent from "../components/EmailContent";
import { Email } from "../types/types";
import emailData from "../types/Data";

const MailDashboardPage: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <div className="flex h-full">
      <EmailList emails={emailData} onSelect={setSelectedEmail} />

      <div className="flex-1 p-6 border-l">
        {selectedEmail ? (
          <EmailContent email={selectedEmail} />
        ) : (
          <p className="text-gray-500">Select an email to view</p>
        )}
      </div>
    </div>
  );
};

export default MailDashboardPage;
