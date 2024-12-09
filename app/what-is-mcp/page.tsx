
export default function WhatIsMCP() {
  return (
    <div className="pt-24 pb-12 space-y-24">
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            What is Model Context Protocol?
          </h1>
          <p className="text-xl text-blue-200">
            MCP standardizes how developers integrate Large Language Models with external tools and data sources, enabling versatile AI applications across various domains.
          </p>
        </div>
      </div>

      {/* Concepts Section */}
      <div className="container mx-auto px-4 space-y-16">
        {/* Overview */}
        <section id="overview">
          <h2 className="text-3xl font-semibold text-white mb-4">Overview</h2>
          <p className="text-lg text-blue-200">
            The <strong>Model Context Protocol (MCP)</strong> is a groundbreaking open standard designed to simplify and unify the way developers integrate Large Language Models (LLMs) with external tools, APIs, and data sources. By providing a standardized protocol, MCP enables the creation of more advanced, efficient, and scalable AI applications across diverse industries.
          </p>
        </section>

        {/* Key Features */}
        <section id="key-features">
          <h2 className="text-3xl font-semibold text-white mb-4">Key Features</h2>
          <ul className="list-disc list-inside text-lg text-blue-200 space-y-2">
            <li>
              <strong>Standardized Communication:</strong> MCP defines a consistent protocol for seamless interaction between LLMs and external systems.
            </li>
            <li>
              <strong>Modularity:</strong> Easily integrate new tools and data sources without disrupting existing architecture.
            </li>
            <li>
              <strong>Scalability:</strong> Designed to handle high loads and support large-scale deployments efficiently.
            </li>
            <li>
              <strong>Security:</strong> Implements robust authentication and authorization mechanisms to secure all interactions.
            </li>
            <li>
              <strong>Flexibility:</strong> Supports various data formats and communication patterns to suit different application needs.
            </li>
          </ul>
        </section>

        {/* How It Works */}
        <section id="how-it-works">
          <h2 className="text-3xl font-semibold text-white mb-4">How It Works</h2>
          <p className="text-lg text-blue-200 mb-4">
            MCP operates as an intermediary layer between LLMs and external resources, defining clear interfaces and protocols for interaction. Here&apos;s how the key components function:
          </p>
          <ol className="list-decimal list-inside text-lg text-blue-200 space-y-2">
            <li>
              <strong>Context Providers:</strong> They supply the LLM with necessary data and functionalities from external sources like databases, APIs, and services.
            </li>
            <li>
              <strong>Context Managers:</strong> Responsible for managing the lifecycle of contexts, ensuring that data remains consistent and up-to-date throughout interactions.
            </li>
            <li>
              <strong>Adapters:</strong> Serve as translators between the LLM&apos;s input/output formats and the interfaces of external systems, handling data serialization and deserialization.
            </li>
          </ol>
          <p className="text-lg text-blue-200">
            By clearly defining these components, MCP ensures that LLMs can interact with a wide range of systems and data sources in a consistent and efficient manner.
          </p>
        </section>

        {/* Example Use Case */}
        <section id="use-case">
          <h2 className="text-3xl font-semibold text-white mb-4">Example Use Case</h2>
          <p className="text-lg text-blue-200 mb-4">
            Consider building an AI-powered virtual assistant for healthcare professionals. The assistant needs to access patient records, schedule appointments, and provide drug interaction information. MCP enables the LLM to securely and efficiently interact with electronic health record systems, scheduling APIs, and medical databases.
          </p>
          <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto">
            <pre>
{`// Example: Integrating an EHR system using MCP
import { MCP } from 'mcp-sdk';
import { ehrAdapter } from './adapters/ehrAdapter';

const mcp = new MCP();

mcp.useContextProvider('ElectronicHealthRecords', ehrAdapter);

async function handleUserQuery(query) {
  const response = await mcp.process(query);
  return response;
}`}
            </pre>
          </div>
        </section>

        {/* Getting Started */}
        <section id="getting-started">
          <h2 className="text-3xl font-semibold text-white mb-4">Getting Started</h2>
          <p className="text-lg text-blue-200 mb-4">
            To begin integrating MCP into your project, follow these steps:
          </p>
          <ol className="list-decimal list-inside text-lg text-blue-200 space-y-2">
            <li>
              <strong>Install the MCP SDK:</strong> Add the MCP SDK to your project dependencies.
              <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto mt-2">
                <pre>
{`// Using npm
npm install mcp-sdk

// Using yarn
yarn add mcp-sdk`}
                </pre>
              </div>
            </li>
            <li>
              <strong>Set Up Context Providers and Adapters:</strong> Define the external systems you want to integrate.
            </li>
            <li>
              <strong>Configure Context Managers:</strong> Manage data flow and ensure efficient resource utilization.
            </li>
            <li>
              <strong>Integrate with Your LLM:</strong> Connect MCP with your chosen LLM to enable rich interactions.
            </li>
            <li>
              <strong>Test and Deploy:</strong> Rigorously test your application and deploy it to your desired environment.
            </li>
          </ol>
        </section>

        {/* Resources */}
        <section id="resources">
          <h2 className="text-3xl font-semibold text-white mb-4">Resources</h2>
          <ul className="list-disc list-inside text-lg text-blue-200 space-y-2">
            <li>
              <a href="/docs" className="text-blue-400 hover:underline">
                MCP Documentation
              </a> – Comprehensive guides and API references.
            </li>
            <li>
              <a href="/tutorials" className="text-blue-400 hover:underline">
                Tutorials
              </a> – Step-by-step tutorials to help you get started quickly.
            </li>
            <li>
              <a href="/community" className="text-blue-400 hover:underline">
                Community Forum
              </a> – Connect with other MCP developers and share insights.
            </li>
            <li>
              <a href="/github" className="text-blue-400 hover:underline">
                GitHub Repository
              </a> – Contribute to the MCP project and explore the source code.
            </li>
          </ul>
        </section>

        {/* Conclusion */}
        <section id="conclusion">
          <h2 className="text-3xl font-semibold text-white mb-4">Join the MCP Revolution</h2>
          <p className="text-lg text-blue-200">
            The Model Context Protocol is transforming the way developers build and deploy AI applications. By unifying the integration process, MCP empowers you to focus on creating innovative solutions without worrying about the complexities of connecting multiple systems. Start leveraging MCP today and be a part of the future of AI development.
          </p>
        </section>
      </div>
    </div>
  )
} 