import { Separator } from "./ui/separator";
import { EmailContentProps } from "../types/types";

const EmailContent: React.FC<EmailContentProps> = ({ email }) => {
  if (!email) {
    return <p className="p-6 text-gray-500">Select an email to view details</p>;
  }

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold">{email.subject}</h2>

      <p className="text-gray-600">
        <span className="font-semibold">{email.sender}</span>{" "}
        <a href={`mailto:${email.replyTo}`} className="text-blue-500">
          {email.replyTo}
        </a>
        <span className="text-gray-400"> • {email.time}</span>
      </p>

      <Separator className="my-4" />

      <p className="text-gray-700 whitespace-pre-line">{email.content}</p>
    </div>
  );
};

export default EmailContent;
