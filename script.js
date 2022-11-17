1. JSON iterate over all for loops

let object=[
    {person:"Dhoni",age:"35",team:"CSK"},
    {person:"Virat",age:"30",team:"RCB"},
    {person:"Rohit",age:"32",team:"MI"}
];


// For loop
// code
for (let i=0;i<object.length;i++){
    console.log(`
    person:${object[i].person}
    age:${object[i].age}
    team:${object[i].team}
    `)
}

// For Each loop
// code
object.forEach((data)=>{
    console.log(`
    person:${object[i].person}
    age:${object[i].age}
    team:${object[i].team}
    `)
})

// For of loop
// code
for (let data of object){
    console.log(`
    person:${data.person}
    age:${data.age}
    team:${data.team}
    `)
}

// For in loop
// code
for (let index in object){
    console.log(`
    person:{object[index]}
    age:{object[index]}
    team:{object[index]}
    `)
}

// Output

// person:Dhoni
// age:35      
// team:CSK    


// person:Virat
// age:30
// team:RCB


// person:Rohit
// age:32
// team:MI

2. Create your own resume data in JSON Format

// code
let myResume={
    "About": {
      "name": "Rajamouriyan R S",
      "email": "rsrmouriyan13@gmail.com",
      "phone": 9677531032,
      "degree": "B.E",
      "location": {
        "address": "18 Rajeswari nagar",
        "postalCode": 609001,
        "city": "Mayiladuthurai",
        "state": "Tamilnadu",
        "country": "India"
      },
    },
    "work": [
      {
        "company": "XXXYYYZZZ",
        "position": "Engineer - Design",
        "startDate": "2019-08-01",
        "endDate": "present",
        "summary": "Working as Structural design engineer and expertise in steel structures",
      },
    ],
    "education": [
      {
        "institution": "University College of Engineering (BIT Campus),Tiruchirappalli",
        "department": "Civil",
        "studyType": "fulltime",
        "batch start year": 2015,
        "batch end year": 2019,
        "cgpa": 7.5,
      }
    ],
    "skills": [
      {
        "name": "staad-pro,E-tabs",
        "level": "Expert",
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
  }
  console.log(myResume);


// Ouput

// {
//     About: {
//       name: 'Rajamouriyan R S',        
//       email: 'rsrmouriyan13@gmail.com',
//       phone: 9677531032,
//       degree: 'B.E',
//       location: {
//         address: '18 Rajeswari nagar',
//         postalCode: 609001,
//         city: 'Mayiladuthurai',
//         state: 'Tamilnadu',
//         country: 'India'
//       }
//     },
//     work: [
//       {
//         company: 'XXXYYYZZZ',
//         position: 'Engineer - Design',
//         startDate: '2019-08-01',
//         endDate: 'present',
//         summary: 'Working as Structural design engineer and expertise in steel structures'
//       }
//     ],
//     education: [
//       {
//         institution: 'University College of Engineering (BIT Campus),Tiruchirappalli',
//         department: 'Civil',
//         studyType: 'fulltime',
//         'batch start year': 2015,
//         'batch end year': 2019,
//         cgpa: 7.5
//       }
//     ],
//     skills: [ { name: 'staad-pro,E-tabs', level: 'Expert' } ],
//     languages: [ { language: 'Tamil,Enlish' } ]
//   }


3. Read about the difference between window, screen and document in javascript

Window:

1. Window object sites at the top of the javascript object hierarchy and represents the browser window.
2. All global JavaScript objects , functions, and variables automatically become members of the window object
3. This window object has the majority of the properties like length, innerWidth, innerHeight, name, if it has been closed, its parents, and more
4. For example,the window property of a window object points to the window object itself
            window.window
            window.window.window
            window.window.window.window

Screen:

1. Screen is a small information object about screen dimensions 
2. It can be used to display screen width, height, colorDepth, pixelDepth etc
3. It is not mandatory to write window prefix with screen object. It can be written without window prefix
4. For example, properties of a screen are like
    screen.width
    screen.height

Document:

1. This interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree
2. When an HTML document is loaded into a web browser , it becomes a document object. It is the root node of the HTML document
3. The document actually gets loaded inside the window object and has properties available to it like title, URL, cookie, etc
4. For example, 
        document.URL will returns the complete URL of the document