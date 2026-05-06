import { useState } from "react";
import { supabase } from "../../supabaseClient";

const ServiceForm = () => {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [imageFile, setImageFile] = useState(null);

async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !imageFile) {
    alert("Title & image wajib");
    return;
    }

    const fileName = `${Date.now()}-${imageFile.name}`;

    // upload image
    const { error: uploadError } = await supabase.storage
    .from("services")
    .upload(fileName, imageFile);

    if (uploadError) {
    console.error(uploadError);
    return;
    }

    // get public URL
    const { data } = supabase.storage
    .from("services")
    .getPublicUrl(fileName);

    const imageUrl = data.publicUrl;

    // insert ke database
    const { error } = await supabase.from("services").insert([
    {
        title,
        description,
        image: imageUrl,
        highlight: false,
        link: "/service-detail"
    }
    ]);

    if (error) {
    console.error(error);
    } else {
    alert("Berhasil tambah data");
    setTitle("");
    setDescription("");
    setImageFile(null);
    }
}

return (
    <form onSubmit={handleSubmit} className="form">
    <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
    />

    <input
        type="file"
        onChange={(e) => setImageFile(e.target.files[0])}
    />

    <button type="submit">Tambah Service</button>
    </form>
);
};

export default ServiceForm;