import React, { useState } from 'react'
import { Row, Col, Form, Input, FormGroup, Label, Button, Table } from 'reactstrap'
import Modal from '../../components/Modal'

const defaultValue = {
  images: [],
  name: '',
  description: '',
  duration: '',
  dresscode: '',
  location: ''
}

const NewTrip = (): React.ReactChild => {
  const [isVisible, setVisible] = useState(false)
  const [modalData, setModalData] = useState(defaultValue)
  const [trip, setTrip] = useState({
    name: '',
    activities: []
  })

  const onChange = ({ target: { name, value } }): void => {
    setModalData({
      ...modalData,
      [name]: value
    })
  }

  const toggle = (): void => setVisible(!isVisible)

  const onSubmit = (): any => {
    setTrip({
      ...trip,
      activities: [...trip.activities, modalData]
    })

    setModalData(defaultValue)
    toggle()
  }

  const handleLoadPreview = (e): void => {
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = (e): void => {
      console.log(e.target.result)
      setModalData({ ...modalData, images: [...modalData.images, e.target.result] })
    }
  }

  return (
    <Row className="m-5">
      <Col xl={12} className="mb-4">
        <h2>Excursão</h2>
        <FormGroup>
          <Label>Nome</Label>
          <Input name="name" />
        </FormGroup>
        <Button onClick={toggle}>New Activity</Button>
        <Table className="mt-2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Dresscode</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {trip.activities.length ? (
              trip.activities.map(
                (activity, index): React.ReactChild => (
                  <tr key={index}>
                    <td>{activity.name}</td>
                    <td>{activity.description}</td>
                    <td>{activity.location}</td>
                    <td>{activity.dresscode}</td>
                    <td>{activity.duration}</td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td colSpan={5}>
                  <center>Theres no Trip created</center>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Col>
      <Modal onSubmit={onSubmit} toggle={toggle} isOpen={isVisible} title="Create Activity">
        <Row>
          <Col xl={7}>
            <Form>
              <FormGroup>
                <Label>Nome</Label>
                <Input value={modalData.name} name="name" onChange={onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Descrição</Label>
                <Input value={modalData.description} type="textarea" name="description" onChange={onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Location</Label>
                <Input value={modalData.location} name="location" onChange={onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Duração</Label>
                <Input value={modalData.duration} type="textarea" name="duration" onChange={onChange} />
              </FormGroup>
              <FormGroup>
                <Label>Dresscode</Label>
                <Input value={modalData.dresscode} type="textarea" name="dresscode" onChange={onChange} />
              </FormGroup>
              <input onChange={handleLoadPreview} type="file" name="img" />
            </Form>
          </Col>
          <Col>
            <h2>Galery</h2>
            <Row>
              {modalData.images.map(image => (
                <Col className="mb-2">
                  <img height={200} width={200} src={image} className="miniAvatar" alt="" id="output" />
                </Col>
              ))}
            </Row>
            {/* <img height={300} width={300} src={image} className="miniAvatar" alt="" id="output" /> */}
          </Col>
        </Row>
      </Modal>
    </Row>
  )
}

export default NewTrip
