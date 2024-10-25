export async function POST(request: Request) {
  try {
    const data = await request.json();

    if (!data["name"]) return new Response(null, { status: 400 });
    if (!data["email"]) return new Response(null, { status: 400 });

    let [first, ...last] = data["name"]?.split(" ");
    last = last.join(" ");

    // console.log({ data, first, last });

    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(
    //       new Response(JSON.stringify({ status: "ok" }), {
    //         headers: { "Content-Type": "application/json" },
    //       }),
    //     );
    //   }, 1000);
    // });

    const res = await fetch(
      "https://us22.api.mailchimp.com/3.0/lists/35bf9ab309/members",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic " + process.env.MAILCHIMP_API_KEY,
        },
        body: JSON.stringify({
          email_address: data["email"],
          status: "subscribed",
          merge_fields: {
            FNAME: first,
            LNAME: last,
          },
        }),
      },
    );

    const body = await res.json();

    if (body.status != "subscribed") {
      console.error(body);
      throw new Error(body.title);
    }

    return new Response(JSON.stringify({ status: "ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: (err as Error).message }), {
      status: 500,
    });
  }
}
