import React from 'react'
import { getServers } from '@/lib/get-servers'

export default async function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const servers = await getServers()

  return (
    <div className="relative">
      {/* @ts-expect-error Server Component */}
      {React.cloneElement(children, { servers })}
    </div>
  )
} 