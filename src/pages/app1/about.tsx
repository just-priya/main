import dynamic from "next/dynamic"
// @ts-nocheck
// @ts-ignore
const About = dynamic(() => import("app1/pages/about"), { ssr: false })

const Page = (props: any) => {
    return <About {...props} gate="this data from parent rendering component from remote child client" />
}

export default Page