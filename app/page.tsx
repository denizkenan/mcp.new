import { SubmitForm } from "@/components/submit-form"
import { MCPRegistry } from "@/components/mcp-registry"

import { getServers } from '@/lib/get-servers'

export default async function Home() {
  const servers = await getServers()

  return (
    <div className="container mx-auto space-y-12 pt-16 pb-8 relative z-10">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 animate-gradient">
              YOUR VERY OWN MCP SERVER
            </span>
          </h1>
          
          <p className="text-xl">
            <span className="font-bold bg-gradient-to-r from-blue-200 to-blue-300 bg-clip-text text-transparent">
              {servers.length}
            </span>
            <span className="text-blue-200"> MCP Servers stored.</span>
          </p>

          <div className="max-w-md mx-auto">
            <SubmitForm />
          </div>
        </div>
      </div>

      {/* Registry Section */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-500 to-blue-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>

        {servers.length > 0 ? (
          <MCPRegistry servers={servers} />
        ) : (
          <div className="text-center">
            <p className="text-xl text-blue-200">No MCP servers found. Be the first to add one!</p>
          </div>
        )}
      </div>
    </div>
  )
}

