import { Card } from "../components/Card";


const data = [
    {
        id: 1,
        title: "DBMS",
        descp: "DBMS is a very interesting topic",
    },
    {
        id: 2,
        title: "Operating Systems",
        descp: "Operating Systems manage hardware and software resources",
    },
    {
        id: 3,
        title: "Data Structures",
        descp: "Data Structures are essential for organizing data efficiently",
    },
    {
        id: 4,
        title: "Algorithms",
        descp: "Algorithms solve problems in a step-by-step manner",
    },
    {
        id: 5,
        title: "Networking",
        descp: "Networking enables data exchange between computers",
    },
    {
        id: 6,
        title: "Computer Architecture",
        descp: "Computer Architecture focuses on the design of computer systems",
    },
    {
        id: 7,
        title: "Software Engineering",
        descp: "Software Engineering is the process of designing software systems",
    },
    {
        id: 8,
        title: "Artificial Intelligence",
        descp: "Artificial Intelligence enables machines to simulate human intelligence",
    },
    {
        id: 9,
        title: "Machine Learning",
        descp: "Machine Learning is a subset of AI that enables systems to learn",
    },
    {
        id: 10,
        title: "Cybersecurity",
        descp: "Cybersecurity protects systems and networks from digital attacks",
    },
];



export function Subject(){
    return (
        <div className="text-white row-span-7 col-span-5 overflow-auto p-8 ">
            <div className="grid grid-cols-3 gap-12">
              {
                data.map((subject)=>{
                    return <Card to={`/subjects/${subject.id}`} title={subject.title} descp={subject.descp}/>
                })
              }
            </div>
        </div>
    )
}