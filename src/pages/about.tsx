import RootLayout from "@/app/layout"

export default function About() {
  return (
    <RootLayout title="Xypheral | About"> {/* Set the title prop here */}
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl text-red-400">About Me</h1>
      </div>
    </RootLayout>
  )
}