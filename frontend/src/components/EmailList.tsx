import { EmailListProps } from "../types/types";
import EmailCard from "./EmailCard";

const EmailList: React.FC<EmailListProps> = ({ emails, onSelect }) => {
  return (
    <div className="w-1/3 bg-white border-r p-4 h-[calc(100vh-4rem)] overflow-y-auto">
      {emails.map((email) => (
        <EmailCard key={email.id} email={email} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default EmailList;
