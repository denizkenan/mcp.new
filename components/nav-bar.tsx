import Link from 'next/link'
import Image from 'next/image'
import { Search } from 'lucide-react'

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-white font-semibold hover:text-blue-200 transition-colors">
            <Image
              src="/mcp.png"
              alt="MCP Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            MCP.new
          </Link>
          <div className="flex gap-6">
            <Link href="/search" className="text-white/80 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </Link>
            <Link href="/what-is-mcp" className="text-white/80 hover:text-white transition-colors">
              What is MCP?
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 