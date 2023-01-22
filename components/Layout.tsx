import { AppMeta } from 'newt-client-js'
import { PropsWithChildren } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({
  app,
  children,
}: PropsWithChildren<{
  app: AppMeta
}>): JSX.Element {
  return (
    <div className="font-sans text-slate-700">
      <Header app={app} />
      {children}
      <Footer app={app} />
    </div>
  )
}
