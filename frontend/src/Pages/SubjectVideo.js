import { Cardques } from "../components/Cardques";
import { Videoyt } from "../components/Videoyt";

const data = [
    { id: 1, title: "Explain linear regression with an example" },
    { id: 2, title: "What is a binary search tree and how does it work?" },
    { id: 3, title: "Describe the difference between stack and queue data structures" },
    { id: 4, title: "How does a hash table work, and where is it used?" },
    { id: 5, title: "What is recursion, and can you give an example in code?" },
    { id: 6, title: "Explain Big O notation and its importance in algorithms" },
    { id: 7, title: "What is a neural network and how is it used in machine learning?" },
    { id: 8, title: "Describe how HTTP and HTTPS protocols work" },
    { id: 9, title: "What is polymorphism in object-oriented programming?" },
    { id: 10, title: "Explain the concept of a database transaction and its ACID properties" }
];


export function SubjectVideo(){
    return (
        <div className="text-white row-span-7 col-span-5 overflow-auto p-8">
            <div className="flex flex-col items-center h-4/5">
           <Videoyt/>
            </div>
           <div className="text-white font-bold text-xl mt-8 ml-12">
            Questions 
           </div>
            <div className="p-12 grid grid-cols-2 gap-5">
                {
                    data.map((obj)=>{
                        return <Cardques  title={obj.title} />
                    })
                }
            </div>
        </div>
    )
}