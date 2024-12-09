import { Star, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MCPServer } from '@/lib/get-servers'

export function ServerCard(server: MCPServer) {
  return (
    <Card className="w-full overflow-hidden bg-white/15 hover:bg-white/20 backdrop-blur-md border-blue-300/30 transition-all hover:border-blue-300/50 shadow-lg hover:shadow-blue-500/10">
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-blue-50 truncate">{server.name}</h3>
            <a 
              href={server.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-blue-50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
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
  )
} 