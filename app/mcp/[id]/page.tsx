import { notFound } from "next/navigation"
import { ExternalLink, Star } from "lucide-react"
import Link from "next/link"
import { getMCPServer } from "@/lib/get-servers"

export default async function MCPServerPage({ 
  params 
}: { 
  params: { id: string } 
}) {
  const server = await getMCPServer(params.id)
  
  if (!server) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-50">{server.name}</h1>
            <Link
              href={server.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-blue-200 hover:text-blue-50 transition-colors"
            >
              <span>View on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-lg text-blue-200/90 mt-2">by {server.author}</p>
        </div>

        {/* Category and Rating */}
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-100 border border-blue-400/20">
            {server.category}
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < server.rating ? "text-yellow-400 fill-yellow-400" : "text-blue-300/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-xl font-semibold text-blue-50 mb-4">About</h2>
          <p className="text-blue-100/90">{server.description}</p>
          
          {/* Installation */}
          <h2 className="text-xl font-semibold text-blue-50 mt-8 mb-4">Installation</h2>
          <div className="bg-blue-950/50 p-4 rounded-lg border border-blue-300/20">
            <code className="text-blue-100">npx {server.name}</code>
          </div>

          {/* Configuration */}
          <h2 className="text-xl font-semibold text-blue-50 mt-8 mb-4">Configuration</h2>
          <div className="bg-blue-950/50 p-4 rounded-lg border border-blue-300/20">
            <pre className="text-blue-100">
              {JSON.stringify({
                "mcpServers": {
                  [server.id]: {
                    "command": server.name
                  }
                }
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
} 