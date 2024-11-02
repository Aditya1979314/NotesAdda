import { useParams } from "react-router-dom";
import { Bar } from "../components/Bar";
import { BarSubject } from "../components/BarSubject";


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

export function SubjectTopics(){
const {id} = useParams();


    return (
        <div className="text-white overflow-auto p-8 row-span-7 col-span-5">
        <div className="text-[#D4D4D8] font-bold text-3xl mb-4 ml-2">Computer Networks</div>
        <div className="mb-4 ml-2 text-[#D4D4D8]">Definition: Computer networks are systems that connect multiple computing devices to share resources and communicate, enabling information exchange between devices over local or wide areas.Types: Networks are categorized into types such as LAN (Local Area Network), WAN (Wide Area Network), MAN (Metropolitan Area Network), and PAN (Personal Area Network) based on their geographic scope and purpose.</div>
        {
            data.map((obj)=>{
                return <BarSubject to={`/subjects/${id}/${obj.id}`} title={obj.title}/>
            })
        }
    </div>
    )
}