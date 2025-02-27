import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { EmailCardProps } from "../types/types";

const EmailCard: React.FC<EmailCardProps> = ({ email, onSelect }) => {
  return (
    <Card
      className="p-4 mb-2 cursor-pointer hover:bg-gray-100 transition rounded-lg"
      onClick={() => onSelect(email)}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 bg-gray-300 text-gray-700 font-bold flex items-center justify-center rounded-full">
          {email.sender.split(" ").map((word) => word[0]).join("")}
        </Avatar>

        <div className="flex-1">
          <p className="font-semibold text-gray-900">{email.sender}</p>
          <p className="text-sm text-gray-700">{email.subject}</p>
          <p className="text-xs text-gray-500 truncate">{email.preview.length > 40 ? `${email.preview.slice(0, 40)}...` : email.preview}</p>
        </div>

        <span className="text-xs text-gray-400">{email.time.split(",")[1]}</span>
      </div>
    </Card>
  );
};

export default EmailCard;
