"use client"

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { MCPServer } from '@/lib/get-servers'
import { ServerCard } from '@/components/server-card'

interface SearchClientProps {
  servers: MCPServer[]
}

export function SearchClient({ servers }: SearchClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredServers, setFilteredServers] = useState<MCPServer[]>(servers)

  // Get unique categories
  const categories = Array.from(new Set(servers.map(server => server.category)))

  // Update filtered servers when search term or category changes
  useEffect(() => {
    const filtered = servers.filter(server => {
      const matchesSearch = !searchTerm.trim() || 
        server.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        server.author.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = !selectedCategory || server.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    setFilteredServers(filtered)
  }, [searchTerm, selectedCategory, servers])

  return (
    <div className="space-y-8">
      {/* Search and Filter Controls */}
      <div className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-300" />
          <input
            type="text"
            placeholder="Search by name, description, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/10 border border-blue-300/30 rounded-lg text-white placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
              !selectedCategory 
                ? 'bg-blue-500 text-white' 
                : 'bg-white/10 text-blue-200 hover:bg-white/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                selectedCategory === category 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-white/10 text-blue-200 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServers.map((server) => (
          <ServerCard key={server.id} {...server} />
        ))}
      </div>

      {/* No Results */}
      {filteredServers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-blue-200">No servers found matching your criteria</p>
        </div>
      )}
    </div>
  )
} 