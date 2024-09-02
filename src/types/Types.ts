export interface Topic {
    id: number;
    title: string;
    description: string;
    content: string
}

export interface Comment {
    id: number;
    topicId: number;
    text: string;
    author?: string
}