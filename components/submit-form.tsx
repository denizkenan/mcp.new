"use client"

import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import { BorderBeam } from "@/components/ui/border-beam"


export function BorderBeamButton() {
  return (
    <Button 
      variant="ghost" 
      className="relative w-full h-16 text-xl font-bold tracking-tight bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-blue-100 transition-all duration-300 overflow-hidden group"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
          Build MCP Server
        </span>
        <span className="text-sm font-normal text-blue-300">(Coming Soon)</span>
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
    <>
      <BorderBeamButton />
      
      <Button 
        onClick={() => window.open('https://github.com/DONEWio/mcp.new/issues/new', '_blank')}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
      >
        <Github className="w-5 h-5" />
        Submit via GitHub Issues
      </Button>
    </>
  )
}

