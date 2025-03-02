export type SidebarProps = {
    onCompose: () => void;
};

export type Email = {
    id: number;
    sender: string;
    subject: string;
    preview: string;
    time: string;
    replyTo: string;
    content: string;
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

export interface UserData {
    userId: string;
    name: string;
    email: string;
}

export interface UserState {
    userData: UserData | null;
    loading: boolean;
    error: string | null;
}
