import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-2xl font-bold text-blue-50 mb-4">MCP Server Not Found</h2>
      <p className="text-blue-200 mb-8">The MCP server you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <Button variant="secondary">Return Home</Button>
      </Link>
    </div>
  )
} 