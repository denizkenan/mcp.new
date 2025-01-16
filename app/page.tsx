import { SubmitForm } from "@/components/submit-form"


export default async function Home() {


  return (
    <div className="container mx-auto space-y-12 pt-16 pb-8 relative z-10">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 animate-gradient">
              YOUR VERY OWN MCP TASK
            </span>
          </h1>
          
          

          <div className="max-w-md mx-auto">
            <SubmitForm />
          </div>
        </div>
      </div>


    </div>
  )
}

