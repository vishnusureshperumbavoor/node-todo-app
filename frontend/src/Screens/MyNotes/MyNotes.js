import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../Components/MainScreen";
import notes from "../../data/notes";
import axios from 'axios'
function MyNotes() {

  const deleteHandler = (id) => {
    if (window.confirm("Are u sure?")) {
    }
  };
  const fetchNotes=async()=>{
    const data = await axios.get('/api/notes');
    console.log("going to college only for anju babu");
    console.log(data);
  }
  useEffect(()=>{
    fetchNotes();
  },[])
  return (
    <>
      <MainScreen title="Welcome back VSP">
        <Link to="/createnote">
          <Button style={{ marginLeft: 10, marginBottom: 6 }}>
            CREATE NEW NOTE
          </Button>
        </Link>
        {notes.map((note) => (
          <Accordion>
            <Accordion.Item eventKey="0">
              <Card style={{ margin: 1 }}>
                <Card.Header style={{ display: "flex" }}>
                  <Accordion.Header style={{ width: "100%" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      {note.title}
                    </span>
                    <div>
                      <Button href={`/note/${note._id}`}>EDIT</Button>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Accordion.Header>
                </Card.Header>
                <Accordion.Body>
                  <Card.Body>
                    <h4>
                      <Badge variant="Success">
                        Category - {note.category}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created On - date
                      </footer>
                    </blockquote>
                  </Card.Body>
                </Accordion.Body>
              </Card>
            </Accordion.Item>
          </Accordion>
        ))}
      </MainScreen>
    </>
  );
}

export default MyNotes;
