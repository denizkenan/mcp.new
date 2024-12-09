export default function WhatIsMCP() {
    return (
      <div className="pt-24 pb-12 space-y-24">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
          <div className="container mx-auto py-24">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                What is Model Context Protocol?
              </h1>
              <p className="text-xl text-blue-200">
                MCP standardizes how developers integrate Large Language Models with external tools and data sources, enabling versatile AI applications across various domains.
              </p>
              <div className="mt-8">
                <a
                  href="https://modelcontextprotocol.io/introduction"
                  className="inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500"
                >
                  Learn More About MCP
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* Concepts Section */}
        <div className="container mx-auto px-4 space-y-16">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-3xl font-semibold text-white mb-4">Overview</h2>
            <p className="text-lg text-blue-200 mb-4">
              The <strong>Model Context Protocol (MCP)</strong> is a groundbreaking open standard designed to simplify and unify the way developers integrate Large Language Models (LLMs) with external tools, APIs, and data sources. By providing a standardized protocol, MCP enables the creation of more advanced, efficient, and scalable AI applications across diverse industries.
            </p>
            <p className="text-lg text-blue-200 mb-4">
              MCP acts as a bridge between AI models and external resources, ensuring seamless communication and interoperability. It reduces integration complexities, allowing developers to focus on innovation rather than technical challenges.
            </p>
            <p className="text-lg text-blue-200">
              By adopting MCP, developers can minimize development time and enhance the capabilities of their AI applications, making them more robust and versatile.
            </p>
          </section>
  
          {/* Key Features */}
          <section id="key-features">
            <h2 className="text-3xl font-semibold text-white mb-4">Key Features</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Standardized Communication</h3>
                <p className="text-lg text-blue-200">
                  MCP defines a consistent protocol for seamless interaction between LLMs and external systems, eliminating ambiguities and reducing potential errors during integration.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Modularity</h3>
                <p className="text-lg text-blue-200">
                  With MCP&apos;s modular design, developers can easily integrate new tools and data sources without disrupting existing architecture, allowing for quick adaptation to new requirements.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Scalability</h3>
                <p className="text-lg text-blue-200">
                  MCP is designed to handle high loads and support large-scale deployments efficiently, ensuring that AI applications can grow and scale without compromising performance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Security</h3>
                <p className="text-lg text-blue-200">
                  Security is a core aspect of MCP, implementing robust authentication and authorization mechanisms to secure all interactions and protect sensitive data.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Flexibility</h3>
                <p className="text-lg text-blue-200">
                  MCP supports various data formats and communication patterns to suit different application needs, accommodating protocols like RESTful APIs and GraphQL.
                </p>
              </div>
            </div>
          </section>
  
          {/* How It Works */}
          <section id="how-it-works">
            <h2 className="text-3xl font-semibold text-white mb-4">How It Works</h2>
            <p className="text-lg text-blue-200 mb-4">
              MCP operates as an intermediary layer between LLMs and external resources, defining clear interfaces and protocols for interaction. Here&apos;s how the key components function:
            </p>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">1. Context Providers</h3>
                <p className="text-lg text-blue-200">
                  Context Providers supply the LLM with necessary data and functionalities from external sources such as databases, APIs, and services, acting as the bridge between the AI model and external systems.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">2. Context Managers</h3>
                <p className="text-lg text-blue-200">
                  Context Managers manage the lifecycle of contexts, ensuring data remains consistent and up-to-date throughout interactions, handling state management, caching, and synchronization.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">3. Adapters</h3>
                <p className="text-lg text-blue-200">
                  Adapters serve as translators between the LLM&apos;s input/output formats and the interfaces of external systems, handling data serialization and deserialization to ensure compatibility.
                </p>
              </div>
            </div>
            <p className="text-lg text-blue-200">
              By clearly defining these components, MCP ensures that LLMs can interact with a wide range of systems and data sources in a consistent and efficient manner.
            </p>
          </section>
  
          {/* Example Use Cases */}
          <section id="use-case">
            <h2 className="text-3xl font-semibold text-white mb-4">Example Use Cases</h2>
            <p className="text-lg text-blue-200 mb-4">
              MCP&apos;s versatility allows it to be applied across various industries and applications. Here are some examples:
            </p>
            <div className="space-y-8">
              {/* Healthcare Virtual Assistant */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Healthcare Virtual Assistant</h3>
                <p className="text-lg text-blue-200">
                  Build an AI-powered assistant that accesses patient records, schedules appointments, and provides drug interaction information. MCP enables secure and efficient interaction with electronic health record systems, scheduling APIs, and medical databases.
                </p>
                <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto mt-4">
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
              </div>
              {/* Financial Advisory Chatbot */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">Financial Advisory Chatbot</h3>
                <p className="text-lg text-blue-200">
                  Develop a chatbot that provides investment advice by accessing real-time market data, customer portfolios, and financial news APIs. MCP ensures users receive accurate and personalized financial insights.
                </p>
              </div>
              {/* E-commerce Recommendation Engine */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">E-commerce Recommendation Engine</h3>
                <p className="text-lg text-blue-200">
                  Enhance shopping experiences by building AI models that interact with product databases, user behavior analytics, and inventory systems to deliver personalized product recommendations.
                </p>
              </div>
            </div>
          </section>
  
          {/* Getting Started */}
          <section id="getting-started">
            <h2 className="text-3xl font-semibold text-white mb-4">Getting Started</h2>
            <p className="text-lg text-blue-200 mb-4">
              To begin integrating MCP into your project, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-lg text-blue-200 space-y-4">
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
                <strong>Set Up Context Providers and Adapters:</strong> Define the external systems you want to integrate and create corresponding adapters.
                <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto mt-2">
                  <pre>
  {`// Example: Creating an adapter for a weather API
  import axios from 'axios';
  
  export const weatherAdapter = {
    fetchWeather: async (location) => {
      const response = await axios.get(\`https://api.weather.com/v3/weather/conditions?location=\${location}\`);
      return response.data;
    },
  };`}
                  </pre>
                </div>
              </li>
              <li>
                <strong>Configure Context Managers:</strong> Manage data flow and ensure efficient resource utilization.
                <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto mt-2">
                  <pre>
  {`// Example: Setting up a Context Manager
  import { ContextManager } from 'mcp-sdk';
  
  const contextManager = new ContextManager();
  
  contextManager.registerProvider('Weather', weatherAdapter);`}
                  </pre>
                </div>
              </li>
              <li>
                <strong>Integrate with Your LLM:</strong> Connect MCP with your chosen LLM to enable rich interactions.
                <div className="bg-gray-800 text-blue-200 p-4 rounded-md overflow-x-auto mt-2">
                  <pre>
  {`// Example: Integrating MCP with an LLM
  import { LLMIntegration } from 'mcp-sdk';
  
  const llm = new LLMIntegration();
  
  llm.connectToMCP(contextManager);
  
  async function processUserInput(input) {
    const response = await llm.process(input);
    return response;
  }`}
                  </pre>
                </div>
              </li>
              <li>
                <strong>Test and Deploy:</strong> Rigorously test your application and deploy it to your desired environment.
                <p className="text-lg text-blue-200 mt-2">
                  Ensure that all components work together seamlessly and handle edge cases appropriately.
                </p>
              </li>
            </ol>
          </section>
  
          {/* Resources */}
          <section id="resources">
            <h2 className="text-3xl font-semibold text-white mb-4">Resources</h2>
            <ul className="list-disc list-inside text-lg text-blue-200 space-y-2">
              <li>
                <a href="https://modelcontextprotocol.io/docs" className="text-blue-400 hover:underline">
                  MCP Documentation
                </a> – Comprehensive guides and API references.
              </li>
              <li>
                <a href="https://modelcontextprotocol.io/tutorials" className="text-blue-400 hover:underline">
                  Tutorials
                </a> – Step-by-step tutorials to help you get started quickly.
              </li>
              <li>
                <a href="https://github.com/modelcontextprotocol" className="text-blue-400 hover:underline">
                  GitHub Repository
                </a> – Contribute to the MCP project and explore the source code.
              </li>
              
            </ul>
          </section>
  
          {/* Conclusion */}
          <section id="conclusion">
            <h2 className="text-3xl font-semibold text-white mb-4">Join the MCP Revolution</h2>
            <p className="text-lg text-blue-200 mb-4">
              The Model Context Protocol is transforming the way developers build and deploy AI applications. By unifying the integration process, MCP empowers you to focus on creating innovative solutions without worrying about the complexities of connecting multiple systems.
            </p>
            <p className="text-lg text-blue-200">
              Start leveraging MCP today and be a part of the future of AI development. Visit the official MCP website to access resources, join the community, and contribute to this exciting open standard.
            </p>
            <div className="mt-8 text-center">
              <a
                href="https://modelcontextprotocol.io/get-started"
                className="inline-block px-8 py-4 text-lg font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
              >
                Get Started with MCP
              </a>
            </div>
          </section>
        </div>
      </div>
    )
  }