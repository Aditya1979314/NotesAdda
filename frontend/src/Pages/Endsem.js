import { Bar } from "../components/Bar";

const data = [
    {
        id: 1,
        title: "2024-25",
    },
    {
        id: 2,
        title: "2025-26",
    },
    {
        id: 3,
        title: "2026-27",
    },
    {
        id: 4,
        title: "2027-28",
    },
    {
        id: 5,
        title: "2028-29",
    },
    {
        id: 6,
        title: "2029-30",
    },
    {
        id: 7,
        title: "2030-31",
    },
    {
        id: 8,
        title: "2031-32",
    },
    {
        id: 9,
        title: "2032-33",
    },
    {
        id: 10,
        title: "2033-34",
    },
];

export function Endsem(){
    return (
        <div className="text-white overflow-auto p-8 row-span-7 col-span-5">
            <div className="text-white font-semibold text-lg mb-4 ml-2">Operating Systems</div>
            {
                data.map((obj)=>{
                    return <Bar to={``} title={obj.title}/>
                })
            }
        </div>
    )
}