import dynamic from "next/dynamic"

// @ts-ignore  
const Page = dynamic(() => import("app2/pages/index"), { ssr: false })

export default Page