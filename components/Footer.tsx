
function Footer() {
  return (
    <footer className="flex flex-col justify-between items-center min-h-[10vh] py-4 text-center lg:absolute lg:bottom-0 w-full bg-gray-500/10 rounded-t-2xl">
      <p className="text-gray-400">Copyright &copy; {new Date().getFullYear()} TaskMate</p>
    </footer>
  )
}

export default Footer;