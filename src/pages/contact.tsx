import RootLayout from "@/app/layout"

export default function Contact() {
  return (
    <RootLayout title="Contact">
      <div className="flex h-screen mt-16" style={{ height: 'calc(100vh - 4rem)' }}>
        <div className="w-1/2 flex items-center justify-center bg-white">
          <div>
            <h1 className="text-3xl">Contact Information</h1>
            <p className="mt-4 text-xl text-gray-600">Phone: 8511 8172</p>
            <p className="mt-2 text-xl text-gray-600">Email: phuachenghongterry@gmail.com</p>
            <p className="mt-2 text-xl text-gray-600">Address: 25 Rosewood Dr, Singapore 737919</p>
          </div>
        </div>
        <div className="w-1/2">
          <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Contact" />
        </div>
      </div>
    </RootLayout>
  )
}