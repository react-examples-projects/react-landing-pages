import Dropdown from "react-bootstrap/Dropdown";
import SplitButton from "react-bootstrap/SplitButton";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function Dropdowns() {
  const handleOnChange = (e) => {
    console.log(e);
  };

  return (
    <>
      <Dropdown className="mt-3" drop="up" onSelect={handleOnChange}>
        <Dropdown.Toggle variant="link" id="drop1">
          Opciones
        </Dropdown.Toggle>

        <Dropdown.Menu id="drop1">
          <Dropdown.Item eventKey="1">Opcion 1</Dropdown.Item>
          <Dropdown.Item eventKey="2">Opcion 2</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="3">Opcion 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <SplitButton variant="dark" title="Mas opciones" className="mt-3">
        <Dropdown.Item>Opcion 1</Dropdown.Item>
        <Dropdown.Item>Opcion 2</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Opcion 3</Dropdown.Item>
      </SplitButton>

      <DropdownButton
        variant="success"
        title="Descargas"
        className="mt-3"
        id="drop2"
      >
        <Dropdown.Item>Opcion</Dropdown.Item>
        <Dropdown.Item>Opcion</Dropdown.Item>
        <Dropdown.Item>Opcion</Dropdown.Item>
        <Dropdown.Item>Opcion</Dropdown.Item>
      </DropdownButton>
    </>
  );
}
