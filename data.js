//users

db.users.insertMany([{
    userid: 1,
    name: "Hemanth",
    email: "hemanth@gmail.com",
    mentorid: 1,
},
{
    userid: 2,
    name: "Raghu",
    email: "raghu@gmail.com",
    mentorid: 2,
},
{
    userid: 3,
    name: "Bhanu",
    email: "bhanu@gmail.com",
    mentorid: 3,
},
{
    userid: 4,
    name: "Kiran",
    email: "kiran@gmail.com",
    mentorid: 1,
},
{
    userid: 5,
    name: "Tharun",
    email: "tharun@gmail.com",
    mentorid: 2,
},
]);

//codekata

db.codekata.insertMany([{
    userid: 1,
    problems: 10,
},
{
    userid: 2,
    problems: 40,
},
{
    userid: 3,
    problems: 20,
},
{
    userid: 4,
    problems: 50,
},
{
    userid: 5,
    problems: 70,
},
]);

//topics

db.topics.insertMany([{
    topicid: 1,
    topic: "HTML",
    topic_date: new Date("4-oct-2020"),
},
{
    topicid: 2,
    topic: "CSS",
    topic_date: new Date("10-oct-2020"),
},
{
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("15-oct-2020"),
},
{
    topicid: 4,
    topic: "ReactJs",
    topic_date: new Date("20-oct-2020"),
},
{
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("25-oct-2020"),
},
]);

//tasks

db.tasks.insertMany([{
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "HTML Task",
    due_date: new Date("4-oct-2020"),
    submitted: true,
},
{
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "CSS Task",
    due_date: new Date("10-oct-2020"),
    submitted: true,
},
{
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript Task",
    due_date: new Date("15-oct-2020"),
    submitted: false,
},
{
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "ReactJs Task",
    due_date: new Date("20-oct-2020"),
    submitted: false,
},
{
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "NodeJs Task",
    due_date: new Date("25-oct-2020"),
    submitted: false,
},
]);

//attendance

db.attendance.insertMany([{
    userid: 1,
    topicid: 1,
    attended: true,
},
{
    userid: 2,
    topicid: 2,
    attended: true,
},
{
    userid: 3,
    topicid: 3,
    attended: false,
},
{
    userid: 4,
    topicid: 4,
    attended: false,
},
{
    userid: 5,
    topicid: 5,
    attended: false,
},
]);

//mentors

db.mentors.insertMany([{
    mentorid: 1,
    mentorname: "Jagan",
    mentor_email: "jagan@gmail.com",
},
{
    mentorid: 2,
    mentorname: "Sangeetha",
    mentor_email: "sangeetha@gmail.com",
},
{
    mentorid: 3,
    mentorname: "Abishek",
    mentor_email: "abishek@gmail.com",
},
{
    mentorid: 4,
    mentorname: "Swetha",
    mentor_email: "swetha@gmail.com",
},
{
    mentorid: 5,
    mentorname: "Shanker",
    mentor_email: "shanker@gmail.com",
},
]);

//comapnydrives

db.comapnydrives.insertMany([{
    userid: 1,
    drive_date: new Date("10-oct-2020"),
    company: "Facebook",
},
{
    userid: 2,
    drive_date: new Date("15-oct-2020"),
    company: "Amazon",
},
{
    userid: 3,
    drive_date: new Date("20-oct-2020"),
    company: "Netflix",
},
{
    userid: 4,
    drive_date: new Date("25-oct-2020"),
    company: "Google",
},
{
    userid: 5,
    drive_date: new Date("27-oct-2020"),
    company: "Uber",
},
]);

