export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Student'; 
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
}

export const mockUsers: User[] = [
  { 
    id: '1', 
    name: 'Rivera', 
    email: 'rivera@o2dashboard.com', 
    role: 'Admin', 
    status: 'Active', 
    joinDate: 'Oct 24, 2023' 
  },
  { 
    id: '2', 
    name: 'Chen', 
    email: 'c.c@o2dashboard.com', 
    role: 'Student', 
    status: 'Active', 
    joinDate: 'Nov 12, 2023' 
  },
  { 
    id: '3', 
    name: 'Knight', 
    email: 'ight@o2dashboard.com', 
    role: 'Student', 
    status: 'Inactive', 
    joinDate: 'Dec 21, 2023' 
  },
  { 
    id: '4', 
    name: 'Smyth', 
    email: 'n.s@o2dashboard.com', 
    role: 'Student', 
    status: 'Pending', 
    joinDate: 'Jan 14, 2024' 
  },
  { 
    id: '5', 
    name: 'Rodriguez', 
    email: 'r@o2dashboard.com', 
    role: 'Admin', 
    status: 'Active', 
    joinDate: 'Feb 22, 2024' 
  }
];