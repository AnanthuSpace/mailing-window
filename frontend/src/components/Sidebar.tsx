import { Separator } from "./ui/separator";
import { SidebarProps } from "../types/types";
import { Button } from "./ui/button";

const Sidebar: React.FC<SidebarProps> = ({ onCompose }) => {
  return (
    <aside className="bg-gray-100 p-4 w-64">
      <Button className="w-full mb-4" onClick={onCompose}>
        Refresh
      </Button>
      <Separator />
      <nav className="mt-4 space-y-2">
        {["Inbox", "Sent", "Drafts", "Trash"].map((item) => (
          <Button key={item} variant="ghost" className="w-full text-left">
            {item}
          </Button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
