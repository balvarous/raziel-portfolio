
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Experience", href: "#experience"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Footer = () => {

    return (
        <footer className="container px-4">
            <div className="w-full h-[1px] bg-white mt-24"></div>
            <div className="md:flex sm:hidden md:justify-between mt-4 max-w-[1200px] mx-auto">
                <ul className="flex justify-between gap-4 text-md md:text-left mb-5">
                    {navItems.map((item, index)=>{
                        return (
                            <li key={index}>
                                <a 
                                    href="#" 
                                    className="hover:text-glow transition-all duration-500 cursor-pointer"
                                >{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
                <p 
                    className="max-w-[1200px] md:text-right mt-1 mb-12 text-sm"
                > &copy; {new Date().getFullYear()} Raziel Jamito | All rights reserved.</p>
            </div>
        </footer>
    )
}