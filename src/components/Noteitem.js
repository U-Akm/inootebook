import React, { useContext } from 'react';
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3 shadow-lg" style={{ backgroundColor: "#2C3E50", color: "#fff", borderRadius: "10px", height: "200px" }}>
                <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title" style={{ fontSize: "18px" }}>{note.title}</h5>
                        <div className="d-flex">
                            <i 
                                className="far fa-edit mx-2"
                                onClick={() => { updateNote(note) }}
                                style={{ cursor: "pointer", color: "#fff" }}
                            ></i>
                            <i 
                                className="far fa-trash-alt mx-2"
                                onClick={() => { deleteNote(note._id) }}
                                style={{ cursor: "pointer", color: "#fff" }}
                            ></i>
                        </div>
                    </div>
                    <p className="card-text" style={{ fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis", maxHeight: "80px" }}>
                        {note.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
