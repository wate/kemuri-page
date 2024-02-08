const iCalContent: PagesFunction = async (context) => {
  try {
    const icalURL = new URL(context.request.url).searchParams.get("ical");
    if (!icalURL) {
      return new Response("No iCal URL provided", { status: 400 });
    }
    const iCalData = await fetch(icalURL);
    console.log(iCalData.body);
    return new Response(iCalData.body, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Max-Age": "86400",
      },
    });
  } catch (error) {
    return new Response(`${error.message}`, { status: 500 });
  }
};

export const onRequest = [iCalContent];
