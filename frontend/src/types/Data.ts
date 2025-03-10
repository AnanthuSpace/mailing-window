import { Email } from "./types";


const emailData: Email[] = [
    {
        id: 1,
        sender: "William Smith",
        subject: "Meeting Tomorrow",
        preview:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details...",
        time: "Oct 22, 2023, 9:00:00 AM",
        replyTo: "williamsmith@example.com",
        content:
            "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
    },
    {
        id: 2,
        sender: "Alice Smith",
        subject: "Re: Project Update",
        preview:
            "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive...",
        time: "Oct 22, 2023, 10:30:00 AM",
        replyTo: "alicesmith@example.com",
        content:
            "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    },
    {
        id: 3,
        sender: "Bob Johnson",
        subject: "Weekend Plans",
        preview:
            "Any plans for the weekend? I was thinking of going hiking in the nearby mountains...",
        time: "Apr 10, 2023, 11:45:00 AM",
        replyTo: "bobjohnson@example.com",
        content:
            "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    },
    {
        id: 4,
        sender: "Emily Davis",
        subject: "Re: Question about Budget",
        preview:
            "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation...",
        time: "Mar 25, 2023, 1:15:00 PM",
        replyTo: "emilydavis@example.com",
        content:
            "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    },
    {
        id: 5,
        sender: "Michael Wilson",
        subject: "Important Announcement",
        preview:
            "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach...",
        time: "Mar 10, 2023, 3:00:00 PM",
        replyTo: "michaelwilson@example.com",
        content:
            "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    },
    {
        id: 6,
        sender: "Sarah Brown",
        subject: "Re: Feedback on Proposal",
        preview:
            "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising...",
        time: "Feb 15, 2023, 4:30:00 PM",
        replyTo: "sarahbrown@example.com",
        content:
            "Thank you for your feedback on the proposal. It looks great! I'm pleased to hear that you found it promising. The team worked diligently to address all the key points you raised, and I believe we now have a strong foundation for the project.\n\nI've attached the revised proposal for your review.\n\nPlease let me know if you have any further comments or suggestions. Looking forward to your response.\n\nBest regards, Sarah",
    },
    {
        id: 7,
        sender: "David Lee",
        subject: "New Project Idea",
        preview:
            "I have an exciting new project idea to discuss with you. It involves expanding our services...",
        time: "Jan 28, 2023, 5:45:00 PM",
        replyTo: "davidlee@example.com",
        content:
            "I have an exciting new project idea to discuss with you. It involves expanding our services to target a niche market that has shown considerable growth in recent months.\n\nI've prepared a detailed proposal outlining the potential benefits and the strategy for execution.\n\nThis project has the potential to significantly impact our business positively. Let's set up a meeting to dive into the details and determine if it aligns with our current goals.\n\nBest regards, David",
    },
    {
        id: 8,
        sender: "Olivia Wilson",
        subject: "Vacation Plans",
        preview:
            "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise...",
        time: "Dec 20, 2022, 6:30:00 PM",
        replyTo: "oliviawilson@example.com",
        content:
            "Let's plan our vacation for next month. What do you think? I've been thinking of visiting a tropical paradise, and I've put together some destination options.\n\nI believe it's time for us to unwind and recharge. Please take a look at the options and let me know your preferences.\n\nWe can start making arrangements to ensure a smooth and enjoyable trip.\n\nExcited to hear your thoughts! Olivia",
    },
    {
        id: 9,
        sender: "James Martin",
        subject: "Re: Conference Registration",
        preview:
            "I've completed the registration for the conference next month. The event promises to be a great networking opportunity...",
        time: "Nov 30, 2022, 7:15:00 PM",
        replyTo: "jamesmartin@example.com",
        content:
            "I've completed the registration for the conference next month. The event promises to be a great networking opportunity, and I'm looking forward to attending the various sessions and connecting with industry experts.\n\nI've also attached the conference schedule for your reference.\n\nIf there are any specific topics or sessions you'd like me to explore, please let me know. It's an exciting event, and I'll make the most of it.\n\nBest regards, James",
    },
    {
        id: 10,
        sender: "Sophia White",
        subject: "Team Dinner",
        preview:
            "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones...",
        time: "Nov 5, 2022, 8:30:00 PM",
        replyTo: "sophiawhite@example.com",
        content:
            "Let's have a team dinner next week to celebrate our success. We've achieved some significant milestones, and it's time to acknowledge our hard work and dedication.\n\nI've made reservations at a lovely restaurant, and I'm sure it'll be an enjoyable evening.\n\nPlease confirm your availability and any dietary preferences. Looking forward to a fun and memorable dinner with the team!\n\nBest, Sophia",
    },
    {
        id: 11,
        sender: "Daniel Johnson",
        subject: "Feedback Request",
        preview:
            "I'd like your feedback on the latest project deliverables. We've made significant progress...",
        time: "Oct 22, 2022, 9:30:00 AM",
        replyTo: "danieljohnson@example.com",
        content:
            "I'd like your feedback on the latest project deliverables. We've made significant progress, and I value your input to ensure we're on the right track.\n\nI've attached the deliverables for your review, and I'm particularly interested in any areas where you think we can further enhance the quality or efficiency.\n\nYour feedback is invaluable, and I appreciate your time and expertise. Let's work together to make this project a success.\n\nRegards, Daniel",
    },
];


export default emailData