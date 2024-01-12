import RootLayout from "@/app/layout"

export default function Shabi() {
  return (
    <RootLayout title="Shabi">
        <div className="mt-16 bg-black">

            <div className="h-screen">
            <div className="w-full h-24 mt-10 flex justify-between">
                <p className="text-xl mt-8 ml-16 text-cyan-400">Terry Phua Cheng Hong</p>
                <p className="text-xl mt-8 mr-16 text-cyan-400">Test 1</p>
            </div>

            <div className="w-full h-24 flex justify-between">
                <p className="text-6xl mt-6 ml-16 font-extrabold text-white">PROPOSTA <br /> DE DESIGN</p>
            </div>

            <div className="w-full h-24 mt-20 flex justify-between">
                <p className="text-3xl mt-6 ml-16 font-extrabold text-cyan-400">PROPOSTA <br /> DE DESIGN</p>
            </div>
            </div>

            <div className="h-screen bg-white">

            </div>

        </div>
    </RootLayout>
  )
}