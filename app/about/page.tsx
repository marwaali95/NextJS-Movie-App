import Link from "next/link"
import type { Metadata } from "next"
export const metadata: Metadata={
    title:'Home',
    description:'Welcome to Next.js'
}

export default function About(){
   // throw new Error("Function not implemented.")

    return <div>
        <h1>About Page</h1>
        <Link href="/"> Back to Home Page</Link>

    </div>
}