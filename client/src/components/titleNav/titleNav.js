import Nav from 'react-bootstrap/Nav';

function TitleNav (){
  return (
    <Nav
    activeKey="/home"
    >
      <Nav.Item>
        <Nav.Link className="text-center" href="/home">Arcus Vapors</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default TitleNav;