import Link from 'next/link';

const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: 'space-between',
    padding: '1rem'
  }

  return (
    <div style={styles}>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href='/contact'>
          <a>Contact Us</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;