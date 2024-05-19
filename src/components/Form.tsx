"use client";

export default function Form() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement).get("email");
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-black bg-white/70"
        type="email"
        name="email"
        placeholder="name@email.com"
      />

      <button
        type="submit"
        className="uppercase font-semibold mt-4 px-4 py-2 border border-[#f0298c]"
      >
        subscribe to the newsletter
      </button>
    </form>
  );
}
