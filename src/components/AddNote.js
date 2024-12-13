import React, { useContext, useState } from 'react';
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4" style={{ color: "black" }}>Add a Note</h2>
            <div className="card p-4 shadow-lg" style={{ backgroundColor: "#2C3E50", color: "#fff" }}>
                <form className="my-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label text-light">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            value={note.title}
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Enter note title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label text-light">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={note.description}
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Enter note description"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label text-light">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                            minLength={5}
                            required
                            placeholder="Enter note tag"
                        />
                    </div>
                    <button
                        disabled={note.title.length < 5 || note.description.length < 5}
                        type="submit"
                        className="btn btn-primary w-100"
                        onClick={handleClick}
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNote;
