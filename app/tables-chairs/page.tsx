import MinHeader from "@/components/App/MinHeader"
import NavbarApp from "@/components/Common/NavbarApp"

export const Tables = () => {
  return (
    <>
        <div className="w-[100vw] h-[100vh]">
            <div className="md:block relative">
                <NavbarApp/>
            </div>
            <div className="w-[100%] bg-[#f2f2f2] overflow-auto overflow-y-scroll h-[calc(100vh-144px)]">
                <main className="w-full h-full ">
                    <section className="bg-[#f2f2f2] w-full pb-6 pt-2 md:py-0">
                        <div className="max-w-screen-lg mx-auto inset-x-0 w-full px-2 md:px-0 gap-4 relative">
                            <MinHeader name="asd" category="cumpleanos"/>
                        </div>
                    </section>
                </main>
            </div>            
        </div>
    </>
  )
}

export default Tables