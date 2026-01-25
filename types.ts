
export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  category?: string;
  description?: string;
  reflection?: string;
  reviews?: Review[];
  meetings?: Meeting[];
}

export interface Review {
  id: string;
  userName: string;
  initials: string;
  time: string;
  content: string;
  avatarColor: string;
}

export interface Meeting {
  date: string;
  location: string;
}
