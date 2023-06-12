import { Button } from '@/components/button'
import CounterStore from '@/stores/counter'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  const links = [
    { link: "/", label: "Home" },
    { link: "/app1/", label: "App1" },
    { link: "/app2/", label: "App2" },
    { link: "/app1/about", label: "App1/about" },
    { link: {
      pathname: '/app1/',
      query: {
        id: "this-is-some-id",
      }
    }, label: "child reading query param" }
  ]
  return <div>
    <ul>
      {links.map((e, k) => <li key={k}>
        <Link href={e.link} >
          <Button>{e.label}</Button>
        </Link>
      </li>)}
    </ul>
    <CounterStore.Provider>
      <Component {...pageProps} />
    </CounterStore.Provider>
  </div>
}
