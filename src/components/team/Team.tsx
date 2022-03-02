import './team.scss'
export default function Team() {
    const teamData = [
        {
            id:0,
            img:"assets/images.jfif",
            title:"Ben Armstrong",
            desc:"Cryptocurrency enthusiast and content creator",
        },
        {
            id:1,
            img:"assets/1520520873896.jfif",
            title:"Steven Polizzi",
            desc:"Lead Graphic Designer",
        },
        {
            id:2,
            img:"assets/1568618092048.jfif",
            title:"Carlos J. Melgar",
            desc:"Advisor and Project Manager",
        },
        {
            id:3,
            img:"assets/1517469183498.jfif",
            title:"Jack Prosser",
            desc:"Website Manager",
        },
    ]
    return (
        <div className="team" id="team">
            <div className="teamContent">
                <h1>Meet the team</h1>
                <div className="teamWrapper">
                    {teamData.map((d)=>(
                        <div className="teamItem" key={d.id}>
                            <img src={d.img} alt="" />
                            <h2 className="name">{d.title}</h2>
                            <p>{d.desc}</p>
                        </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}
