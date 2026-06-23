export type UserType = 'Valid' | 'Invalid'

export interface Userdata { 
  username: string; 
  password: string; 
  type: UserType;

} 
 
export const users: Userdata[] = [ 
  { 
    username: 'tomsmith',
    password: 'SuperSecretPassword!',
    type: 'Valid'
   
  }, 
    { 
    username: 'tom',
    password: 'notSecurePassword',
    type: 'Invalid'
  }, 
  
]; 