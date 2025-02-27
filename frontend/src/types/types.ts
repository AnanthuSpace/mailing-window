export type SidebarProps = {
    onCompose: () => void;
};

export type Email = {
    id: number;
    sender: string;
    subject: string;
    preview: string;
    time: string;
    replyTo: string;   // Sender's email address
    content: string;   // Full email content
};


export type EmailCardProps = {
    email: Email;
    onSelect: (email: Email) => void;
};

export type EmailListProps = {
    emails: Email[];
    onSelect: (email: Email) => void;
};

export type EmailContentProps = {
    email?: Email | null;
};