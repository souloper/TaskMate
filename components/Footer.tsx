
function Footer() {
  return (
    <footer className="py-4 text-center absolute bottom-0 w-full bg-gray-500/10 rounded-t-2xl">
      <p className="text-gray-400">Copyright &copy; {new Date().getFullYear()} TaskMate</p>
    </footer>
  )
}

export default Footer;