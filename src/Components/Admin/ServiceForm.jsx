import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

const ServiceForm = ({ getServices, editing, setEditing }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [highlight, setHighlight] = useState(false);

  // isi form saat edit
  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description);
      setHighlight(editing.highlight);
    }
  }, [editing]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title) {
      alert("Title wajib diisi");
      return;
    }

    let imageUrl = editing?.image || null;

    // 🔥 kalau user upload file baru
    if (imageFile) {
      // validasi format (webp, png, jpg)
      const allowedTypes = ["image/webp", "image/png", "image/jpeg"];

      if (!allowedTypes.includes(imageFile.type)) {
        alert("Format harus webp/png/jpg");
        return;
      }

      const fileName = `${Date.now()}-${imageFile.name}`;

      // upload ke storage
      const { error: uploadError } = await supabase.storage
        .from("services")
        .upload(fileName, imageFile);

      if (uploadError) {
        console.error(uploadError);
        return;
      }

      // ambil public URL
      const { data } = supabase.storage
        .from("services")
        .getPublicUrl(fileName);

      imageUrl = data.publicUrl;
    }

    if (editing) {
      // 🔁 UPDATE
      const { error } = await supabase
        .from("services")
        .update({
          title,
          description,
          image: imageUrl,
          highlight
        })
        .eq("id", editing.id);

      if (error) {
        console.error(error);
      } else {
        alert("Berhasil update");
      }
    } else {
      // ➕ CREATE
      if (!imageUrl) {
        alert("Image wajib saat tambah data");
        return;
      }

      const { error } = await supabase.from("services").insert([
        {
          title,
          description,
          image: imageUrl,
          highlight,
          link: "/service-detail"
        }
      ]);

      if (error) {
        console.error(error);
      } else {
        alert("Berhasil tambah");
      }
    }

    // reset
    setTitle("");
    setDescription("");
    setImageFile(null);
    setHighlight(false);
    setEditing(null);

    // 🔥 AUTO REFRESH
    getServices();
  }

  return (
    <form onSubmit={handleSubmit}>
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
        accept="image/webp, image/png, image/jpeg"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      {/* highlight */}
      <label>
        <input
          type="checkbox"
          checked={highlight}
          onChange={(e) => setHighlight(e.target.checked)}
        />
        Highlight Service
      </label>

      <button type="submit" className="btn btn-accent">
        {editing ? "Update Service" : "Tambah Service"}
      </button>
    </form>
  );
};

export default ServiceForm;