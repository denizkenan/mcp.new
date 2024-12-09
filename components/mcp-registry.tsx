import { Star, ExternalLink } from 'lucide-react'
import Link from 'next/link'

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Marquee from "@/components/ui/marquee"
import { MCPServer } from '@/lib/get-servers'

const ServerCard = (server: MCPServer) => (
  <Link href={`/mcp/${server.id}`}>
    <Card className="mx-3 w-[320px] overflow-hidden bg-white/15 hover:bg-white/20 backdrop-blur-md border-blue-300/30 transition-all hover:border-blue-300/50 shadow-lg hover:shadow-blue-500/10">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-blue-50 truncate">{server.name}</h3>
            <Link 
              href={server.githubUrl} 
              target="_blank" 
              className="text-blue-200 hover:text-blue-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-sm text-blue-200/90 truncate">{server.author}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <span className="inline-block px-2 py-1 rounded-full text-xs bg-blue-500/20 text-blue-100 mb-2 border border-blue-400/20">
          {server.category}
        </span>
        <p className="text-sm text-blue-100/90 mb-4 line-clamp-2">{server.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < server.rating ? "text-yellow-400 fill-yellow-400" : "text-blue-300/50"}`}
              />
            ))}
          </div>
         
        </div>
      </CardContent>
    </Card>
  </Link>
)

export function MCPRegistry({ servers }: { servers: MCPServer[] }) {
  const chunkSize = Math.ceil(servers.length / 4)
  const firstRow = servers.slice(0, chunkSize)
  const secondRow = servers.slice(chunkSize, chunkSize * 2)
  const thirdRow = servers.slice(chunkSize * 2, chunkSize * 3)
  const fourthRow = servers.slice(chunkSize * 3)

  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="flex flex-col gap-4 py-4">
        <Marquee pauseOnHover className="[--duration:400s] [--gap:1rem]">
          {firstRow.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:350s] [--gap:1rem]">
          {secondRow.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </Marquee>
        <Marquee pauseOnHover className="[--duration:450s] [--gap:1rem]">
          {thirdRow.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:380s] [--gap:1rem]">
          {fourthRow.map((server) => (
            <ServerCard key={server.id} {...server} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-indigo-950/50" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-indigo-950/50" />
    </div>
  )
}

