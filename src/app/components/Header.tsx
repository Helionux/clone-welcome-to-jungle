import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { BriefcaseBusiness, Flame, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    const Links1 = [
        { name: "Trouver un job", link: "#" },
        { name: "Trouver une entreprise", link: "#" },
        { name: "Media", link: "#" },
    ]
    const Links2 = [
        {
            icon: <BriefcaseBusiness />,
            name: "Candidatures",
            link: "#"
        },
        {
            icon: <Flame />,
            name: "Opportunites",
            link: "#"
        },
        {
            icon: <User />,
            name: "Se connecter",
            link: "#"
        },
    ]
   
    return (
        <header  className="flex justify-between bg-white p-5 font-Worksans ">
            <figure>
                <Image src='/logo.svg' alt="Logo" width={150} height={100} />
            </figure>
            <div className="">
                {
                    Links1.map((link, idx) => (
                        <Link
                        href={link.link}
                        key={idx}
                        className="group inline-block text-[16px] font-medium leading-[18px] mx-2 border-b-2 border-transparent hover:border-amber-300 transition-colors duration-150 focus-visible:outline-none focus-visible:border-amber-300"
                        >
                        <span className="inline-block transform transition-transform duration-200 ease-out group-hover:-translate-y-1">
                            {link.name}
                        </span>
                        </Link>
                    ))
                }
            </div>

            <div className="flex gap-2">
                <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                </InputGroup>
                <Button variant="outline"  className="font-semibold leading-3.5 text-[12px] border-black ">Employeurs</Button>
            </div>
          
            
            <div className="flex text-[14px] font-medium leading-[18px] gap-3">
                {
                    Links2.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex flex-col items-center">
                            <span className="items-center">{item.icon}</span>
                            <Link href={item.link} className="">{item.name}</Link>
                        </div>
                    ))
                }
            </div>



        </header>
    )
}