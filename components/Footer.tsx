
const Footer = () => {
  const FooterList = [
    {
      name:"Contact us",
      href:"#contact"
    },{
      name:"Pricing",
      href:"#pricing"
    },{
      name:"Features",
      href:"#features"
    },{
      name:"About us",
      href:"#about"
    },{
      name:"Terms of Service",
      href:"#terms"
    },{
      name:"Privacy Policy",
      href:"#privacy"
    }
  ]
  return (
    <section className="border grid grid-cols-2 place-items-center place-content-center  border-gray-200 h-[30vh] w-full">
      <div className="logo-branding">
        <h1 className="text-2xl font-bold">FreeTube</h1>
      <p className="text-sm text-gray-500">A Product By Inlance Solution Pvt Ltd.</p>
      <p className="text-sm text-gray-500">Building in public by Saaransh Mehta</p>
      </div>

      <div className="footer-list">
        <ul className="flex flex-col gap-2">
          {FooterList.map((item, index) => (
            <li key={index} className="text-sm text-gray-600 hover:text-blue-500">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Footer
