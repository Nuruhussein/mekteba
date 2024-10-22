// resources/js/Pages/Authors/Create.tsx

import React, { useState } from "react";
import { router } from "@inertiajs/react";

const AuthorCreate: React.FC = () => {
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post("/authors", { name, bio });
    };

    return (
        <div>
            <h1>Create New Author</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Bio</label>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default AuthorCreate;
