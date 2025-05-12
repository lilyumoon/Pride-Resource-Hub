"use strict";

/*
Template:

{
    date: "", 
    title: "",
    location: "",
    link: "",
    description: ""
},

date format: "m-d-Y"
*/

const EventData = [
    {
        date: "02-11-2025", 
        title: "Send a Digital Valentine: Besties Edition",
        location: "Online",
        link: "https://theden.northwoodtech.edu/event/10972839",
        description: "Does the Valentine's Day season bum you out? Wish you could send a box of chocolates or a love letter to your best friend or chosen family instead? Join the Northwood Alliance for Pride as we buck the romantic lovey dovey stuff in exchange for lifting up self-love, friendships and platonic love this February to benefit Embrace, CASDA, SART, and New Day Advocacy Center!"
    },
    { 
        date: "02-21-2025", 
        title: "Safe Zone Project Workshop", 
        location: "Online",
        link: "https://theden.northwoodtech.edu/event/10966286",
        description: "This is an online Safe Zone Workshop offered to students, staff, and faculty at Northwood Tech." 
    },
    {
        date: "02-25-2025", 
        title: "NAP February Club Meeting: You are LOVED",
        location: "Online",
        link: "https://theden.northwoodtech.edu/event/10945083",
        description: "Join the Northwood Alliance for Pride club as we hone in on an important message this Valentine's / Galentine's season: YOU. ARE. LOVED. The Alliance for Pride club is open to ALL students, new members always welcome."
    },
    { 
        date: "03-28-2025", 
        title: "Transgender Day of Visibility Community Panel", 
        location: "Northwood Tech, Ashland Campus", 
        link: "https://theden.northwoodtech.edu/event/10944607",
        description: "Join us for our 3rd Annual Transgender Day of Visibility Community Panel!" 
    },
    { 
        date: "04-04-2025", 
        title: "Safe Zone Project Workshop", 
        location: "Ashland AADC",
        link: null,
        description: "This is a Safe Zone Workshop for community members at Ashland Area Development Corporation." 
    },
    { 
        date: "04-08-2025", 
        title: "NAP Club Monthly Meeting: Allyship April!", 
        location: "Online & Rice Lake 212",
        link: "https://theden.northwoodtech.edu/event/11163740",
        description: "Join us for our monthly meeting of the Northwood Alliance for Pride Club!"
    },
    {
        date: "05-01-2025", 
        title: "May Day Sit-In",
        location: "The Hub, Rice Lake Campus",
        link: "https://theden.northwoodtech.edu/event/11282458",
        description: "Join us for a peaceful, non-partisan sit-in focused on raising awareness of current issues impacting students. See you there!"
    },
    {
        date: "05-06-2025", 
        title: "NAP Club Monthly Meeting: May Flowers!",
        location: "Online & Rice Lake 212",
        link: "https://theden.northwoodtech.edu/event/11273062",
        description: "Join the Northwood Alliance for Pride this May as we lean into our BLOOM! ALL students are welcome, and ALL ALLIES from ALL walks of life. We need you here, and you are QUALIFIED to help us plant, nurture & grow safer spaces at Northwood Tech and beyond."
    },
    {
        date: "05-10-2025", 
        title: "Lavender Graduation",
        location: "Northwood Tech, Ashland Campus",
        link: "https://theden.northwoodtech.edu/event/11262185",
        description: "The Northwood Alliance for Pride is proud to present our 2nd annual Lavender Graduation Ceremony to honor the accomplishments of LGBTQ+ & Ally Graduates! This event is sponsored by students, for students!"
    },
    {
        date: "06-14-2025", 
        title: "Pride in the Park",
        location: "Phoenix Park, Eau Claire",
        link: "https://www.cvlgbt.org/pride-2025",
        description: "Come see us at Pride in the Park, hosted by the CVLGBTQ+ Community Center! We will have a booth with information about Northwood Tech and the Northwood Alliance for Pride. We will also be handing out free swag! This event runs from 11am-4pm and is free to the public. We hope to see you there!"
    },
];