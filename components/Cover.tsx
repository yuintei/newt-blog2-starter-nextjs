import { AppMeta } from 'newt-client-js'

export function Cover({ app }: { app: AppMeta }) {
  return (
    <div
      className="w-full h-50 sm:h-75 bg-cover bg-center"
      style={{ backgroundImage: `url(${app.cover.value})` }}
    >
      &nbsp;
    </div>
  )
}
