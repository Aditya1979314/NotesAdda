
export function Videoyt({url}){
    return (
        <div className="bg-[#191919] h-full w-4/5">
           <iframe className="w-full h-full" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}