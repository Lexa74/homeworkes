type userNameInterface = number;
type dataInterface = 
  { user: string; age: number; gender: string; isAdmin?: boolean}
;

const userName: userNameInterface[] = [1, 2, 3];

const data: dataInterface[] = [
  { user: "Sveta", age: 23, gender: "female"},
  {
    user: "Kolya",
    age: 25,
    gender: "male",
    isAdmin: true,
  },
];
