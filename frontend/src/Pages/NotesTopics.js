import { Bar } from "../components/Bar";


const data = [
    {
        id: 1,
        title: "Intro to Computer Networks",
    },
    {
        id: 2,
        title: "OSI Model and TCP/IP Model",
    },
    {
        id: 3,
        title: "IP Addressing and Subnetting",
    },
    {
        id: 4,
        title: "Routing and Switching",
    },
    {
        id: 5,
        title: "Network Protocols (HTTP, FTP, DNS, etc.)",
    },
    {
        id: 6,
        title: "Wireless Networks and Mobile Communication",
    },
    {
        id: 7,
        title: "Network Security Fundamentals",
    },
    {
        id: 8,
        title: "Virtual Private Networks (VPNs)",
    },
    {
        id: 9,
        title: "Network Troubleshooting and Tools",
    },
    {
        id: 10,
        title: "Future Trends in Networking (IoT, 5G, etc.)",
    },
];



export function NotesTopics(){
    return (
     <div className="text-white overflow-auto p-8 row-span-7 col-span-5">
        <div className="text-white font-semibold text-lg mb-4 ml-2">Computer Networks</div>
        {
            data.map((obj)=>{
                return <Bar to={``} title={obj.title}/>
            })
        }
    </div>
    )
}