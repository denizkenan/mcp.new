import { getServers } from '@/lib/get-servers'
import { SearchClient } from '@/components/search-client'

export default async function SearchPage() {
  const servers = await getServers()

  return (
    <div className="container mx-auto py-20">
      <div className="space-y-8">
        {/* Search Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Search MCP Servers</h1>
          <p className="text-lg text-blue-200">
            Find the perfect MCP server for your needs
          </p>
        </div>

        <SearchClient servers={servers} />
      </div>
    </div>
  )
} 