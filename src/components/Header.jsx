

export default function Header() {
  return (
    <header className="w-full h-14 px-10 flex justify-between items-center bg-red-500">
        <div>
          <p>Tortolani</p>
        </div>
        <nav className=" ">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>Projects</li>
            <li>Experience</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}
