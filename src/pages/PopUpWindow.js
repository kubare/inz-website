import { Modal, Button } from "react-bootstrap";

function PopUpWindow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Wprowadź dane
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Imię: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="imie" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Nazwisko: </label>
        <div class="col" >
          <div class="form-outline">
            <input type="text" placeholder="nazwisko" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Numer telefonu: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="numer telefonu" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Numer dowodu: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="numer dowodu" class="form-control" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Adres zamieszkania
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Miasto: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="miasto" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Ulica: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="ulica" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Numer lokalu: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="numer lokalu" class="form-control" />
          </div>
        </div>
        <label style={{ paddingTop: "5px" }}>Kod pocztowy: </label>
        <div class="col">
          <div class="form-outline">
            <input type="text" placeholder="kod pocztowy" class="form-control" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Zapłać</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopUpWindow;
