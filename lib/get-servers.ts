import { promises as fs } from "fs";
import path from "path";

export interface MCPServer {
  id: string;
  name: string;
  author: string;
  description: string;
  category: string;
  githubUrl: string;
  rating: number;
  createdAt: string;
}

export async function getServers(): Promise<MCPServer[]> {
  const filePath = path.join(process.cwd(), "data", "mcp-servers.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents) as MCPServer[];
}

export async function getMCPServer(id: string): Promise<MCPServer | null> {
  const servers = await getServers();
  return servers.find((server) => server.id === id) || null;
}
