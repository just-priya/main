import CounterStore from "@/stores/counter";
import dynamic from "next/dynamic"
// @ts-nocheck
// @ts-ignore
const About = dynamic(() => import("app1/pages/index"), { ssr: false })
// @ts-ignore
const TokenStuff = dynamic(() => import("app1/tokenStuff"), { ssr: false })

const Page = (props: any) => {
    console.log(TokenStuff);
    
    return <div>
        <CounterStore.Provider>
            <TokenStuff />
        </CounterStore.Provider>
            <About {...props} gate="this is bullshit" />
        </div>
}

export default Page