import Link from "next/link"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { SignOutButton } from "@clerk/nextjs"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"

export const Navabar = () => {
    const user = true

    return <nav className="stucky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg">
        <MaxWidthWrapper>
            <div className="flex h-16 items-center justify-between">
                <Link href='/' className="flex z-40 font-semibold">
                    Ping<span className="text-brand-700">Panda</span>
                </Link>
                <div className="h-full flex items-center space-x-4">
                    {user ? <>
                        <SignOutButton>
                            <Button size="sm" variant="ghost">Sign out</Button>
                        </SignOutButton> 
                    </> : null
                    }

                    <Link href="/dashboard" className={buttonVariants({
                        size: "sm",
                        className: "flex items-center gap-1",
                    })}>
                    Dashboard <ArrowRight className="ml-1.5 size-4"/>
                    </Link>

                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
}