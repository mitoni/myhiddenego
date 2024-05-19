"use client";

export default function Form() {
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement).get("email");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-[min-content_min-content] grid-rows-2 gap-4">
        <label htmlFor="form-name">Name</label>
        <input
          id="form-name"
          className="text-black bg-white/70"
          type="text"
          name="name"
          required
        />

        <label htmlFor="form-name">Email</label>
        <input
          id="form-email"
          className="text-black bg-white/70"
          type="email"
          name="email"
          required
        />
      </div>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="uppercase font-semibold mt-4 px-4 py-2 border border-[#f0298c]"
        >
          subscribe to the newsletter
        </button>
      </div>
    </form>
  );
}
