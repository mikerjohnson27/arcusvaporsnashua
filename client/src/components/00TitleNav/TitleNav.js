import Nav from 'react-bootstrap/Nav';

function TitleNav (){
  return (
    <Nav
    activeKey="/home"
    >
      <Nav.Item className='title'>
        <Nav.Link href="/home">Arcus Vapors</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default TitleNav;