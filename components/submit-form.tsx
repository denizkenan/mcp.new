"use client"

import { Button } from "@/components/ui/button"
import { BorderBeam } from "@/components/ui/border-beam"

export function BorderBeamButton() {
  return (
    <Button 
      variant="ghost" 
      className="relative w-full h-16 text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-blue-100 transition-all duration-300 overflow-hidden group"
      onClick={() => window.location.href = 'https://www.mcp.run/settings/tasks'}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
          Build!
        </span>
      </span>
      
      <BorderBeam 
        size={35}
        duration={8} 
        delay={2}
        colorFrom="#60a5fa"
        colorTo="#a855f7"
        borderWidth={2}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-blue-500/0 group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
    </Button>
  );
}

export function SubmitForm() {
  return (
    <div className="space-y-4">
      <BorderBeamButton  />
      <div className="text-sm text-blue-300 space-y-2">
        <p>Build your own MCP server using our task system. Get started with:</p>
        <div className="flex flex-col gap-2">
          <a href="https://docs.mcp.run/tasks/using-tasks" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <span>Tasks Documentation</span>
          </a>
          <a href="https://docs.mcp.run/" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
            <span className="text-blue-500">→</span>
            <span>Getting Started Guide</span>
          </a>
        </div>
      </div>
    </div>
  )
}

